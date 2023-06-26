import { Dispatch } from "@reduxjs/toolkit";
import { store } from "..";
import api from "../../api";
import { ILoginRequest } from "../../api/auth/types";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logOutSuccess,
  profileStart,
  profileSuccess,
  profileFailure,
} from "./authReducer";

export const loginUser =
  (data: ILoginRequest) =>
  async (dispath: Dispatch<any>): Promise<void> => {
    try {
      dispath(loginStart());

      const resp = await api.auth.login(data);

      dispath(loginSuccess(resp.data.accessToken));
      dispath(getProfile());
    } catch (e: any) {
      console.error(e);

      dispath(loginFailure(e.message));
    }
  };

export const logoutUser =
  () =>
  async (dispath: Dispatch): Promise<void> => {
    try {
      await api.auth.logout();

      dispath(logOutSuccess());
    } catch (e) {
      console.error(e);
    }
  };

export const getProfile =
  () =>
  async (dispatch: Dispatch<any>): Promise<void> => {
    try {
      dispatch(profileStart());

      const res = await api.auth.getProfile();

      dispatch(profileSuccess(res.data));
    } catch (e: any) {
      console.error(e);

      dispatch(profileFailure(e.message));
    }
  };

export const getAccessToken =
  () =>
  (dispatch: Dispatch<any>): string | null => {
    try {
      const accessToken = store.getState().auth.authData.accessToken;

      return accessToken;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
