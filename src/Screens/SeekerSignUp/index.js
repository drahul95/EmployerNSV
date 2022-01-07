
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CounrtyList } from '../../Redux/actions/CountryListAction';
import Loader from '../../Components/Loader';
import TextField from '@material-ui/core/TextField';
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "./../../config/axios";
import { SignUp } from "./../../Redux/actions/EmployeeLoginActions";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import CustomizedSnackbars from "./../../Components/snackbars";


function SeekerSignUpScreen() {
    const dispatch = useDispatch();
    const countryData = useSelector((state) => state.countryList);
    const [isLoading, setLoading] = useState(true)
    const { country, loading } = countryData;
    const [countryList, setCountryList] = useState({})
    const [selectedCountries, setSelectedCountries] = useState({ name: "Select", id: "-1" })
    const [captchar, setCaptchar] = useState("")
    const [captcharFlag, setCaptcharFlag] = useState(false)
    const [captcharVerify, setCaptcharVerify] = useState(false)
    const signUpData = useSelector((state) => state.employeeSignup);
    const { signup } = signUpData;
    const buttonRef = useRef(null)
    const captureRef = useRef(null)
    const loginRef = useRef(null)
    const [showError, setShowError] = useState("")
    const [toastify, setToastify] = useState({
        message: "",
        variant: "success",
        open: false
    })
    const [signUpAlert, SetSignUpAlert] = useState(false);
    const [signUpAlertMsg, setSignUpAlertMsg] = useState("");



    useEffect(() => {
        if (signup) {
            if (signup?.success) {
                setLoading(false)
                if (signup.data.next == "CAPTURE") {
                    captureRef.current.click()
                    setShowError("")
                } else if (signup.data.next == "EMAIL_OTP_VERIFICATION") {
                    buttonRef.current.click()
                    setShowError("")
                } else if (signup.data.next == "LOGIN") {
                    SetSignUpAlert(true)
                    setSignUpAlertMsg(signup.data.message)
                    setTimeout(() => {
                        loginRef.current.click()
                    }, 2000)
                }
            } else {
                setLoading(false)
            }
        }
    }, [signUpData])

    useEffect(() => {
        dispatch(CounrtyList())
    }, [])

    useEffect(() => {
        if (country) {
            if (country?.success === true) {
                setLoading(false)
                setCountryList(country.data)
                setSelectedCountries(country.default);
            } else {
                setLoading(false)
            }
        }
    }, [loading])

    const handleSubmit = async (values, formikHelpers) => {
        if (captcharVerify) {
            var boday = {
                auth_type: "email_otp",
                email_otp: values,
                device_type: "web"
            }
            setLoading(true)
            setCaptcharFlag(false)
            dispatch(SignUp({ userObject: boday }));
        } else {
            setCaptcharFlag(true)
            setCaptchar("Captcha not verified")
        }
    }

    const LoginSchema = Yup.object().shape({
        email: Yup.string()
            .email("Email address is not vaild.")
            .required("Email address is required"),
        mobile: Yup.string()
            .required("Mobile number is required")
            .min(10, "Mobile number is not valid.")
            .max(10, "Mobile number is not valid."),
        first_name: Yup.string()
            .required("First name is required")
            .matches(/^[a-zA-Z '.]+$/, "Please enter only alphabets, space and apostrophe in first name.."),
        last_name: Yup.string()
            .matches(/^[a-zA-Z '.]+$/, "Please enter only alphabets, space and apostrophe in first name.."),
    });

    const postRecaptcha = async (value) => {
        setLoading(true)
        try {
            const boday = {
                humankey: value
            }
            const url = "/auth/googleCaptchaVerification"
            let { data } = await axios.post(
                url,
                Object.assign({}, boday)
            );
            if (data.success) {
                setLoading(false)
                setCaptcharVerify(true)
                setCaptcharFlag(false)
            } else {
                setCaptcharFlag(true)
                setCaptchar("Captcha not verified")
                setLoading(false)
            }
        } catch (error) {
            setCaptcharFlag(true)
            setLoading(false)
            setCaptchar("Captcha not verified")
        }
    }


    const responseFacebook = async (response) => {
        if (response.status != "not_authorized") {
            let boday = {
                auth_type: "facebook",
                facebook: {
                    accesstoken: response.accessToken,
                    uid: response.userID,
                    full_name: response.name,
                    email: response.email,
                    imageurl: response.picture.url,
                    raw_data: response,
                    mobile: "",
                },
                device_type: "web",
            };
            dispatch(SignUp({ userObject: boday }));
        }
    };


    const getGoogleRespError = async (response) => {
        console.log("google login is not working", JSON.stringify(response));
    }

    const getGoogleResp = async (response) => {
        var session_id = Math.floor(100000000 + Math.random() * 900000000);
        localStorage.setItem("sessionId", session_id);
        if (response.error === undefined || response.error !== "popup_closed_by_user" || response.error !== "idpiframe_initialization_failed") {
            if (response.profileObj) {
                let boday = {
                    auth_type: "google",
                    google: {
                        accesstoken: response.accessToken,
                        uid: response.googleId,
                        full_name:
                            response.profileObj ? response.profileObj.givenName ? response.profileObj.givenName : '' : "" +
                                " " +
                                response.profileObj.familyName,
                        email: response.profileObj.email,
                        imageurl: response.profileObj.imageUrl,
                        raw_data: response,
                        mobile: "",
                    },
                    device_type: "web",
                };


                dispatch(SignUp({ userObject: boday }));
            }
        }
    };

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
            <CustomizedSnackbars
                message={toastify.message}
                variant={toastify.variant}
                open={toastify.open}
                handleClose={handleClose}
            />
            <div>
                <Formik
                    initialValues={{ first_name: '', last_name: '', email: '', mobile: '' }}
                    validationSchema={LoginSchema}
                    onSubmit={handleSubmit}
                >
                    {({ touched, errors, isSubmitting, values }) =>
                        <Form >
                            <div className='row'>
                                <div className="col-12 col-lg-6 mb-3">
                                    <Field
                                        type="text"
                                        placeholder="First Name"
                                        name="first_name"
                                        autocomplete="off"
                                        className={`py-3 lghtbluebg blcktxtclr brdrds8 form-control px-4 font14 ${touched.first_name && errors.first_name && " span-alert"}`}
                                    />
                                    <div className='d-flex justify-content-end'>
                                        <span className='span-alert'>{touched.first_name && errors.first_name}</span>
                                    </div>
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <Field
                                        type="text"
                                        placeholder="Last Name"
                                        name="last_name"
                                        autocomplete="off"
                                        className={`py-3 lghtbluebg blcktxtclr brdrds8 form-control px-4 font14 ${touched.last_name && errors.last_name && " span-alert"}`}
                                    />
                                    <div className='d-flex justify-content-end'>
                                        <span className='span-alert'>{touched.last_name && errors.last_name}</span>
                                    </div>
                                </div>

                                <div className="col-12 mb-3">
                                    <Field
                                        type="email"
                                        name="email"
                                        autocomplete="off"
                                        placeholder="Email Address"
                                        className={`py-3 lghtbluebg blcktxtclr brdrds8 form-control px-4 font14 nobrder ${touched.email && errors.email && " span-alert"}`}
                                    />
                                    <div className='d-flex justify-content-end'>
                                        <span className='span-alert'>{touched.email && errors.email}</span>
                                    </div>
                                </div>

                                <div className="col-12 mb-3">
                                    <div>
                                        <Autocomplete
                                            id="combo-box-demo"
                                            className="BlueSelectDropdown nobrder"
                                            options={countryList}
                                            disabled
                                            disableClearable
                                            getOptionLabel={(option) => option.name}
                                            value={selectedCountries}
                                            classes={{
                                                paper: "autocomplatepapar font14",
                                            }}
                                            renderInput={(params) => {
                                                params.inputProps.className = "noborderinput font14";
                                                params.InputProps.className = "noBeforeAfter";
                                                params.InputProps.placeholder = "Select";
                                                return <TextField {...params} />;
                                            }}
                                        />
                                    </div>
                                </div>


                                <div className="col-12 mb-3">
                                    <div className="d-flex justify-content-between">
                                        <div className="py-3 countrycode bold_600 lghtbluebg blcktxtclr brdrds8 form-control font14 nobrder">
                                            <span>+{"91"}</span>
                                        </div>
                                        <Field
                                            type="number"
                                            autoCapitalize={false}
                                            autocomplete="off"
                                            placeholder="Mobile Number"
                                            className={`py-3 lghtbluebg blcktxtclr brdrds8 form-control px-4 font14 nobrder ${touched.mobile && errors.mobile && " span-alert"}`}
                                            name="mobile"
                                        />
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <span className='span-alert'>{touched.mobile && errors.mobile}</span>
                                    </div>
                                </div>

                                <div className='d-flex justify-content-end'>
                                    <span className='span-alert'>{signUpAlert && signUpAlertMsg}</span>
                                </div>

                                <div className="col-12 mb-3">
                                    <label className="py-3 blcktxtclr bold_500 font14">
                                        Captcha
                                    </label>

                                    <ReCAPTCHA
                                        sitekey="6LcuT0ocAAAAALMdZeo42llRrUZnWJD_1epvmQNY"
                                        onChange={(value) => postRecaptcha(value)}
                                    />
                                    <div className='d-flex justify-content-left'>
                                        <span className='span-alert'>{captcharFlag && captchar}</span>
                                    </div>
                                </div>

                                <div className='d-flex justify-content-left'>
                                    <span className='span-alert'>{showError && showError}</span>
                                </div>


                                <div className="col-12 pt-3">
                                    <button
                                        type="submit"
                                        className="btn whitecolor darkbluebg py-3 brdrds8 font14 mb-3 width_full"
                                    >
                                        Get Verification Code
                                    </button>
                                </div>
                                <a
                                    ref={captureRef}
                                    data-bs-toggle={"modal"}
                                    data-bs-target={"#CaptureMobile"}
                                    data-bs-dismiss={"modal"}
                                />

                                <a
                                    ref={loginRef}
                                    data-bs-toggle={"modal"}
                                    data-bs-target={"#SignModal"}
                                    data-bs-dismiss={"modal"}
                                />

                                <a
                                    ref={buttonRef}
                                    data-bs-toggle={"modal"}
                                    data-bs-target={"#verification"}
                                    data-bs-dismiss={"modal"}
                                />
                            </div>
                        </Form>
                    }
                </Formik>
            </div>
            <div className="row my-4">
                <div className="break">
                    <span className="font14 block py-2 px-2">Or</span>
                </div>
            </div>
            <div className="row">
                <div className="social_login">
                    <ul>
                        <li>
                            <FacebookLogin
                                appId="595413994831998"
                                autoLoad={false}
                                authType="reauthenticate"
                                fields="name,email,picture"
                                callback={responseFacebook}
                                cssclassName="fcb drkbluecolor inline_block ps-4"
                                textButton="Facebook"
                                icon={
                                    <svg
                                        className="fb_color me-3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="9.324"
                                        height="20.226"
                                        viewBox="0 0 9.324 20.226"
                                    >
                                        <defs></defs>
                                        <g transform="translate(-59.163 -248.739)">
                                            <g transform="translate(59.163 248.739)">
                                                <g transform="translate(0 0)">
                                                    <path
                                                        className="a"
                                                        d="M8.949,10.093H6.183V20.226H1.993V10.093H0V6.532H1.993v-2.3A3.929,3.929,0,0,1,6.22,0l3.1.013V3.469H7.072a.853.853,0,0,0-.889.971v2.1H9.315Z"
                                                    />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                }
                            />
                        </li>
                        <li>
                            <GoogleLogin
                                // clientId="691805907225-gnrgje89qgv7vho19sl7l0lodcl576ud.apps.googleusercontent.com" jit
                                clientId="997896074967-6rb4i1iv8fulte3n7f9le0d0d78iim7j.apps.googleusercontent.com"
                                buttonText="Google"
                                disabled={false}
                                onSuccess={(resp) => getGoogleResp(resp)}
                                onFailure={(resp) => getGoogleRespError(resp)}
                                cookiePolicy={'single_host_origin'}
                                prompt="select_account"
                                className="gog redcolor inline_block ps-4"
                                icon={false}
                            >
                                <svg
                                    className="g_color"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="15.225"
                                    height="15.228"
                                    viewBox="0 0 15.225 15.228"
                                >
                                    <defs></defs>
                                    <g transform="translate(-2.364 -2.363)">
                                        <path
                                            className="a"
                                            d="M8.35,9.185h3.718a4.727,4.727,0,1,1-1.283-5.069.512.512,0,0,0,.7,0l1.366-1.285a.511.511,0,0,0,0-.742A7.586,7.586,0,0,0,7.766,0a7.614,7.614,0,1,0,7.45,8.041c.006-.05.01-1.748.01-1.748H8.35a.51.51,0,0,0-.51.51v1.87A.51.51,0,0,0,8.35,9.185Z"
                                            transform="translate(2.364 2.363)"
                                        />
                                    </g>
                                </svg>
                                <span className="inline_block px-4">Google</span>
                            </GoogleLogin>
                        </li>
                    </ul>
                </div>
            </div>
            <Loader isLoading={isLoading} />
        </>
    )
}

export default SeekerSignUpScreen;