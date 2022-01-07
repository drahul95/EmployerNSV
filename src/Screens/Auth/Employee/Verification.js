import React, { useEffect, useRef, useState } from 'react';
import { Formik } from "formik";
import { FormOtpInput } from "./../../../Components/molecules/FormOtp";
import * as yup from "yup";
import { PrimaryButton } from "./../../../Components/atoms/Button";
import Loader from '../../../Components/Loader';
import { emaiVerify } from './../../../Redux/actions/EmployeeLoginActions';
import { useDispatch, useSelector } from 'react-redux';
import CustomizedSnackbars from "./../../../Components/snackbars";
import axios from "./../../../config/axios";
import { store } from "./../../../Redux/store";

export const LoginEmailMobileOtpValidationSchema = yup.object().shape({
    otp: yup
        .string()
        .required("otp is required")
        .matches(/^[0-9\- ]{5,5}$/, " "),
});


export default function Verification(props) {
    const formikRef = useRef(null);
    const initialValue = {
        otp: "",
    };
    const [isLoading, setLoading] = useState(false)
    const buttonRef = useRef(null)
    const dispatch = useDispatch();
    const signUpData = useSelector((state) => state.employeeEmailVerify);
    const { emailVerify } = signUpData;
    const [toastify, setToastify] = useState({
        message: "",
        variant: "success",
        open: false
    })


    

    useEffect(() => {      
        if (emailVerify) {
            console.log('emailVerify=====>', signUpData);
            if (emailVerify.success) {
                if (emailVerify.data.next == "MOBILE_OTP_VERIFICATION") {
                    setLoading(false)
                    buttonRef.current.click()
                }
            }else{
                setLoading(false)
                setToastify({
                    ...toastify,
                    message: emailVerify.error.message,
                    open: true,
                    variant: "success",
                });
            }
        }
    }, [signUpData])


    const verifyOtp = async (values, formikHelpers) => {
        var boday = {
            device_type: "web",
            otp: values.otp
        }
        setLoading(true)
        dispatch(emaiVerify({ userObject: boday }))
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
                        token: store.getState().employeeSignup.signup.data.token,
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
            <div class="modal-dialog modal-dialog-centered"  data-keyboard="false" data-backdrop="static">
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
                                        Enter the OTP sent to your Email address
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
                        <a
                            ref={buttonRef}
                            data-bs-toggle={"modal"}
                            data-bs-target={"#mobileVerification"}
                            data-bs-dismiss={"modal"}
                        />
                    </div>

                </div>
            </div>

        </>
    );
}
