import { LoginStep1 } from "../Auth/Employers/login/steps/step1";
import { ForgetPasswordMultistepForm } from "../Auth/Employers/forgetPassword/ForgetPasswordMultistep";
import SeekerLogin from "./../SeekerLogin";
import LoginVerification from "./../Auth/Employee/LoginVerification";
import CaptureMobile from "./../CaptureMobile";
import SignUpVerification from "./../Auth/Employee/SignUpVerification";
import Verification from "./../Auth/Employee/Verification";
import MobileVerification from "./../Auth/Employee/VerificationMobile";


const LoginModal = () => {
  return (
    <div>
      <div
        class="modal fade invitejobmodal"
        id="SignModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        data-bs-backdrop="static" data-bs-keyboard="false"
      >
        <div class="modal-dialog modal-dialog-centered">
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
            <div class="modal-body">
              <div className="pb-3 mx-3">
                <h4 className="bold blcktxtclr pt-3 font18 text-center">
                  Login to your account
                </h4>
                <span className="greytxtclr block font14 text-center">
                  Choose from thousands of jobs from one platform
                </span>
                <ul class="nav nav-tabs" id="LoginTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="seeker2-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#seeker2"
                      type="button"
                      role="tab"
                      aria-controls="seeker2"
                      aria-selected="true"
                    >
                      I am a Job Seeker
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="employer2-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#employer2"
                      type="button"
                      role="tab"
                      aria-controls="#Groups_Tab_modal"
                      aria-selected="false"
                    >
                      I am an Employer
                    </button>
                  </li>
                </ul>
                {/*TODO:// Remove this later*/}
                {/* <a
                  href=""
                  className="drkbluecolor bold ms-2"
                  data-bs-toggle="modal"
                  data-bs-target="#Groups_Tab_modal"
                  data-bs-dismiss="modal"
                >
                  Institure modal
                </a> */}
                <div class="tab-content" id="LoginTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="seeker2"
                    role="tabpanel"
                    aria-labelledby="seeker2-tab"
                  >
                    <SeekerLogin/>

                  </div>

                  <div
                    class="tab-pane fade"
                    id="employer2"
                    role="tabpanel"
                    aria-labelledby="employer2-tab"
                  >
                    <LoginStep1 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade invitejobmodal"
        id="loginVerificationModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        data-bs-backdrop="static" data-bs-keyboard="false"
      >
        <LoginVerification />
      </div>
      <div
        class="modal fade invitejobmodal"
        id="SignUpVerificationModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        data-bs-backdrop="static" data-bs-keyboard="false"
      >
        <SignUpVerification />
      </div>
      <div
        class="modal fade invitejobmodal"
        id="verification"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        data-bs-backdrop="static" data-bs-keyboard="false"
      >
        <Verification />
      </div>

      <div
        class="modal fade invitejobmodal"
        id="mobileVerification"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        data-bs-backdrop="static" data-bs-keyboard="false"
      >
        <MobileVerification />
      </div>

      
      
      <div
        class="modal fade invitejobmodal"
        id="CaptureMobile"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        data-bs-backdrop="static" data-bs-keyboard="false"
      >
        <CaptureMobile />
      </div>
      <div
        className="modal fade invitejobmodal"
        id="forgotmodal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <ForgetPasswordMultistepForm />
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="passwordsuccessmodal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog">
          <div class="modal-content">
            <div class="modal-header"></div>
            <div class="modal-body px-5">
              <div className="text-center">
                <SuccessIcon />
                <span className="heading">Password Changed</span>
                <span className="subhead">
                  Your password has been changed successfully
                </span>
                <button
                  type="button"
                  className="btn whitecolor darkbluebg py-3 brdrds8 font12 mb-3 width_full"
                  data-bs-toggle="modal"
                  data-bs-target="#SignModal"
                  data-bs-dismiss="modal"
                >
                  Log In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
const SuccessIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="83"
      height="83"
      viewBox="0 0 83 83"
      className="my-4"
    >
      <g
        id="_1930264_check_complete_done_green_success_icon"
        data-name="1930264_check_complete_done_green_success_icon"
        transform="translate(-23.416 -23.017)"
      >
        <path
          id="XMLID_3_"
          d="M106,64.382v-.125c0-.285,0-.57-.018-.837,0-.16-.018-.32-.018-.5,0-.16-.018-.32-.018-.481-.018-.2-.018-.392-.036-.588,0-.125-.018-.249-.018-.374l-.053-.641c0-.089-.018-.2-.018-.285-.018-.231-.053-.463-.071-.712,0-.053-.018-.125-.018-.178a41.5,41.5,0,0,0-82.466.018c0,.053-.018.125-.018.178-.018.231-.053.463-.071.712a1.531,1.531,0,0,0-.018.285l-.053.641c0,.125-.018.249-.018.374-.018.2-.018.392-.036.588,0,.16-.018.32-.018.481s-.018.32-.018.5c0,.285-.018.57-.018.837v.285c0,.285,0,.57.018.837,0,.16.018.32.018.5,0,.16.018.32.018.481.018.2.018.392.036.588,0,.125.018.249.018.374l.053.641c0,.089.018.2.018.285.018.231.053.463.071.712,0,.053.018.125.018.178a41.506,41.506,0,0,0,82.466-.018c0-.053.018-.125.018-.178.018-.231.053-.463.071-.712a1.529,1.529,0,0,0,.018-.285l.053-.641c0-.125.018-.249.018-.374.018-.2.018-.392.036-.588,0-.16.018-.32.018-.481s.018-.32.018-.5c0-.285.018-.57.018-.837v-.16Z"
          transform="translate(0.416 0.117)"
          fill="#2bb673"
        />
        <g id="XMLID_1_" transform="translate(47.001 50.576)">
          <g id="Group_6283" data-name="Group 6283">
            <line
              id="XMLID_2_"
              y1="28.067"
              x2="28.085"
              transform="translate(7.116)"
              fill="none"
              stroke="#fff"
              stroke-miterlimit="10"
              stroke-width="10"
            />
            <line
              id="XMLID_4_"
              x1="14.231"
              y1="14.231"
              transform="translate(0 14.033)"
              fill="none"
              stroke="#fff"
              stroke-miterlimit="10"
              stroke-width="10"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
