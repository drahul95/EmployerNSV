import axios from "../../config/axios";
import {
  EMPLOYEE_LOGIN_FAIL,
  EMPLOYEE_LOGIN_REQUEST,
  EMPLOYEE_LOGIN_SUCCESS,
  EMPLOYEE_LOGIN_VERIFY_OTP_FAIL,
  EMPLOYEE_LOGIN_VERIFY_OTP_REQUEST,
  EMPLOYEE_LOGIN_VERIFY_OTP_SUCCESS,
  EMPLOYEE_CAPTURE_MOBILE_REQUEST,
  EMPLOYEE_CAPTURE_MOBILE_FAIL,
  EMPLOYEE_CAPTURE_MOBILE_SUCCESS,
  EMPLOYEE_SIGNUP_FAIL,
  EMPLOYEE_SIGNUP_REQUEST,
  EMPLOYEE_SIGNUP_SUCCESS,
  EMPLOYEE_EMAIL_VERIFY_FAIL,
  EMPLOYEE_EMAIL_VERIFY_REQUEST,
  EMPLOYEE_EMAIL_VERIFY_SUCCESS,
  EMPLOYEE_MOBILE_VERIFY_FAIL,
  EMPLOYEE_MOBILE_VERIFY_SUCCESS,
  EMPLOYEE_MOBILE_VERIFY_REQUEST
} from '../constants/EmployeeLoginConstants';
import { store } from "../../Redux/store";


export const Logins =
  ({ userObject }) =>
    async (dispatch) => {
      const url = "/auth/login";
      try {
        let { data } = await axios.post(url, userObject);
        dispatch({
          type: EMPLOYEE_LOGIN_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: EMPLOYEE_LOGIN_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.response.data,
        });
      }
    };

export const verifyLoginOtp =
  ({ userObject }) =>
    async (dispatch) => {
      try {
        var url = "";
        if (store.getState().employeeLogin.login.data.next == "MOBILE_OTP_VERIFICATION") {
          url = "/auth/mobile_otp_verify";
        } else {
          url = "/auth/email_otp_verify";
        }
        let { data } = await axios.post(
          url,
          Object.assign({}, userObject),
          {
            headers: {
              token: store.getState().employeeLogin.login.data.token,
            },
          }
        );
        dispatch({
          type: EMPLOYEE_CAPTURE_MOBILE_SUCCESS,
          payload: data,
        });

      } catch (error) {
        dispatch({
          type: EMPLOYEE_LOGIN_VERIFY_OTP_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.response.data,
        });
      }
    };


export const captureVerifyOtp =
  ({ userObject }) =>
    async (dispatch) => {
      try {
        const url = '/auth/capture';

        let { data } = await axios.post(
          url,
          Object.assign({}, userObject),
          {
            headers: {
              token: store.getState().employeeLogin.login.data.token,
            },
          }
        );
        dispatch({
          type: EMPLOYEE_CAPTURE_MOBILE_SUCCESS,
          payload: data,
        });

      } catch (error) {
        dispatch({
          type: EMPLOYEE_CAPTURE_MOBILE_FAIL,
          payload: error
        });
      }
    };



export const SignUp =
  ({ userObject }) =>
    async (dispatch) => {
      const url = "/auth/signup";
      try {
        let { data } = await axios.post(url, userObject);
        console.log("data---------------------->", data);
        dispatch({
          type: EMPLOYEE_SIGNUP_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: EMPLOYEE_SIGNUP_FAIL,
          payload: error
        });
      }
    };



export const emaiVerify =
  ({ userObject }) =>
    async (dispatch) => {
      try {
        const url = '/auth/email_otp_verify';

        let { data } = await axios.post(
          url,
          Object.assign({}, userObject),
          {
            headers: {
              token: store.getState().employeeSignup.signup.data.token,
            },
          }
        );
          dispatch({
            type: EMPLOYEE_EMAIL_VERIFY_SUCCESS,
            payload: data,
          });
      } catch (error) {
        var err = {success: false, error: {code: "VERIFICATION_TIMEOUT", message: "Your OTP is invalid or expired."}}
        dispatch({
          type: EMPLOYEE_EMAIL_VERIFY_FAIL,
          payload: err
        });
      }
    };


export const mobileVerifyAction =
  ({ userObject }) =>
    async (dispatch) => {
      try {
        const url = '/auth/mobile_otp_verify';

        let { data } = await axios.post(
          url,
          Object.assign({}, userObject),
          {
            headers: {
              token: store.getState().employeeEmailVerify.emailVerify.data.token,
            },
          }
        );
        dispatch({
          type: EMPLOYEE_MOBILE_VERIFY_SUCCESS,
          payload: data,
        });

      } catch (error) {
        var err = {success: false, error: {code: "VERIFICATION_TIMEOUT", message: "Your OTP is invalid or expired."}}
        dispatch({
          type: EMPLOYEE_MOBILE_VERIFY_FAIL,
          payload: err
        });
      }
    };

