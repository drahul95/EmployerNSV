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

export const employeeLogin = (state = { loading: true }, action) => {
  switch (action.type) {
    case EMPLOYEE_LOGIN_REQUEST:
      return { loading: true };
    case EMPLOYEE_LOGIN_SUCCESS:
      return { loading: false, login: action.payload };
    case EMPLOYEE_LOGIN_FAIL:
      return { loading: false, login: action.payload };
    case EMPLOYEE_LOGIN_VERIFY_OTP_REQUEST:
      return { loading: true };
    case EMPLOYEE_LOGIN_VERIFY_OTP_SUCCESS:
      return { loading: false, login: action.payload };
    case EMPLOYEE_LOGIN_VERIFY_OTP_FAIL:
      return { loading: false, login: action.payload };
    case EMPLOYEE_CAPTURE_MOBILE_REQUEST:
      return { loading: true };
    case EMPLOYEE_CAPTURE_MOBILE_SUCCESS:
      return { loading: false, capture: action.payload };
    case EMPLOYEE_CAPTURE_MOBILE_FAIL:
      return { loading: false, capture: action.payload };
    default:
      return state;
  }
};

export const employeeCapture = (state = { loading: true }, action) => {
  switch (action.type) {
    case EMPLOYEE_CAPTURE_MOBILE_REQUEST:
      return { loading: true };
    case EMPLOYEE_CAPTURE_MOBILE_SUCCESS:
      return { loading: false, capture: action.payload };
    case EMPLOYEE_CAPTURE_MOBILE_FAIL:
      return { loading: false, capture: action.payload };
    default:
      return state;
  }
};


export const employeeSignup = (state = { loading: true }, action) => {
  switch (action.type) {
    case EMPLOYEE_SIGNUP_REQUEST:
      return { loading: true };
    case EMPLOYEE_SIGNUP_FAIL:
      return { loading: false, signup: action.payload };
    case EMPLOYEE_SIGNUP_SUCCESS:
      return { loading: false, signup: action.payload };
    default:
      return state;
  }
};


export const employeeEmailVerify = (state = { loading: true }, action) => {
  switch (action.type) {
    case EMPLOYEE_EMAIL_VERIFY_REQUEST:
      return { loading: true };
    case EMPLOYEE_EMAIL_VERIFY_FAIL:
      return { loading: false, emailVerify: action.payload };
    case EMPLOYEE_EMAIL_VERIFY_SUCCESS:
      return { loading: false, emailVerify: action.payload };
    default:
      return state;
  }
};

export const employeeMobileVerify = (state = { loading: true }, action) => {
  switch (action.type) {
    case EMPLOYEE_MOBILE_VERIFY_REQUEST:
      return { loading: true };
    case EMPLOYEE_MOBILE_VERIFY_SUCCESS:
      return { loading: false, mobileVerify: action.payload };
    case EMPLOYEE_MOBILE_VERIFY_FAIL:
      return { loading: false, mobileVerify: action.payload };
    default:
      return state;
  }
};
