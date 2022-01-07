
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CounrtyList } from '../../Redux/actions/CountryListAction';
import Loader from '../../Components/Loader';
import TextField from '@material-ui/core/TextField';
import Autocomplete from "@material-ui/lab/Autocomplete";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "./../../config/axios";
import { store } from "./../../Redux/store";
import { captureVerifyOtp } from "./../../Redux/actions/EmployeeLoginActions";


function CaptureMobile() {
    const dispatch = useDispatch();
    const countryData = useSelector((state) => state.countryList);
    const captureData = useSelector((state) => state.employeeCapture);
    const [isLoading, setLoading] = useState(true)
    const { country, loading } = countryData;
    const [countryList, setCountryList] = useState({})
    const [selectedCountries, setSelectedCountries] = useState({ name: "Select", id: "-1" })
    const closeMobileRef = useRef(null)
    const buttonRef = useRef(null)
    const { capture } = captureData;
    const closeCapture = useRef(null)

    

    const initialValue = {
        mobile: ''
    }

    const LoginSchema = Yup.object().shape({
        mobile: Yup.string()
            .required("Mobile number is required")
            .min(10, "Mobile number is not valid.")
            .max(10, "Mobile number is not valid."),
    });

    useEffect(() => {
        if (capture) {
            if (capture?.success === true) {
                buttonRef.current.click()
            }
        }
    }, [captureData])


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


    const handleSubmitVerify = async (values, formikHelpers) => {
        dispatch(captureVerifyOtp({ userObject: values }));
    }




    return (
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        ref={closeCapture}
                        onClick={() => window.location.reload()}
                    ></button>
                </div>
                <div class="modal-body">
                    <div className="pb-3 mx-3">
                        <h4 className="bold blcktxtclr pt-3 font18 text-center">
                            Register a Free Account
                        </h4>
                        <span className="greytxtclr block font14 text-center">
                            Choose from thousands of jobs from one platform
                        </span>


                        <Formik
                            initialValues={initialValue}
                            validationSchema={LoginSchema}
                            onSubmit={handleSubmitVerify}
                        >
                            {({ touched, errors, isSubmitting, values }) =>
                                <Form className="row">
                                    <div className="col-12">
                                        <label className="py-3 blcktxtclr bold_500 font14">

                                        </label>
                                    </div>
                                    <div className="col-12 mb-3">
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

                                    <div className="col-12 mb-3">
                                        <div className="d-flex justify-content-between">
                                            <div className="py-3 countrycode bold_600 lghtbluebg blcktxtclr brdrds8 px-3 font14 nobrder">
                                                <span>+{"91"}</span>
                                            </div>
                                            <Field
                                                type="number"
                                                placeholder="Mobile"
                                                className={`py-3 lghtbluebg blcktxtclr brdrds8 form-control px-4 font14 numberbox nobrder ${touched.mobile && errors.mobile && "span-alert"}`}
                                                // value={values}
                                                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                                autocomplete="off"
                                                name="mobile"
                                            />
                                        </div>
                                        <div className='d-flex justify-content-end'>
                                            <span className='span-alert'>{touched.mobile && errors.mobile}</span>
                                        </div>
                                    </div>



                                    <div className="col-12 pt-3">
                                        <button
                                            type="submit"
                                            className="btn btn-primary darkbluebg py-3 brdrds8 font14 mb-3 width_full "
                                        >
                                            OTP Verify
                                        </button>

                                        <a
                                            ref={buttonRef}
                                            data-bs-toggle={"modal"}
                                            data-bs-target={"#SignUpVerificationModal"}
                                            data-bs-dismiss={"modal"}
                                        />

                                        {/* <button
                                    ref={inputRef}
                                    type="button"
                                    className="btn btn-primary darkbluebg py-3 brdrds8 font14 mb-3 width_full openModalBtn"
                                    data-bs-toggle="modal"
                                    data-bs-target="#Verifi_Regi_Modal"
                                    data-bs-dismiss="modal"
                                >
                                    Open OTP MODAL
                                </button> */}


                                    </div>
                                </Form>

                            }
                        </Formik>

                    </div>
                </div>

                <Loader isLoading={isLoading} />

            </div>
        </div>


    )
}

export default CaptureMobile;