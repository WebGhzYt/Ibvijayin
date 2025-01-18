import { Link, useNavigate } from "react-router-dom";
import LoaderWithBackground from "../components/LoaderWithBackground.tsx";
import { useEffect, useState } from "react";
import { getApi, postApi } from "../services/services.ts";
import { APIPATH } from "../api/urls.ts";
import { useAuthStore } from "../store/auth/authStore.ts";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  const { token, logout } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [streams, setStreams] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getCategory();
    getStream();
  }, []);

  const getCategory = () => {
    setLoading(true);
    postApi(APIPATH.getCategory, {}, token, logout)
      .then((resp) => {
        const { status, data, message } = resp;
        if (status) {
          setCategories(data);
        } else {
          toast.error(message);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };

  const getStream = () => {
    setLoading(true);
    getApi(APIPATH.getSteam, token, logout)
      .then((resp) => {
        const { status, data, message } = resp;
        if (status) {
          setStreams(data);
        } else {
          toast.error(message);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };

  const initialValues: any = {
    name: "",
    mobile: "",
    email: "",
    city: "",
    class_id: "",
    category_id: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    mobile: Yup.string()
      .matches(/^\d{10}$/, "Mobile number must be 10 digits")
      .required("Mobile number is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    city: Yup.string().required("City is required"),
    class_id: Yup.string().required("Please select a class"),
    category_id: Yup.string().required("Please select a category"),
  });

  const handleSubmit = (values: any, { setSubmitting }: any) => {
    setLoading(true);
    postApi(APIPATH.signup, values, token, logout)
      .then((resp) => {
        const { status, message, data } = resp;
        if (status) {
            navigate(`/otp/${resp.mobile}`);
          toast.success(data.msg);
        } else {
          toast.error(message);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
        setSubmitting(false);
      });
  };

  return (
    <section>
      <LoaderWithBackground visible={loading} />
      <div className="login-page">
        <div className="container">
          <div className="login-card">
            <div className="login-heading">
              <h2>
                <span> Sign-up </span> your Account 👋
              </h2>
            </div>
            <div className="login-form">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <Field
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter Your Name"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="mobile" className="form-label">
                        Mobile Number
                      </label>
                      <div className="input-group">
                        <span className="input-group-text">+91</span>
                        <Field
                          type="text"
                          name="mobile"
                          className="form-control"
                          placeholder="Enter Mobile Number"
                        />
                      </div>
                      <ErrorMessage
                        name="mobile"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email Address
                      </label>
                      <Field
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter Email Address"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="city" className="form-label">
                        City Name
                      </label>
                      <Field
                        type="text"
                        name="city"
                        className="form-control"
                        placeholder="Enter City"
                      />
                      <ErrorMessage
                        name="city"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="class_id" className="form-label">
                        Select your stream
                      </label>
                      <Field
                        as="select"
                        name="class_id"
                        className="form-select"
                      >
                        <option value="">Select</option>
                        {streams?.map((item: any, index) => (
                          <option key={index} value={item.id}>
                            {item.name}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage
                        name="class_id"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="category_id" className="form-label">
                        Select Class
                      </label>
                      <Field
                        as="select"
                        name="category_id"
                        className="form-select"
                      >
                        <option value="">Select</option>
                        {categories?.map((item: any, index) => (
                          <option key={index} value={item.id}>
                            {item.category_name}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage
                        name="category_id"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <button
                      type="submit"
                      className="login-submit"
                      disabled={isSubmitting}
                    >
                      Submit
                    </button>
                    <div className="sign-up-page-link">
                      <p>
                        Already have an account ?
                        <Link to="/login" className="d-inline">
                          &nbsp;login
                        </Link>
                      </p>
                    </div>
                    <div className="sign-up-page-link">
                      <p>
                        By Signing in, I accept the
                        <a href="#" className="d-inline">
                          <span className="d-none d-sm-inline">
                            Terms and conditions
                          </span>
                          <span className="d-inline d-sm-none">T&amp;C</span>
                        </a>
                      </p>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
