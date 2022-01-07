import "./About.scss";
import AboutBg from "../../images/about_bg.svg";
import { useEffect, useState } from "react";
import Loader from '../../Components/Loader';
import axios from "./../../config/axios";
import CustomizedSnackbars from "./../../Components/snackbars";


require("dotenv").config();
const BASE_URL = process.env.REACT_APP_BASE_URL;


function About() {
  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [toastify, setToastify] = useState({
    message: "",
    variant: "success",
    open: false
  })


  useEffect(() => {
    fetchAboutUs()
  }, [])


  const fetchAboutUs = async () => {
    const url = "/employer/getpages/1"
    try {
      let { data } = await axios.get(url)
      if (data.success) {

        setData(data.data)
        setLoading(false)
      } else {
        setLoading(false)
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
    <div className="container">
      <CustomizedSnackbars
        message={toastify.message}
        variant={toastify.variant}
        open={toastify.open}
        handleClose={handleClose}
      />
      <div className="widthwrapper">
        <div className="aboutpagediv">
          <div className="row py-5">
            <div className="col-lg-6">
              <span className="title">About Us</span>
            </div>
            <div className="col-lg-6">
              <img className="align-right" src={BASE_URL + AboutBg} alt="" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              <span className="font20 blcktxtclr block mb-3 bold">Purpose</span>
              {data ? <span className="font16 greytxtclr normal"
                dangerouslySetInnerHTML={{
                  __html: data.content
                }}
              >
              </span> : <span className="font16 greytxtclr normal">No Records Found!</span>}
            </div>
          </div>
        </div>
        <Loader isLoading={isLoading} />
      </div>
    </div>
  );
}
export default About;
