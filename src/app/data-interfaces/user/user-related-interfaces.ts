export interface IUserRegisteredMessage {
  error?: any;
  message?: string;
}

export interface IUser {
  token?: string;
  party_id?: number;
  salutation?: string;
  first_name?: string;
  middle_name?: string;
  last_name?: string;
  username?: string;
  gender?: string;
  birthdate?: string;
  email?: string;
  phone_number?: string;
}

export interface LoginError {
  errorStatusCode?: number;
  errorMessage?: string;
  error?: boolean;
}
