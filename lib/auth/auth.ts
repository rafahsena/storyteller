import { http } from "../http";
import { SIGN_IN } from "../../constants/endpoints";
import { SignInResponse } from "./auth.types";

export const signIn = async (
  email: string,
  password: string
): Promise<SignInResponse> => {
  const response = await http.post(SIGN_IN, { email, password });
  return response.data;
};
