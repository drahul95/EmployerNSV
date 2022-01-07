import "./Contact.scss";
import ContactBg from "../../images/contact_bg.svg";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import ErrorMessage from "./../../Components/contact/ErrorMessag"
import axios from "./../../config/axios";
import CustomizedSnackbars from "./../../Components/snackbars";
import { useEffect, useState } from "react";

require("dotenv").config();
const BASE_URL = process.env.REACT_APP_BASE_URL;

function Contact() {
  const [toastify, setToastify] = useState({
    message: "",
    variant: "success",
    open: false
  })



  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email address is not vaild.")
      .required("Email address is required"),
    fullname: Yup.string()
      .required("Full name is required"),
    message: Yup.string()
      .required("Message is required"),
    mobile: Yup.string()
      .required("Mobile number is required")
      .min(10, "Mobile number is not valid.")
      .max(10, "Mobile number is not valid."),
  });


  const handleSubmit = async (values,  { resetForm }) => {
    const url = "/contactus"
    try {
      let { data } = await axios.post(
        url,
        Object.assign({}, values)
      )
      if (data.success) {
        resetForm()
        setToastify({
          ...toastify,
          message: data.message,
          variant: "success",
          open: true
        })
      } else {
        setToastify({
          ...toastify,
          message: "Something went wrong network response timed out",
          variant: "error",
          open: true
        })
      }
    } catch (error) {
      setToastify({
        ...toastify,
        message: "Something went wrong network response timed out",
        variant: "error",
        open: true
      })
    }
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
        return;
    }
    setToastify({
        ...toastify,
        open: false,
    });
};


  return (
    <div className="container">
      <CustomizedSnackbars
        message={toastify.message}
        variant={toastify.variant}
        open={toastify.open}
        handleClose={handleClose}
      />

      <div className="widthwrapper">
        <div className="contactpagediv">
          <div className="row py-5">
            <div className="col-lg-6">
              <span className="title">Contact Us</span>
              <span className="font18 greytxtclr block">
                Feel free to contact us
              </span>
            </div>
            <div className="col-lg-6">
              <img className="align-right" src={BASE_URL + ContactBg} alt="" />
            </div>
          </div>

          <Formik
            initialValues={{ fullname: '', email: '', mobile: '', message: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ touched, errors, values }) =>
              <Form >
                <div className="row">
                  <div className="col-12">
                    <div className="row">
                      <div className="input-group mb-3 col-12">
                        <Field
                          className={`form-control input py-3 lghtbluebg blcktxtclr brdrds8 form-control px-4 font14 ${touched.fullname && errors.fullname && 'span-alert'}`}
                          type="text"
                          autocomplete="off"
                          placeholder="Full Name"
                          name="fullname"
                        />
                      </div>
                      {touched.fullname && (
                        <ErrorMessage
                          message={errors.fullname}
                        />
                      )}

                      <div className="input-group mb-3 col-lg-6">
                        <Field
                          className={`form-control input py-3 lghtbluebg blcktxtclr brdrds8 form-control px-4 font14 ${touched.email && errors.email && 'span-alert'}`}
                          type="text"
                          autocomplete="off"
                          placeholder="Email Id"
                          name="email"
                        />
                      </div>
                      {touched.email && (
                        <ErrorMessage
                          message={errors.email}
                        />
                      )}


                      <div className="input-group mb-3 col-lg-6">
                        <Field
                          className={`form-control input py-3 lghtbluebg blcktxtclr brdrds8 form-control px-4 font14 ${touched.mobile && errors.mobile && 'span-alert'}`}
                          type="number"
                          autocomplete="off"
                          placeholder="Mobile Number"
                          name="mobile"
                        />
                      </div>
                      {touched.mobile && (
                        <ErrorMessage
                          message={errors.mobile}
                        />
                      )}

                      <Field name="message">
                        {({
                          field, // { name, value, onChange, onBlur }
                          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                          meta,
                        }) => (
                          <div>
                            <div className="input-group mb-3 col-12">
                              <textarea
                                className={`form-control input py-3 lghtbluebg blcktxtclr brdrds8 form-control px-4 font14 ${touched.message && errors.message && 'span-alert'}`}
                                cols="30"
                                rows="7"
                                autocomplete="off"
                                placeholder="Message"
                                {...field}
                              ></textarea>
                            </div>
                            {meta.touched && meta.error && (
                              <ErrorMessage
                                message={meta.error}
                              />
                            )}
                          </div>
                        )}
                      </Field>

                      <div className="col-12">
                        <button type="submit" className="darkbluebg_whttxt py-3 width_full brdrds8 nobrder">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            }
          </Formik>
        </div>
      </div>
    </div>
  );
}
export default Contact;
