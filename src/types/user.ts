export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: "admin" | "agent";
  created_at: string;
  updated_at: string;
  company: {
    id: string;
    name: string;
    website?: string;
    plan: "free" | "basic" | "premium";
  };
  preferences: {
    theme: "light" | "dark" | "system";
    notifications: boolean;
    emailAlerts: boolean;
  };
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData extends LoginCredentials {
  name: string;
  companyName: string;
  website?: string;
}
