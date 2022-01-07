import axios from "../config/axios";
import {
  ICheckSignUpDetail,
  ILogin,
  ISendOtp,
  ISignUp,
  IVerifyOtp,
} from "../typing/auth";
import { store } from "../Redux/store";

export const signUpApi = async (
  payload: Pick<
    ISignUp,
    "legalentityName" | "email" | "phone" | "password" | "countrycode"
  >
) => {
  const url = "/employer/auth/signUp";

  try {
    let { data } = await axios.post(url, payload, {
      headers: {
        token: store.getState().common.token,
      },
    });

    return data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const loginApi = async (payload: ILogin) => {
  const url = "/employer/auth/logIn";

  try {
    let { data } = await axios.post(url, payload);
    if (data.data) localStorage.setItem("jietoken", data.data.token);

    return data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const checkSignUpDetailApi = async (payload: ICheckSignUpDetail) => {
  const url = "/employer/auth/check_signup_detail";

  try {
    let { data } = await axios.post(url, payload);

    return data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const sendOtpApi = async (payload: ISendOtp) => {
  const url = "/employer/auth/sendOTP";

  try {
    let { data } = await axios.post(url, payload);

    localStorage.setItem("jietoken", data.data.token);

    return data;
  } catch (error: any) {
    //throw error.response.data;
  }
};

export const verifyEmailOtpApi = async (payload: Pick<IVerifyOtp, "otp">) => {
  const url = "/employer/auth/verifyOTP";

  try {
    let { data } = await axios.post(
      url,
      Object.assign({}, { otp: payload.otp }),
      {
        headers: {
          token: store.getState().common.token,
        },
      }
    );

    return data;
  } catch (error: any) {
    return { error: { message: "Unauthorized" } };
  }
};

export const verifyForgetPasswordApi = async (payload: any) => {
  const url = "/employer/auth/verifyResetPasswordOTP";

  try {
    let { data } = await axios.post(
      url,payload,
      {
        headers: {
          token: store.getState().common.token,
        },
      }
    );

    return data;
  } catch (error: any) {
    //return { error: { message: "Unauthorized" } };
  }
};

export const forgetPasswordRequestApi = async (payload: any) => {
  const url = "/employer/auth/resetPasswordRequest";

  try {
    let { data } = await axios.post(url, payload, {
      headers: {
        token: store.getState().common.token,
      },
    });

    return data;
  } catch (error: any) {
  }
};

export const saveResetPasswordApi = async (payload: any) => {
  const url = "/employer/auth/saveResetPassword";

  try {
    let { data } = await axios.post(url, payload, {
      headers: {
        token: store.getState().common.token,
      },
    });

    return data;
  } catch (error: any) {
  }
};

