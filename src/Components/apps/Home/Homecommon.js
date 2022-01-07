import "./Homecommon.scss";
import SchoolLogo from "../../../Screens/Header/SchoolLogo";
import LadyBg from "../../../images/ladybg.png";
import Reviewer from "../../../images/reviewer.png";
import Steps from "../../../images/step_bg.svg";
import Reviewer_bg from "../../../images/review_bg.svg";
require("dotenv").config();
const BASE_URL = process.env.REACT_APP_BASE_URL;

function Homecommon() {
  return (
    <section className="py-5">
      <div className="container py-5">
        <SchoolLogo />
        <div className="row">
          <div className="col-lg-5">
            <div className="row stepsdiv_cont pb-3">
              <div className="col-12">
                <span className="greytxtclr font16 block py-2">
                  How it works
                </span>
                <h4 className="blcktxtclr font48 bold">
                  Follow our Steps, We Will Help You
                </h4>
              </div>
              <div className="col-12 pt-2">
                <span className="greytxtclr font16 descp">
                  Follow the steps below so that you can understand how to find
                  a job and be selected by the company you are applying for and
                  are trusted to work
                </span>
              </div>
            </div>
            <div className="row pb-3">
              <div className="col-6 col-sm-6 col-md-6 col-lg-6 stepicon_div mb-4">
                <div className="darkbluebg py-3 px-3 mb-4">
                  <svg
                    className="reg_icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="25.384"
                    height="24.281"
                    viewBox="0 0 25.384 24.281"
                  >
                    <defs></defs>
                    <g transform="translate(0 -0.333)">
                      <path
                        class="a"
                        d="M16.831,220.655h-16a.828.828,0,0,1,0-1.655h16a.828.828,0,1,1,0,1.655Zm0,0"
                        transform="translate(0 -207.355)"
                      />
                      <path
                        class="a"
                        d="M224.831,144.116a.828.828,0,0,1-.585-1.414l3.83-3.83-3.83-3.83a.828.828,0,0,1,1.171-1.171l4.415,4.415a.828.828,0,0,1,0,1.171l-4.415,4.415A.821.821,0,0,1,224.831,144.116Zm0,0"
                        transform="translate(-212.415 -126.4)"
                      />
                      <path
                        class="a"
                        d="M47.829,24.613a12.077,12.077,0,0,1-11.3-7.7.828.828,0,1,1,1.541-.6,10.485,10.485,0,1,0,0-7.673.828.828,0,1,1-1.541-.6,12.14,12.14,0,1,1,11.3,16.581Zm0,0"
                        transform="translate(-34.585 0)"
                      />
                    </g>
                  </svg>
                </div>
                <h4 className="mb-2">Register</h4>
                <span className="greytxtclr">
                  If you do not have your account, please register first so you
                  can enter and look for work
                </span>
              </div>
              <div className="col-6 col-sm-6 col-md-6 col-lg-6 stepicon_div mb-4">
                <div className="darkbluebg py-3 px-3 mb-4">
                  <svg
                    className="pro_icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="21.472"
                    height="28.183"
                    viewBox="0 0 21.472 28.183"
                  >
                    <defs></defs>
                    <path
                      class="a"
                      d="M77.832,0H61.815a2.729,2.729,0,0,0-2.726,2.726c0,20.273-.022,19.049.047,19.257a.914.914,0,0,0,.218.354c.057.057,5.576,5.583,5.657,5.645.359.277-.193.189,12.821.189a2.729,2.729,0,0,0,2.726-2.726V2.726A2.729,2.729,0,0,0,77.832,0ZM64.655,25.068,62.192,22.6h2.463Zm14.085.376a.91.91,0,0,1-.909.909H66.473V21.7a.909.909,0,0,0-.909-.909H60.907V2.726a.91.91,0,0,1,.909-.909H77.832a.91.91,0,0,1,.909.909Zm-2.9-7.1a.909.909,0,0,1-.909.909H64.655a.909.909,0,1,1,0-1.817h10.28A.909.909,0,0,1,75.844,18.345Zm0,4.657a.909.909,0,0,1-.909.909h-5.85a.909.909,0,1,1,0-1.817h5.85A.909.909,0,0,1,75.844,23ZM69.786,9.546a3.059,3.059,0,1,0-3.059-3.059A3.062,3.062,0,0,0,69.786,9.546Zm0-4.3a1.241,1.241,0,1,1-1.241,1.241,1.243,1.243,0,0,1,1.241-1.241ZM65.185,14V12.751a2,2,0,0,1,1.181-1.821l1.441-.644c.242-.108.072-.079,3.567-.079.255,0,.247.024,1.812.722a2,2,0,0,1,1.181,1.821V14a.909.909,0,1,1-1.817,0V12.751a.177.177,0,0,0-.1-.161l-1.264-.565H68.371l-1.264.565a.177.177,0,0,0-.1.161V14a.909.909,0,1,1-1.817,0Z"
                      transform="translate(-59.086)"
                    />
                  </svg>
                </div>
                <h4 className="mb-2">Create a Profile</h4>
                <span className="greytxtclr">
                  You need to build a profile so that clients who see your
                  resume believe in your abilities
                </span>
              </div>
              <div className="col-6 col-sm-6 col-md-6 col-lg-6 stepicon_div mb-4">
                <div className="darkbluebg py-3 px-3 mb-4">
                  <svg
                    className="srchicon_white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="23.442"
                    height="24.281"
                    viewBox="0 0 23.442 24.281"
                  >
                    <defs></defs>
                    <path
                      class="a"
                      d="M24.069,22.116l-5.779-6.01a9.8,9.8,0,1,0-7.5,3.5A9.7,9.7,0,0,0,16.4,17.833l5.823,6.056a1.279,1.279,0,1,0,1.843-1.773ZM10.787,2.557A7.246,7.246,0,1,1,3.541,9.8,7.254,7.254,0,0,1,10.787,2.557Z"
                      transform="translate(-0.984)"
                    />
                  </svg>
                </div>
                <h4 className="mb-2">Find Job</h4>
                <span className="greytxtclr">
                  You can find your dream job according to your abilities and
                  passion
                </span>
              </div>
              <div className="col-6 col-sm-6 col-md-6 col-lg-6 stepicon_div">
                <div className="darkbluebg py-3 px-3 mb-4">
                  <svg
                    className="apply_icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="25.384"
                    height="27.337"
                    viewBox="0 0 25.384 27.337"
                  >
                    <defs></defs>
                    <g transform="translate(-17.065 0)">
                      <g transform="translate(17.065 8.786)">
                        <g transform="translate(0)">
                          <path
                            class="a"
                            d="M39.52,153.6H34.639a.976.976,0,1,0,0,1.953H39.52a.976.976,0,0,1,.976.976v12.692a.976.976,0,0,1-.976.976H19.994a.976.976,0,0,1-.976-.976V156.524a.976.976,0,0,1,.976-.976h4.882a.976.976,0,1,0,0-1.953H19.994a2.929,2.929,0,0,0-2.929,2.929v12.692a2.929,2.929,0,0,0,2.929,2.929H39.52a2.929,2.929,0,0,0,2.929-2.929V156.524A2.929,2.929,0,0,0,39.52,153.6Z"
                            transform="translate(-17.065 -153.595)"
                          />
                        </g>
                      </g>
                      <g transform="translate(23.911 0)">
                        <path
                          class="a"
                          d="M148.159,5.167,143.278.286a.976.976,0,0,0-1.38,0l-4.882,4.882a.976.976,0,0,0,1.381,1.38l3.215-3.215V19.526a.976.976,0,0,0,1.953,0V3.333l3.215,3.215a.976.976,0,0,0,1.38-1.381Z"
                          transform="translate(-136.741 0)"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <h4 className="mb-2">Apply Job</h4>
                <span className="greytxtclr">
                  When you have chosen your suitable job and have read the job
                  desk, you can apply the job.
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <img
              src={BASE_URL + Steps}
              alt="Steps Background"
              className="img-fluid py-5"
            />
          </div>
        </div>
        <div className="row py-5 mt-5 px-5 getstarted_div">
          <div className="col-12 col-lg-6">
            <img
              src={BASE_URL + LadyBg}
              alt="Lady Background"
              className="mb-3"
            />
          </div>
          <div className="col-12 col-lg-6">
            <span className="greytxtclr font16 block pb-4">
              Let's get started!
            </span>
            <h4 className="blcktxtclr font48">
              Why <span>JOBS IN EDUCATION</span> is right for you
            </h4>
            <div className="countdiv pt-5">
              <div className="row">
                <div className="col-6 col-sm-6 col-md-6 col-lg-4 pb-5">
                  <span className="number font48 bold">21</span>
                  <span className="text greytxtclr">Job Posted</span>
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-4 pb-5">
                  <span className="number font48 bold">1000</span>
                  <span className="text">Job Filled</span>
                </div>
              </div>
              <div className="row">
                <div className="col-6 col-sm-6 col-md-6 col-lg-4 pb-5">
                  <span className="number font48 bold">150+</span>
                  <span className="text">Companies</span>
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-4 pb-5">
                  <span className="number font48 bold">2000</span>
                  <span className="text">Members</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row py-5 reviewdiv">
          <div className="col-12 col-lg-5 reviewpart">
            <h4 className="text-left mb-5 font48 blcktxtclr">
              <span>Reviews</span> of People who have Found Job In Education
              Useful
            </h4>
            <div className="owl-carousel">
              <div className="items darkbluebg pt-4 pb-2">
                <div className="quote">
                  <svg
                    className="quote"
                    xmlns="http://www.w3.org/2000/svg"
                    width="63.59"
                    height="56.13"
                    viewBox="0 0 125.603 110.867"
                  >
                    <defs></defs>
                    <g class="a" transform="translate(0.001 -57.197)">
                      <path
                        class="b"
                        d="M603.713,57.2H564.552a6.443,6.443,0,0,0-6.441,6.441V102.8a6.443,6.443,0,0,0,6.441,6.441H583.3q-.367,15.381-7.137,24.63-5.333,7.3-16.141,12.083a6.432,6.432,0,0,0-3.195,8.644l4.637,9.79a6.44,6.44,0,0,0,8.386,3.143,71.611,71.611,0,0,0,21.6-14.015,54.38,54.38,0,0,0,14.724-23.432q3.981-13.062,3.981-35.657V63.638A6.443,6.443,0,0,0,603.713,57.2Z"
                        transform="translate(-484.552)"
                      />
                      <path
                        class="b"
                        d="M13.658,167.5a72.818,72.818,0,0,0,21.5-13.99,54.091,54.091,0,0,0,14.814-23.342q3.98-12.966,3.98-35.747V63.638A6.443,6.443,0,0,0,47.512,57.2H8.351A6.443,6.443,0,0,0,1.91,63.638V102.8a6.443,6.443,0,0,0,6.441,6.441H27.094q-.367,15.381-7.137,24.63-5.333,7.3-16.141,12.083A6.432,6.432,0,0,0,.622,154.6l4.625,9.764A6.459,6.459,0,0,0,13.658,167.5Z"
                        transform="translate(0 0)"
                      />
                    </g>
                  </svg>
                </div>
                <img src={BASE_URL + Reviewer} alt="person image" />
                <span className="review py-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </span>
                <span className="reviewname pt-3 pb-2 bold">Mr. Smith</span>
                <span className="position pb-4 font18 text-center">
                  CEO, The Newton School
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-7 text-right pt-5">
            <img
              src={BASE_URL + Reviewer_bg}
              alt=""
              className="img-fluid review_bg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Homecommon;
