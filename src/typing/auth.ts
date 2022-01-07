export interface ICheckSignUpDetail {
  legalentityName: string;
  email: string;
  phone: number;
}

export interface ISignUp {
  legalentityName: string;
  countrycode: string;
  phone: string;
  email: string;
  password: string;
  emailOtp?: string;
  mobileOtp?: string;
  confirmPassword?: string;
  country?: string;
}

export interface ILogin {
  uname: string;
  password: string;
}

export interface ISendOtp {
  uname: string;
  resend_otp_type: "signup";
  otp_type: "phone" | "email";
}

export interface IVerifyOtp {
  email?: string;
  phone?: string;
  otp: string | number;
}
