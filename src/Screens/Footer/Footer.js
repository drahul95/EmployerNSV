import GpImg from "../../images/gp.png";
import ApImg from "../../images/appstore.png";
import { Link } from "react-router-dom";
import "./Footer.scss";
import Logo from "../Header/Logo.js";
import { SelectField } from "../../Components/atoms";
import { COUNTRIES } from "../../data/country";
import KeepInTouch from "./../Footer/KeepInTouch";
require("dotenv").config();
const BASE_URL = process.env.REACT_APP_BASE_URL;


function Footer(props) {
  return (
    <footer>
      <div className="container">
        <div className="footerdiv pt-5">
          <ul className="main">
            <li>
              <ul>
                <li>
                  <Logo customclass="footerbrandlogo" width="206" />
                </li>
                <li>
                  <span className="descp py-3 pe-2">
                    Tell us what kind of a job you are looking out for and stay
                    updated with latest opportunities.
                  </span>
                </li>
                <li>
                  <ul className="social_link">
                    <li>
                      <Link to="#">
                        <svg
                          className="linkedin"
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                        >
                          <defs></defs>
                          <path
                            className="a"
                            d="M32,16A16,16,0,1,1,16,0,16,16,0,0,1,32,16Z"
                          />
                          <g transform="translate(8.8 8.861)">
                            <path
                              className="b"
                              d="M3.172,1.587A1.586,1.586,0,1,1,2.708.465a1.586,1.586,0,0,1,.464,1.122Zm.048,2.76H.048v9.929H3.22Zm5.012,0H5.076v9.929H8.2V9.066c0-2.9,3.783-3.172,3.783,0v5.211h3.133V7.987c0-4.893-5.6-4.711-6.916-2.308l.032-1.332Z"
                              transform="translate(0 0)"
                            />
                          </g>
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <svg
                          className="facebook"
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                        >
                          <defs></defs>
                          <path
                            class="a"
                            d="M32,16A16,16,0,1,1,16,0,16,16,0,0,1,32,16Z"
                          />
                          <g transform="translate(12.396 9.102)">
                            <g transform="translate(0)">
                              <path
                                class="b"
                                d="M6.41,7.23H4.429v7.258h-3V7.23H0V4.679H1.428V3.029A2.815,2.815,0,0,1,4.456,0L6.679.009V2.485H5.066a.611.611,0,0,0-.637.7v1.5H6.672Z"
                              />
                            </g>
                          </g>
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <svg
                          className="instagram"
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                        >
                          <defs></defs>
                          <path
                            class="a"
                            d="M32,16A16,16,0,1,1,16,0,16,16,0,0,1,32,16Z"
                          />
                          <g transform="translate(8.906 8.893)">
                            <path
                              class="b"
                              d="M14.146,4.2a5.146,5.146,0,0,0-.33-1.746A3.633,3.633,0,0,0,11.741.374,5.206,5.206,0,0,0,10.018.043C9.26.009,9.019,0,7.095,0S4.924,0,4.171.043A5.206,5.206,0,0,0,2.449.374,3.631,3.631,0,0,0,.374,2.449a5.165,5.165,0,0,0-.33,1.722C.01,4.93,0,5.17,0,7.095s0,2.17.044,2.924a5.2,5.2,0,0,0,.33,1.723A3.633,3.633,0,0,0,2.45,13.816a5.189,5.189,0,0,0,1.722.355c.759.034,1,.044,2.924.044s2.171,0,2.924-.044a5.193,5.193,0,0,0,1.723-.33,3.637,3.637,0,0,0,2.075-2.075,5.19,5.19,0,0,0,.33-1.723c.034-.758.044-1,.044-2.924s0-2.169-.046-2.923ZM7.09,10.734A3.643,3.643,0,1,1,9.666,9.667,3.642,3.642,0,0,1,7.09,10.734Zm3.788-6.572a.849.849,0,1,1,.849-.85A.848.848,0,0,1,10.878,4.163Z"
                              transform="translate(0)"
                            />
                            <path
                              class="b"
                              d="M4.733,2.367A2.367,2.367,0,1,1,2.367,0,2.367,2.367,0,0,1,4.733,2.367Z"
                              transform="translate(4.722 4.724)"
                            />
                          </g>
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <svg
                          className="twitter"
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                        >
                          <defs></defs>
                          <path
                            class="a"
                            d="M32,16A16,16,0,1,1,16,0,16,16,0,0,1,32,16Z"
                          />
                          <g transform="translate(8.565 9.391)">
                            <path
                              class="b"
                              d="M4.2,13.22a9.148,9.148,0,0,0,9.454-9.09,6.686,6.686,0,0,0,1.223-2.347.364.364,0,0,0-.512-.421,1.554,1.554,0,0,1-.943.13,1.554,1.554,0,0,1-.842-.444A3.215,3.215,0,0,0,7.963.906a3.413,3.413,0,0,0-.95,3.223,7.205,7.205,0,0,1-6.19-2.95.355.355,0,0,0-.62.2A8,8,0,0,0,4,9.683,5.562,5.562,0,0,1,.311,11.567a.372.372,0,0,0-.116.694A9.09,9.09,0,0,0,4.2,13.22Z"
                              transform="translate(0 0)"
                            />
                          </g>
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <ul className="pagelinks ps-5">
                <li className="footerhead">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ's</Link>
                </li>
              </ul>
            </li>
            <li>
              <ul className="company">
                <li className="footerhead">
                  <Link to="#">Company</Link>
                </li>
                <li>
                  <Link to="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/termsconditions">Terms &#38; Conditions</Link>
                </li>
                <li>
                  <Link to="https://blog.jobsineducation.net">Blogs</Link>
                </li>
                {/* <li>
                  <Link to="#">Feedbacks</Link>
                </li> */}
              </ul>
            </li>
            <li>
              <ul>
                <li className="footerhead">Download Our App</li>
                <li>
                  <Link to="">
                    <img
                      src={BASE_URL + GpImg}
                      alt="Google Play"
                      className="dwnld_app"
                    />
                  </Link>
                </li>
                <li>
                  <img
                    className="dwnld_app"
                    src={BASE_URL + ApImg}
                    alt="App Store"
                  />
                </li>
              </ul>
            </li>
            
                  <KeepInTouch/>
                  {/* <form action="">
                    <input type="text" placeholder="Your Email Id" />
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
                  </form> */}
               
          </ul>
        
        </div>
        <div className="copyright">
          <span className="py-3">
            Copyright &copy; 2019 | jobsineducation.net
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
