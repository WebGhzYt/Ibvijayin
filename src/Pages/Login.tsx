/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLogin } from "../store/auth/authServices";
import { useAuthStore } from "../store/auth/authStore";
import * as yup from "yup";
import { useFormik } from "formik";
import LoaderWithBackground from "../components/LoaderWithBackground.tsx";

const Login: React.FC = () => {
    const { mutate, data, error, isError } = useLogin();
    const { setLogin, setUserDetails, setToken } = useAuthStore();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const schema = yup.object().shape({
        mobile: yup
            .string()
            .matches(/^\d{10}$/, "Mobile number must be 10 digits")
            .required("Please enter your mobile number"),
    });

    const formik = useFormik({
        initialValues: {
            mobile: "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            setLoading(true);
            mutate({
                mobile: values.mobile,
            });
        },
    });

    useEffect(() => {
        console.log(data, 'datadata')
        if (data) {
            setLoading(false);
            if (data.status) {
                navigate(`/otp/${data.mobile}`);
                toast.success(data.msg);
            } else {
                toast.error(data.msg);
            }
        }
    }, [data, setLogin, setToken, setUserDetails]);
    useEffect(() => {
        if (isError && error) {
            setLoading(false);
            const errorMessage =
                error.response?.data?.errors?.mobile?.[0] || 
                error.response?.data?.msg || 
                "An unexpected error occurred.";
            toast.error(errorMessage);
        }
    }, [isError, error]);
    return (
        <section>
            <LoaderWithBackground visible={loading}/>
            <div className="login-page">
                <div className="container">
                    <div className="login-card">
                        <div className="login-heading">
                            <h2>
                                <span>Login </span>to your Account 👋
                            </h2>
                        </div>
                        <div className="login-form">
                            <form onSubmit={formik.handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="mobile" className="form-label">
                                        Mobile Number
                                    </label>
                                    <div className="input-group">
                                        <span className="input-group-text">+91</span>
                                        <input
                                            type="number"
                                            id="mobile"
                                            name="mobile"
                                            className="form-control"
                                            placeholder="Enter Mobile Number"
                                            value={formik.values.mobile}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                    </div>
                                    {formik.touched.mobile && formik.errors.mobile && (
                                        <p style={{ color: "red", marginTop: "5px" }}>
                                            {formik.errors.mobile}
                                        </p>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    className="login-submit mt-4"
                                    disabled={loading}
                                >
                                    {loading ? "Sending OTP..." : "Send OTP"}
                                </button>
                            </form>
                        </div>
                        <div className="sign-up-page-link">
                            <p>
                                Don’t Have an account?{" "}
                                <Link to="/signup" className="d-inline">
                                    &nbsp;Sign up{" "}
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
