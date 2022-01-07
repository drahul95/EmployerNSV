import "./TermsConditions.scss";
import { useEffect, useState } from "react";
import Loader from '../../Components/Loader';
import axios from "./../../config/axios";


function TermsConditions() {
  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetchAboutUs()
  }, [])


  const fetchAboutUs = async () => {
    const url = "/employer/getpages/2"

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
        <div className="termspagediv">
          <div className="row mb-5">
            <div className="col-12">
              {/* <span className="font26 blcktxtclr block bold my-4">
                Terms &amp; Conditions
              </span>
              <span className="font20 blcktxtclr block mb-3 bold">Purpose</span> */}
              <span className="font16 greytxtclr normal"
                dangerouslySetInnerHTML={{
                  __html: data.content
                }}>

              </span>
            </div>
          </div>
          {/* <div className="row mb-3">
            <div className="col-12">
              <span className="font20 blcktxtclr block mb-3 bold">Purpose</span>
              <span className="font16 greytxtclr normal">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo.
              </span>
            </div>
          </div> */}
          {/* <div className="row pt-3">
            <div className="col-12">
              <div className="center_div d-flex">
                <button className="darkbluebg_whttxt font18 py-3 brdrds8 me-3 width50 nobrder">
                  Accept
                </button>
                <button className="whitebtn font18 py-3 brdrds8 width50">
                  Decline
                </button>
              </div>
            </div>
          </div> */}
        </div>
        <Loader isLoading={isLoading} />
      </div>
    </div>
  );
}
export default TermsConditions;
