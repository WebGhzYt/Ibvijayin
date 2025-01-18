/* eslint-disable @typescript-eslint/no-explicit-any */
export interface UserInterface {
  authTokenIssuedAt: number;
  authorizedOtp: number;
  countryCode: string;
  contactNumber: string;
  created: string;
  email: string;
  failedLoginAttempts: number;
  firstName: string;
  isDeleted: boolean;
  isSuspended: boolean;
  isVerified: boolean;
  lastName: string;
  role: string;
  preventLoginTill: number;
  resetToken: string;
  updated: string;
  __v: number;
  _id: string;
}

export interface LoginRequest {
  mobile: string;
}

export interface LoginResponse {
  status: boolean;
  mobile: number;
  data: {
    token: string;
    user: UserInterface | undefined;
  };
  msg: string;
}
export interface VerifyOTPRequest {
  mobile: any;
  otp: string;
}

export interface VerifyOTPResponse {
  success: boolean;
  data: undefined;
  access_token?: string;
  message?: string;
}
