import "./Privacy.scss";
import { useEffect, useState } from "react";
import Loader from '../../Components/Loader';
import axios from "./../../config/axios";


function Privacy() {
  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetchAboutUs()
  }, [])


  const fetchAboutUs = async () => {
    const url = "/employer/getpages/7"
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
    }
  }


  return (
    <div className="container">
      <div className="widthwrapper">
        <div className="privacypagediv">
          <div className="row mb-5">
            <div className="col-12">
              {/* <span className="font26 blcktxtclr block bold my-4">
                Privacy Policy
              </span>
              <span className="font20 blcktxtclr block mb-3 bold">
                1. Introduction
              </span> */}
              <span className="font16 greytxtclr normal"
                dangerouslySetInnerHTML={{
                  __html: data.content
                }}>

              </span>
            </div>
          </div>
        </div>
        <Loader isLoading={isLoading} />
      </div>
    </div>
  );
}
export default Privacy;
