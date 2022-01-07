import "./Faq.scss";
import faqBg from "../../images/faq_bg.svg";
import { useEffect, useState } from "react";
import Loader from '../../Components/Loader';
import axios from "./../../config/axios";

require("dotenv").config();
const BASE_URL = process.env.REACT_APP_BASE_URL;

function Faq() {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetchAboutUs()
  }, [])


  const fetchAboutUs = async () => {
    const url = "/faqs"
    try {
      let { data } = await axios.get(url)
      if (data.success) {
        console.log("data----->", data.data);
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
        <div className="faqpagediv">
          <div className="row">
            <div className="col-lg-8">
              <span className="title">FAQ's</span>
              <div className="dis_flex_no_space srchdiv">
                <div className="dis_flex srcharea">
                  <span className="srch">
                    <svg
                      className="search_svg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <defs></defs>
                      <g transform="translate(-3 -3)">
                        <g transform="translate(3 3)">
                          <path
                            class="a"
                            d="M9.665,0a9.666,9.666,0,0,1,7.507,15.758L23.7,22.291A1,1,0,0,1,22.4,23.8l-.112-.1-6.535-6.533A9.666,9.666,0,1,1,9.665,0Zm0,2a7.666,7.666,0,1,0,5.421,2.245A7.667,7.667,0,0,0,9.665,2Z"
                            transform="translate(0)"
                          />
                        </g>
                      </g>
                    </svg>
                  </span>
                  <input
                    type="text"
                    className="width_full"
                    placeholder="Search"
                  />
                </div>
                <button className="px-5 brdrds8 nobrder py-3 darkbluebg_whttxt">
                  Search
                </button>
              </div>
            </div>
            <div className="col-lg-4">
              <img src={BASE_URL + faqBg} alt="" />
            </div>
          </div>
          <div className="row my-3">
            <div className="col-12">
              <div class="accordion my-4" id="accordionExample">

                {data.length != 0 && data.map((item, index) => {
                  return (
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingTwo">
                        <button
                          class="accordion-button collapsed bold font18"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapseTwo${index}`}
                          aria-expanded="false"
                          aria-controls={`collapseTwo${index}`}
                        >
                          {item.question}
                        </button>
                      </h2>
                      <div
                        id={`collapseTwo${index}`}
                        class="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <span className="greytxtclr font16 normal">
                            {item.answer}
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader isLoading={isLoading} />
    </div>
  );
}

export default Faq;
