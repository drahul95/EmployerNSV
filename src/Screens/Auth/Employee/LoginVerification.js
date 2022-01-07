import React, { useEffect, useRef, useState } from 'react';
import { Formik } from "formik";
import { FormOtpInput } from "./../../../Components/molecules/FormOtp";
import * as yup from "yup";
import { PrimaryButton } from "./../../../Components/atoms/Button";
import Loader from '../../../Components/Loader';
import axios from "./../../../config/axios";
import { store } from "./../../../Redux/store";
import CustomizedSnackbars from "./../../../Components/snackbars";
import { useDispatch } from "react-redux";
import { setToken } from "../../../store/common/common";
export const LoginEmailMobileOtpValidationSchema = yup.object().shape({
    otp: yup
        .string()
        .required("otp is required")
        .matches(/^[0-9\- ]{5,5}$/, " "),
});


export default function LoginVerificationModal(props) {
    const dispatch = useDispatch();
    const formikRef = useRef(null);
    const initialValue = {
        otp: "",
    };
    const [isLoading, setLoading] = useState(false)
    const [toastify, setToastify] = useState({
        message: "",
        variant: "success",
        open: false
    })


    const verifyOtp = async (values, formikHelpers) => {
        const { setFieldError } = formikHelpers;
        var boday = {
            device_type: "web",
            otp: values.otp
        }
        try {
            console.log('store.getState().employeeLogin.login.data.next----->', store.getState().employeeLogin.login.data.next);
            var url = "";
            if (store.getState().employeeLogin.login.data.next == "MOBILE_OTP_VERIFICATION") {
                url = "/auth/mobile_otp_verify";
            } else {
                url = "/auth/email_otp_verify";
            }
            setLoading(true)
            let { data } = await axios.post(
                url,
                Object.assign({}, boday),
                {
                    headers: {
                        token: store.getState().employeeLogin.login.data.token,
                    },
                }
            );
            console.log(data,'datas')

            if (data.success) {
                setLoading(false)
                var encodedStringBtoA = window.btoa(data.data.token);
                var encoded = window.btoa(encodedStringBtoA);
                const encodeType = window.btoa("Employee");
                const type = window.btoa(encodeType);
                dispatch(setToken(data.data.token));
                localStorage.setItem("jietoken",data.data.token)
                window.open("/dashboard","_self")
                // window.location.href = `https://development.jobsineducation.net/landingpage/${encoded}/${type}`
            }
        } catch (error) {
            console.log('Your OTP is invalid or expired.', error);
            setFieldError("otp", 'Your OTP is invalid or expired.');
            setLoading(false)
        }
    }

    const handleResend = async () => {
        try {
            var url = '/auth/resend_otp';
            setLoading(true)
            let { data } = await axios.post(
                url,
                Object.assign({}, {}),
                {
                    headers: {
                        token: store.getState().employeeLogin.login.data.token,
                    },
                }
            );
            if (data.success) {
                setLoading(false)
                setToastify({
                    ...toastify,
                    message: data.data.message,
                    open: true,
                    variant: "success",
                });
            } else {
                setLoading(false)
                setToastify({
                    ...toastify,
                    message: "Something went wrong network response timed out",
                    open: true,
                    variant: "error",
                });
            }
        } catch (error) {
            setLoading(false)
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
        <>
            <div class="modal-dialog modal-dialog-centered">
                <CustomizedSnackbars
                    message={toastify.message}
                    variant={toastify.variant}
                    open={toastify.open}
                    handleClose={handleClose}
                />
                <div >
                    <div class="modal-content">
                        <div class="modal-header">
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={()=>window.location.reload()}
                            />
                        </div>
                        <div class="modal-body" style={{ position: 'relative' }}>
                            <div className="pb-3 mx-3">
                                <h4 className="bold blcktxtclr pt-3 font18 text-center">
                                    Login to your account
                                </h4>
                                <span className="greytxtclr block font14 text-center">
                                    Choose from thousands of jobs from one platform
                                </span>
                                {/* <form action="" className="row"> */}
                                <div className="col-12">
                                    <label className="py-3 blcktxtclr bold_500 font14">
                                        Enter the OTP sent to your Email/Phone Number
                                    </label>
                                </div>
                                <Formik
                                    innerRef={formikRef}
                                    initialValues={initialValue}
                                    validationSchema={LoginEmailMobileOtpValidationSchema}
                                    onSubmit={verifyOtp}
                                >
                                    {({
                                        handleSubmit,
                                        values,
                                        setFieldValue,
                                        touched,
                                        errors,
                                    }) => (
                                        <div className={"screen"}>

                                            <FormOtpInput name={"otp"} />
                                            <PrimaryButton
                                                type={"submit"}
                                                onClick={handleSubmit}
                                                label={"Verify"}
                                                disabled={values.otp.length !== 5}
                                            />
                                            <div className="row mt-2">
                                                <span className="greytxtclr font12 block text-center">
                                                    <span
                                                        className="drkbluecolor bold_500 ms-2"
                                                        style={{ cursor: "pointer" }}
                                                        onClick={handleResend}
                                                    >
                                                        Resend OTP
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </Formik>
                            </div>
                        </div>
                        <Loader isLoading={isLoading} />
                    </div>

                </div>
            </div>

        </>
    );
}
