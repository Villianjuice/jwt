import { Dispatch } from "@reduxjs/toolkit";
import api from "../../api";
import { ILoginRequest } from "../../api/auth/types";
import { loginFailure, loginStart, loginSuccess } from "./authReducer";

export const loginUser =
  (data: ILoginRequest) =>
  async (dispath: Dispatch): Promise<void> => {
    try {
      dispath(loginStart())

      const resp = await api.auth.login(data);
      dispath(loginSuccess(resp.data.accessToken))
      
    } catch (e: any) {
      console.error(e)

      dispath(loginFailure(e.message))
    }
  };
