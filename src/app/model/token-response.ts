export interface TokenResponse {
  iss: string;
  sub: string;
  name: string;
  email: string;
  profile: string;
  iat: number;
  exp: number;
}
