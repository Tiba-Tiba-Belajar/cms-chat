const ENV = {
  BASE_API_URL: process.env.NEXT_PUBLIC_BASE_URL || "",
  X_API_KEY: process.env.NEXT_PUBLIC_X_API_KEY || "",
  X_APP_VERSION: "1.0.0",
  NODE_ENV: process.env.NODE_ENV || "development",
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || "",
  SELLER_APP_URL: process.env.NEXT_PUBLIC_SELLER_APP_URL || "",
  GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "",
  GOOGLE_SECRET_ID: process.env.NEXT_PUBLIC_GOOGLE_SECRET_ID || "",
  GOOGLE_REDIRECT_URL: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URL || "",
  MASTER_SERVICE: "/master-service",
} as const;

export default ENV;