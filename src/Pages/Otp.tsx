/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useVerifyOTP } from "../store/auth/authServices";
import { useAuthStore } from "../store/auth/authStore";
import LoaderWithBackground from "../components/LoaderWithBackground.tsx";

const Otp = () => {
    const { id } = useParams<any>();
    const {setUserDetails, setToken } = useAuthStore();
    const [loading, setLoading] = useState(false);
    const { mutate: verifyOTP } = useVerifyOTP();

    // Formik validation schema
    const validationSchema = Yup.object({
        otp: Yup.string()
            .required("OTP is required")
            .matches(/^\d{4,6}$/, "OTP must be 4 to 6 digits"),
    });

    const formik: any = useFormik({
        initialValues: {
            otp: "",
        },
        validationSchema,
        onSubmit: (values: any) => {
            setLoading(true);
            verifyOTP(
                {
                    otp: values.otp,
                    mobile: id
                },
                {
                    onSuccess: (data: any) => {
                        console.log("OTP Verified Successfully:", data);
                        setLoading(false);
                        setUserDetails(data?.data);
                        setToken(data?.access_token);
                    },
                    onError: (error) => {
                        console.error("Error verifying OTP:", error);
                        setLoading(false);
                    },
                }
            );
        },
    });

    return (
        <section>
            <LoaderWithBackground visible={loading}/>
            <div className="login-page">
                <div className="container">
                    <div className="login-card">
                        <div className="login-heading">
                            <h2>
                                <span>Enter </span>Your OTP 🔑
                            </h2>
                        </div>
                        <div className="login-form">
                            <form onSubmit={formik.handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="otpInput" className="form-label">
                                        OTP
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control ${
                                            formik.touched.otp && formik.errors.otp ? "is-invalid" : ""
                                        }`}
                                        placeholder="Enter OTP"
                                        id="otpInput"
                                        name="otp"
                                        value={formik.values.otp}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.otp && formik.errors.otp && (
                                        <div className="invalid-feedback">{formik.errors.otp}</div>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    className="login-submit mt-4"
                                    disabled={loading}
                                >
                                    {loading ? "Verifying..." : "Verify OTP"}
                                </button>
                            </form>
                        </div>
                        <div className="sign-up-page-link">
                            <p>
                                Didn’t receive OTP?{" "}
                                <Link to="/resend-otp" className="d-inline">
                                    &nbsp;Resend OTP
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Otp;
