import { http } from "../http";
import { sign_in } from "../../constants/endpoints";
import { SignInResponse, TOKEN_KEY } from "./auth.types";
import cookieCutter from "cookie-cutter";

export const signIn = async (
  email: string,
  password: string
): Promise<SignInResponse> => {
  const response = await http.post(sign_in, { email, password });
  cookieCutter.set(TOKEN_KEY, response.data.token);

  return response.data;
};

export const getAuthToken = () => {
  if (typeof window !== "undefined") {
    return cookieCutter.get(TOKEN_KEY);
  }
};

export const isAuthenticated: boolean = Boolean(getAuthToken());
