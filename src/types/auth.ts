
export interface UserData {
  id: string;
  email: string;
  username?: string;
  avatar_url?: string;
}

export interface AuthState {
  user: UserData | null;
  isLoading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials extends LoginCredentials {
  username: string;
}

export interface ResetPasswordCredentials {
  email: string;
}
