import { useEffect, useState } from "react";
import Loader from '../../Components/Loader';
import axios from "./../../config/axios";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import CustomizedSnackbars from "./../../Components/snackbars";

function KeepInTouch() {
    const [isLoading, setLoading] = useState(false)
    const [toastify, setToastify] = useState({
        message: "",
        variant: "success",
        open: false
    })


    const handleSubmit = async (values, { resetForm }) => {
        const url = "/employer/subscribe"
        setLoading(true)
        console.log('values------>', values);
        try {
            let { data } = await axios.post(url, Object.assign({}, values))
            if (data.success) {
                resetForm()
                setToastify({
                    ...toastify,
                    message: data.message,
                    variant: "success",
                    open: true
                })
                setLoading(false)
            } else {
                setLoading(false)
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
            setLoading(false)
        }
    }

    const ValidSchema = Yup.object().shape({
        email: Yup.string()
            .email("Email address is not vaild.")
            .required("Email address is required")
    });


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
        <li>
            <CustomizedSnackbars
                message={toastify.message}
                variant={toastify.variant}
                open={toastify.open}
                handleClose={handleClose}
            />
            <ul>
                <li className="footerhead">Keep in Touch</li>
                <li>Question or Feedback we love to here from you</li>
                <li>
                    <Formik
                        initialValues={{ email: '' }}
                        validationSchema={ValidSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ touched, errors, isSubmitting, values }) =>

                            <Form>
                                <Field
                                    type="text"
                                    placeholder="Your Email Id"
                                    name="email"
                                    autocomplete="off"
                                />

                                <div className="submit">
                                    <button type="submit">
                                        <svg
                                            className="sendplane"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                        >
                                            <defs></defs>
                                            <path
                                                class="a"
                                                d="M23.457,11.107,1.483.106A1,1,0,0,0,.4.226a1,1,0,0,0-.33,1L2.721,11h11.3v2H2.721L.035,22.739a1,1,0,0,0,1,1.26,1,1,0,0,0,.449-.11l21.974-11a1,1,0,0,0,0-1.78Z"
                                                transform="translate(0 0)"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                {touched.email && (
                                    <span className="font12" style={{ color: 'red' }}>{errors.email}</span>
                                )}
                            </Form>
                        }
                    </Formik>
                </li>
            </ul>
            <Loader isLoading={isLoading} />
        </li>


        // {/* <Loader isLoading={isLoading} /> */ }

    )
}
export default KeepInTouch;