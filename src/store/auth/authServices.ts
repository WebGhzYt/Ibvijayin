/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "react-query";
import { LoginRequest, LoginResponse } from "./authInterface";
import api from "../../api/api";
import { APIPATH } from "../../api/urls";
import { VerifyOTPRequest, VerifyOTPResponse } from "./authInterface";

export const useLogin = () => {
  return useMutation(
    async ({ mobile }: LoginRequest) => {
      const formData = new FormData();
      formData.append("mobile", mobile);

      const response: { data: LoginResponse } = await api.post(APIPATH.login, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response?.data;
    },
    {
      onError: (error: any) => {
        // Log error for debugging
        console.error("Login API Error:", error.response?.data);
      },
    }
  );
};
export const useVerifyOTP = () => {
  return useMutation(
    async ({ mobile, otp }: VerifyOTPRequest) => {
      const formData = new FormData();
      formData.append("mobile", mobile);
      formData.append("otp", otp);

      const response: { data: VerifyOTPResponse } = await api.post(APIPATH.verifyOTP, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response?.data;
    },
    {
      onError: (error: any) => {
        // Log error for debugging
        console.error("Verify OTP API Error:", error.response?.data);
      },
    }
  );
};
export const useCourses = () => {
  return useMutation(
    async (params: Record<string, string>) => {
      const formData = new FormData();

      // Append all dynamic parameters to FormData
      Object.entries(params).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          // Append each array item with the same key
          value.forEach((item) => formData.append(`${key}[]`, item));
        } else {
          formData.append(key, value);
        }
      });

      const response: { data: any } = await api.post(APIPATH.courses, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response?.data;
    },
    {
      onError: (error: any) => {
        // Log error for debugging
        console.error("Courses API Error:", error.response?.data);
      },
    }
  );
};