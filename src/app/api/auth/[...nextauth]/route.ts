import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';

// Create the NextAuth handler directly - no separate authConfig export
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (credentials?.email === 'demo@example.com' && credentials?.password === 'password') {
          return { id: '1', name: 'Demo User', email: 'demo@example.com' };
        }
        return null;
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
    }),
  ],
  callbacks: {
    async jwt({ token }) {
      // Note: we're not adding the role here in this minimal example
      return token;
    },
    async session({ session }) {
      return session;
    }
  },
  pages: {
    signIn: '/login',
  }
});

// Export the handler functions
export { handler as GET, handler as POST };