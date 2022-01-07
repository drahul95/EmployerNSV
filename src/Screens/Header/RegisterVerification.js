import React from "react";
import { InstitutionModal } from "../Auth/Employers/institution";

function RegisterVerification() {
  return (
    <>
      <div
        class="modal fade invitejobmodal"
        id="Verifi_Regi_Modal1"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div class="modal-body">
              <div className="pb-3 mx-3">
                <h4 className="bold blcktxtclr pt-3 font18 text-center">
                  Register a Free Account
                </h4>
                <span className="greytxtclr block font14 text-center">
                  Choose from thousands of jobs from one platform
                </span>
                <form action="" className="row">
                  <div className="col-12">
                    <label className="py-3 blcktxtclr bold_500 font14">
                      Enter the OTP sent to your Email/Phone Number
                    </label>
                  </div>
                  <div className="col-12 otp_div">
                    <input
                      type="Number"
                      maxLength="1"
                      className="py-3 lghtbluebg blcktxtclr brdrds8 form-control px-4 font14"
                    />
                    <input
                      type="Number"
                      maxLength="1"
                      className="py-3 lghtbluebg blcktxtclr brdrds8 form-control px-4 font14"
                    />
                    <input
                      type="Number"
                      maxLength="1"
                      className="py-3 lghtbluebg blcktxtclr brdrds8 form-control px-4 font14"
                    />
                    <input
                      type="Number"
                      maxLength="1"
                      className="py-3 lghtbluebg blcktxtclr brdrds8 form-control px-4 font14"
                    />
                    <input
                      type="Number"
                      maxLength="1"
                      className="py-3 lghtbluebg blcktxtclr brdrds8 form-control px-4 font14"
                    />
                  </div>
                  <div className="col-12 pt-3">
                    <button
                      type="button"
                      className="btn whitecolor darkbluebg py-3 brdrds8 font12 mb-3 width_full"
                      data-bs-dismiss="modal"
                    >
                      Verify
                    </button>
                  </div>
                </form>
                <div className="row mt-2">
                  <span className="greytxtclr font12 block text-center">
                    <a href="" className="drkbluecolor bold_500 ms-2">
                      Resend OTP
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade invitejobmodal"
        id="Verifi_Regi_Modal_Employer"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div class="modal-body">
              <div className="pb-3 mx-3">
                <h4 className="bold blcktxtclr pt-3 font18 text-center">
                  Verify Your Email Id
                </h4>
                <form action="" className="row">
                  <div className="col-12">
                    <label className="py-3 blcktxtclr bold_500 font12 text-center block">
                      Please type the verification code sent to number raj
                      ****@gmail.com
                    </label>
                  </div>
                  <div className="col-12 otp_div">
                    <input
                      type="Number"
                      maxLength="1"
                      className="py-3 lghtbluebg blcktxtclr brdrds8 form-control px-4 font14"
                    />
                    <input
                      type="Number"
                      maxLength="1"
                      className="py-3 lghtbluebg blcktxtclr brdrds8 form-control px-4 font14"
                    />
                    <input
                      type="Number"
                      maxLength="1"
                      className="py-3 lghtbluebg blcktxtclr brdrds8 form-control px-4 font14"
                    />
                    <input
                      type="Number"
                      maxLength="1"
                      className="py-3 lghtbluebg blcktxtclr brdrds8 form-control px-4 font14"
                    />
                    <input
                      type="Number"
                      maxLength="1"
                      className="py-3 lghtbluebg blcktxtclr brdrds8 form-control px-4 font14"
                    />
                  </div>
                  <div className="col-12 pt-3">
                    <button
                      type="button"
                      className="btn whitecolor darkbluebg py-3 brdrds8 font12 mb-3 width_full"
                      data-bs-toggle="modal"
                      data-bs-target="#Verifi_Regi_Modal_Employer_phone"
                      data-bs-dismiss="modal"
                    >
                      Verify
                    </button>
                  </div>
                </form>
                <div className="row mt-2">
                  <span className="greytxtclr font12 block text-center">
                    <a href="" className="drkbluecolor bold_500 ms-2">
                      Resend OTP
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade invitejobmodal"
        id="Verifi_Regi_Modal_Employer_phone"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="pb-3 mx-3">
                <h4 className="bold blcktxtclr pt-3 font18 text-center">
                  Verify Your Phone Number
                </h4>
                <form action="" className="row">
                  <div className="col-12">
                    <label className="py-3 blcktxtclr bold_500 font12 text-center block">
                      Please type the verification code sent to number +91
                      ****0101
                    </label>
                  </div>
                  <div className="col-12 otp_div">
                    <input
                      type="Number"
                      maxLength="1"
                      className="py-3 lghtbluebg blcktxtclr brdrds8 form-control px-4 font14"
                    />
                    <input
                      type="Number"
                      maxLength="1"
                      className="py-3 lghtbluebg blcktxtclr brdrds8 form-control px-4 font14"
                    />
                    <input
                      type="Number"
                      maxLength="1"
                      className="py-3 lghtbluebg blcktxtclr brdrds8 form-control px-4 font14"
                    />
                    <input
                      type="Number"
                      maxLength="1"
                      className="py-3 lghtbluebg blcktxtclr brdrds8 form-control px-4 font14"
                    />
                    <input
                      type="Number"
                      maxLength="1"
                      className="py-3 lghtbluebg blcktxtclr brdrds8 form-control px-4 font14"
                    />
                  </div>
                  <div className="col-12 pt-3">
                    <button
                      type="button"
                      className="btn whitecolor darkbluebg py-3 brdrds8 font12 mb-3 width_full"
                      data-bs-toggle="modal"
                      data-bs-target="#passwordmodal"
                      data-bs-dismiss="modal"
                    >
                      Verify
                    </button>
                  </div>
                </form>
                <div className="row mt-2">
                  <span className="greytxtclr font12 block text-center">
                    <a href="" className="drkbluecolor bold_500 ms-2">
                      Resend OTP
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*
      <div
        class="modal fade invitejobmodal"
        id="passwordmodal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="pb-3 mx-3">
                <h4 className="bold blcktxtclr pt-3 font18 text-center">
                  Create New Password
                </h4>
                <span className="greytxtclr block font12 text-center">
                  Please create password for your account
                </span>
                <form action="" className="row">
                  <div className="col-12 mb-3">
                    <label className="blcktxtclr bold_500 font12">
                      New Password
                    </label>
                    <div className="passwordinputarea">
                      <input
                        type="password"
                        placeholder="Enter password"
                        className="py-3 lghtbluebg blcktxtclr brdrds8 form-control px-3 font14 nobrder"
                      />
                      <button className="transaparent_btn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20.828"
                          height="20.828"
                          viewBox="0 0 20.828 20.828"
                        >
                          <g
                            id="_2561429_eye_off_icon"
                            data-name="2561429_eye_off_icon"
                            transform="translate(0.524 0.524)"
                          >
                            <path
                              id="Path_3305"
                              data-name="Path 3305"
                              d="M14.692,15.267a8.139,8.139,0,0,1-4.8,1.665C4.233,16.932,1,10.466,1,10.466a14.912,14.912,0,0,1,4.09-4.8m3.1-1.471A7.371,7.371,0,0,1,9.891,4c5.658,0,8.891,6.466,8.891,6.466a14.953,14.953,0,0,1-1.746,2.578M11.6,12.179A2.425,2.425,0,1,1,8.177,8.752"
                              transform="translate(0 -0.575)"
                              fill="none"
                              stroke="#1c1b1b"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                            />
                            <line
                              id="Line_132"
                              data-name="Line 132"
                              x2="18"
                              y2="18"
                              transform="translate(0.891 0.891)"
                              fill="none"
                              stroke="#1c1b1b"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                            />
                          </g>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="col-12 mb-2">
                    <ul className="listfrpasswrd">
                      <li className="blue">6-13 Characters</li>
                      <li className="blue">At least one special character</li>
                      <li className="red">At least one uppercase</li>
                      <li>At least one lowercase</li>
                      <li>Must not begin with a number</li>
                    </ul>
                  </div>

                  <div className="col-12 mb-3">
                    <label className="blcktxtclr bold_500 font12">
                      Confirm Password
                    </label>
                    <div className="passwordinputarea">
                      <input
                        type="password"
                        placeholder="Enter password"
                        className="py-3 lghtbluebg blcktxtclr brdrds8 form-control px-3 font14 nobrder"
                      />
                      <button className="transaparent_btn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20.828"
                          height="20.828"
                          viewBox="0 0 20.828 20.828"
                        >
                          <g
                            id="_2561429_eye_off_icon"
                            data-name="2561429_eye_off_icon"
                            transform="translate(0.524 0.524)"
                          >
                            <path
                              id="Path_3305"
                              data-name="Path 3305"
                              d="M14.692,15.267a8.139,8.139,0,0,1-4.8,1.665C4.233,16.932,1,10.466,1,10.466a14.912,14.912,0,0,1,4.09-4.8m3.1-1.471A7.371,7.371,0,0,1,9.891,4c5.658,0,8.891,6.466,8.891,6.466a14.953,14.953,0,0,1-1.746,2.578M11.6,12.179A2.425,2.425,0,1,1,8.177,8.752"
                              transform="translate(0 -0.575)"
                              fill="none"
                              stroke="#1c1b1b"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                            />
                            <line
                              id="Line_132"
                              data-name="Line 132"
                              x2="18"
                              y2="18"
                              transform="translate(0.891 0.891)"
                              fill="none"
                              stroke="#1c1b1b"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                            />
                          </g>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="col-12 pt-3">
                    <button
                      type="button"
                      className="btn whitecolor darkbluebg py-3 brdrds8 font12 mb-3 width_full"
                      data-bs-toggle="modal"
                      data-bs-target="#Groups_Tab_modal"
                      data-bs-dismiss="modal"
                    >
                      Next
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div
        class="modal fade congrat_modal"
        id="Congratulations_modal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header"></div>
            <div class="modal-body pt-3">
              <div className="text-center">
                <CongratulationsImg />
                <span className="heading">Congratulations!</span>
                <span className="subhead">
                  Your account has been successfully created
                </span>
                <span className="subsubtext">
                  Let's add your institution details
                </span>
                <button
                  type="button"
                  className="btn whitecolor darkbluebg py-3 brdrds8 font12 mb-3 width_full"
                  data-bs-toggle="modal"
                  data-bs-target="#Groups_Tab_modal"
                  data-bs-dismiss="modal"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade invitejobmodal"
        id="Groups_Tab_modal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <InstitutionModal />
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterVerification;



const CongratulationsImg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="230.73"
      height="171.458"
      viewBox="0 0 230.73 171.458"
    >
      <g id="Key" transform="translate(-0.002 0.001)">
        <path
          id="Floor"
          d="M36.2,275.672c44.309,11.681,116.15,11.681,160.455,0s44.31-30.626,0-42.313-116.145-11.681-160.455,0S-8.1,263.985,36.2,275.672Z"
          transform="translate(-1.988 -112.976)"
          fill="#f5f5f5"
        />
        <path
          id="Shadow"
          d="M354.435,276.788c2.426,1.4,7.2.919,10.658-1.078l19.938-11.577c3.459-2,4.288-4.757,1.857-6.16s-7.209-.923-10.668,1.073L356.3,270.633C352.843,272.63,352.029,275.386,354.435,276.788Z"
          transform="translate(-177.307 -129.288)"
          fill="#ebebeb"
        />
        <path
          id="Shadow-2"
          data-name="Shadow"
          d="M94.058,293.368,73.78,281.661,94.058,269.95Z"
          transform="translate(-36.948 -135.19)"
          fill="#ebebeb"
        />
        <path
          id="Shadow-3"
          data-name="Shadow"
          d="M196.423,293.045l-32.683-18.88,32.688-18.845Z"
          transform="translate(-81.999 -127.863)"
          fill="#ebebeb"
        />
        <g id="Plants" transform="translate(0.002 100.578)">
          <path
            id="Path_3310"
            data-name="Path 3310"
            d="M30.679,232.69c.055-4.742-3.255-14.607-8.1-20.822S10.041,201.05,4.525,202.882c-5.142,1.687-4.668,8.412,1.5,12.939s15.425,10.229,18.066,17.971l5.616,9.485Z"
            transform="translate(-1.002 -202.476)"
            fill="#f4b947"
          />
          <path
            id="Path_3311"
            data-name="Path 3311"
            d="M30.679,232.69c.055-4.742-3.255-14.607-8.1-20.822S10.041,201.05,4.525,202.882c-5.142,1.687-4.668,8.412,1.5,12.939s15.425,10.229,18.066,17.971l5.616,9.485Z"
            transform="translate(-1.002 -202.476)"
            opacity="0.1"
          />
          <path
            id="Path_3312"
            data-name="Path 3312"
            d="M36.694,242.4a.334.334,0,0,1-.31-.28c-3-16.229-15.925-29.548-23.727-32.548a.349.349,0,0,1,.25-.649c7.952,3.06,21.131,16.6,24.157,33.072a.339.339,0,0,1-.275.4A.2.2,0,0,1,36.694,242.4Z"
            transform="translate(-6.743 -205.701)"
            fill="#fff"
          />
          <path
            id="Path_3313"
            data-name="Path 3313"
            d="M31.288,270.057c-.729-2.676-3.934-7.114-9.155-10.813-5.776-4.093-13.134-6.03-14.8-9.18-2-3.779,1.218-7.293,7.194-6.49s16.4,9.14,17.936,21.431Z"
            transform="translate(-3.877 -223)"
            fill="#f4b947"
          />
          <path
            id="Path_3314"
            data-name="Path 3314"
            d="M37.423,270.548a.349.349,0,0,1-.3-.235c-4.8-13.928-15.321-18.925-20.213-19.619a.344.344,0,0,1-.295-.394.339.339,0,0,1,.389-.295c5.411.769,15.88,5.866,20.777,20.083a.349.349,0,0,1-.215.439.3.3,0,0,1-.145.02Z"
            transform="translate(-8.819 -226.277)"
            fill="#fff"
          />
        </g>
        <g
          id="Plants-2"
          data-name="Plants"
          transform="translate(202.855 87.746)"
        >
          <path
            id="Path_3315"
            data-name="Path 3315"
            d="M411.318,206.339s.669-9.984,6.56-17.422,5.531-10.483,1.468-11.981-13.494,7.438-11.4,19.419S411.318,206.339,411.318,206.339Z"
            transform="translate(-407.502 -176.771)"
            fill="#f4b947"
          />
          <path
            id="Path_3316"
            data-name="Path 3316"
            d="M411.318,206.339s.669-9.984,6.56-17.422,5.531-10.483,1.468-11.981-13.494,7.438-11.4,19.419S411.318,206.339,411.318,206.339Z"
            transform="translate(-407.502 -176.771)"
            opacity="0.1"
          />
          <path
            id="Path_3317"
            data-name="Path 3317"
            d="M411.132,202.117a.235.235,0,0,1-.235-.22c-.684-11.012,7.089-20.043,9.984-22.09a.23.23,0,0,1,.319.055.235.235,0,0,1-.055.324c-2.855,2-10.483,10.868-9.8,21.685a.235.235,0,0,1-.215.245Z"
            transform="translate(-409.107 -178.271)"
            fill="#fff"
          />
          <path
            id="Path_3318"
            data-name="Path 3318"
            d="M409.579,230.7a52.605,52.605,0,0,0,8.112,1.957c4.563.719,6.58-1.463,6.58-1.463s-1.8-4.278-4.388-5.491a25.514,25.514,0,0,1,7.917,3.24s2.786.04,3.894-4.208c0,0-1.647-2.561-7.189-3.944a18.247,18.247,0,0,1,8.227.389c.364.145,1.917-5.351,2.386-7.892s-.549-2.5-2.526-3.035-8.531-2-9.769-.914-1.867,4.807-1.867,4.807a8.776,8.776,0,0,1-.185-4.713,7.606,7.606,0,0,0-4.543.1c-2.256.659-2.366,2.2-2.266,3.934a16.909,16.909,0,0,0,1,4.413s-1.762-2.256-1.817-7.154c0,0-4.623,2.3-5.411,6.889C407.287,220.116,406.678,227.4,409.579,230.7Z"
            transform="translate(-407.354 -192.885)"
            fill="#f4b947"
          />
          <path
            id="Path_3319"
            data-name="Path 3319"
            d="M413.295,232.552a.25.25,0,0,0,.23-.15c3.684-7.648,17.377-16.539,22.28-17.472a.255.255,0,0,0,.2-.3.265.265,0,0,0-.3-.2c-4.992.968-18.9,9.984-22.639,17.777a.255.255,0,0,0,.12.339A.23.23,0,0,0,413.295,232.552Z"
            transform="translate(-410.202 -195.627)"
            fill="#fff"
          />
        </g>
        <path
          id="Path_3320"
          data-name="Path 3320"
          d="M55.964,158.77c-.564,0-.9-.469-.9-1.248V73.551L157.9,14.18V97.812a4.458,4.458,0,0,1-2,3.494L56.782,158.515a1.718,1.718,0,0,1-.819.255Z"
          transform="translate(-28.072 -7.601)"
          fill="#fafafa"
        />
        <path
          id="Path_3321"
          data-name="Path 3321"
          d="M157.306,14.173V97.3a4.218,4.218,0,0,1-1.872,3.24L56.342,157.75a1.383,1.383,0,0,1-.674.22c-.554,0-.614-.674-.614-.958V73.2L157.306,14.173m.584-1L54.47,72.87v84.141c0,.973.5,1.543,1.2,1.543a1.957,1.957,0,0,0,.963-.295l99.1-57.214A4.782,4.782,0,0,0,157.89,97.3V13.16Z"
          transform="translate(-27.777 -7.09)"
          fill="#e0e0e0"
        />
        <path
          id="Path_3322"
          data-name="Path 3322"
          d="M53.47,71.87V85.918l103.42-59.7V12.16Z"
          transform="translate(-26.777 -6.09)"
          fill="#2a5798"
        />
        <path
          id="Path_3323"
          data-name="Path 3323"
          d="M70.72,114.724v2c0,.409.295.579.649.374l31.794-18.361V95.24l-31.8,18.351a1.448,1.448,0,0,0-.639,1.133Z"
          transform="translate(-35.915 -48.195)"
          fill="#fafafa"
        />
        <path
          id="Path_3324"
          data-name="Path 3324"
          d="M139.12,91.22c.359-.21.649-.04.649.374v2a1.428,1.428,0,0,1-.649,1.123l-3.41,1.967V93.187Z"
          transform="translate(-68.461 -46.137)"
          fill="#455a64"
        />
        <path
          id="Path_3325"
          data-name="Path 3325"
          d="M54.47,62.252a4.782,4.782,0,0,1,2.162-3.744l99.1-57.214c1.193-.689,2.162-.13,2.162,1.248V7.07L54.47,66.78Z"
          transform="translate(-27.777 -1)"
          fill="#455a64"
        />
        <path
          id="Path_3326"
          data-name="Path 3326"
          d="M237.608,16.956a2.251,2.251,0,0,0-1,1.757c0,.649.454.909,1,.589a2.236,2.236,0,0,0,1-1.757C238.622,16.911,238.173,16.636,237.608,16.956Z"
          transform="translate(-118.991 -8.924)"
          fill="#f4b947"
        />
        <path
          id="Path_3327"
          data-name="Path 3327"
          d="M244.048,13.233a2.251,2.251,0,0,0-1,1.757c0,.649.454.909,1,.589a2.251,2.251,0,0,0,1-1.757C245.062,13.173,244.608,12.914,244.048,13.233Z"
          transform="translate(-122.216 -7.058)"
          fill="#f4b947"
        />
        <path
          id="Path_3328"
          data-name="Path 3328"
          d="M250.478,9.511a2.251,2.251,0,0,0-1,1.757c0,.649.454.909,1,.584a2.232,2.232,0,0,0,1-1.752C251.492,9.451,251.037,9.186,250.478,9.511Z"
          transform="translate(-125.437 -5.193)"
          fill="#f4b947"
        />
        <g
          id="Group_6290"
          data-name="Group 6290"
          transform="translate(85.31 17.248)"
          opacity="0.1"
        >
          <path
            id="Path_3329"
            data-name="Path 3329"
            d="M194.416,59.328a4.907,4.907,0,0,0-2.216,3.839c0,1.418,1,2,2.216,1.283a4.892,4.892,0,0,0,2.216-3.839C196.633,59.2,195.645,58.625,194.416,59.328Z"
            transform="translate(-182.061 -47.308)"
          />
          <path
            id="Path_3330"
            data-name="Path 3330"
            d="M174.106,71.055a4.9,4.9,0,0,0-2.216,3.839c0,1.413,1,2,2.216,1.278a4.887,4.887,0,0,0,2.216-3.839C176.323,70.92,175.335,70.346,174.106,71.055Z"
            transform="translate(-171.89 -53.179)"
          />
          <path
            id="Path_3331"
            data-name="Path 3331"
            d="M214.776,47.605a4.9,4.9,0,0,0-2.216,3.839c0,1.413,1,2,2.216,1.278a4.887,4.887,0,0,0,2.216-3.839C216.968,47.47,215.98,46.9,214.776,47.605Z"
            transform="translate(-192.257 -41.436)"
          />
          <path
            id="Path_3332"
            data-name="Path 3332"
            d="M235.041,35.855a4.892,4.892,0,0,0-2.211,3.839c0,1.413,1,2,2.211,1.278a4.887,4.887,0,0,0,2.216-3.839C237.258,35.72,236.27,35.146,235.041,35.855Z"
            transform="translate(-202.408 -35.551)"
          />
        </g>
        <path
          id="Path_3333"
          data-name="Path 3333"
          d="M72.882,148.867l24.067-13.893c1.193-.689,2.162-.13,2.162,1.248V159.33a4.782,4.782,0,0,1-2.162,3.744L72.882,176.967c-1.193.689-2.162.13-2.162-1.248V152.611A4.787,4.787,0,0,1,72.882,148.867Z"
          transform="translate(-35.915 -67.946)"
          fill="#e0e0e0"
        />
        <path
          id="Path_3334"
          data-name="Path 3334"
          d="M141.942,93.733l50.42-29.119c1.193-.689,2.162-.13,2.162,1.248V88.97a4.782,4.782,0,0,1-2.162,3.744l-50.42,29.114c-1.193.689-2.162.13-2.162-1.248v-23.1a4.772,4.772,0,0,1,2.162-3.744Z"
          transform="translate(-70.499 -32.71)"
          fill="#e0e0e0"
        />
        <path
          id="Path_3335"
          data-name="Path 3335"
          d="M72.882,210.987l38.259-22.09c1.2-.689,2.162-.2,2.162,1.093a4.618,4.618,0,0,1-2.157,3.589l-38.264,22.09c-1.193.689-2.162.2-2.162-1.093A4.638,4.638,0,0,1,72.882,210.987Z"
          transform="translate(-35.915 -94.942)"
          fill="#e0e0e0"
        />
        <path
          id="Path_3336"
          data-name="Path 3336"
          d="M72.882,227.407l38.259-22.09c1.2-.689,2.162-.2,2.162,1.093a4.618,4.618,0,0,1-2.157,3.584L72.882,232.089c-1.193.689-2.162.2-2.162-1.093A4.638,4.638,0,0,1,72.882,227.407Z"
          transform="translate(-35.915 -103.165)"
          fill="#e0e0e0"
        />
        <path
          id="Path_3337"
          data-name="Path 3337"
          d="M72.882,243.8l38.259-22.11c1.2-.689,2.162-.2,2.162,1.093a4.618,4.618,0,0,1-2.157,3.589l-38.264,22.11c-1.193.689-2.162.2-2.162-1.093A4.638,4.638,0,0,1,72.882,243.8Z"
          transform="translate(-35.915 -111.363)"
          fill="#e0e0e0"
        />
        <g id="Letter" transform="translate(55.083 63.783)">
          <path
            id="Path_3338"
            data-name="Path 3338"
            d="M111.34,169.637a2.875,2.875,0,0,1,1.3-2.246l66.349-38.309a2.9,2.9,0,0,1,2.6,0l1.463.849a2.86,2.86,0,0,1,1.293,2.246v50.854a2.88,2.88,0,0,1-1.283,2.266l-66.364,38.289a2.885,2.885,0,0,1-2.591,0l-1.463-.849a2.88,2.88,0,0,1-1.3-2.246Z"
            transform="translate(-111.34 -128.772)"
            fill="#2a5798"
          />
          <path
            id="Path_3339"
            data-name="Path 3339"
            d="M112.1,168.357l3.679,2.122,68.561-39.6a2.716,2.716,0,0,0-.914-.968l-1.488-.829a2.825,2.825,0,0,0-2.591,0l-66.329,38.3a2.686,2.686,0,0,0-.919.968Z"
            transform="translate(-111.721 -128.77)"
            fill="#fff"
            opacity="0.4"
          />
          <path
            id="Path_3340"
            data-name="Path 3340"
            d="M111.34,209.348v50.859a2.866,2.866,0,0,0,1.3,2.241l1.463.849a2.3,2.3,0,0,0,.354.16,2.885,2.885,0,0,0,.534.125,3.2,3.2,0,0,0,1-.04l.255-.065a1.033,1.033,0,0,0,.15-.065.759.759,0,0,1-.619,0,.9.9,0,0,1-.4-.854V211.689a1.138,1.138,0,0,1,.679-1.1l-.679-.394-3.679-2.122A2.641,2.641,0,0,0,111.34,209.348Z"
            transform="translate(-111.34 -168.483)"
            opacity="0.1"
          />
          <path
            id="Path_3341"
            data-name="Path 3341"
            d="M119.464,172.467,150.2,183.949A4.992,4.992,0,0,0,156.121,182l4.932-7.558,27.217-41.7-26.233,41.983L188.4,185.042a2.7,2.7,0,0,1-.4,1.293l-26.034-11.482-5.736,9.18a4.992,4.992,0,0,1-6.25,1.917l-4.083-1.8-26.034,41.544a.9.9,0,0,1-.4-.854v-.849l26.3-39.9Z"
            transform="translate(-115.406 -130.758)"
            opacity="0.2"
          />
        </g>
        <path
          id="Path_3342"
          data-name="Path 3342"
          d="M229.14,60.93V177.7c0,1.378.968,1.937,2.162,1.248l52.457-30.287a4.782,4.782,0,0,0,2.162-3.744V28.152c0-1.378-.968-1.937-2.162-1.248L231.3,57.186A4.782,4.782,0,0,0,229.14,60.93Z"
          transform="translate(-115.25 -13.825)"
          fill="#fafafa"
          stroke="#e0e0e0"
          stroke-miterlimit="10"
          stroke-width="1.17"
        />
        <path
          id="Path_3343"
          data-name="Path 3343"
          d="M235.23,95.264a1.188,1.188,0,0,1,.564-.909l5.99-3.45c.31-.18.559-.06.559.26a1.188,1.188,0,0,1-.559.914l-5.99,3.445C235.485,95.7,235.23,95.588,235.23,95.264Z"
          transform="translate(-118.3 -45.983)"
          fill="#455a64"
        />
        <path
          id="Path_3344"
          data-name="Path 3344"
          d="M235.23,99.923a1.188,1.188,0,0,1,.564-.909l5.99-3.45c.31-.18.559-.065.559.26a1.178,1.178,0,0,1-.574.914l-5.99,3.45C235.485,100.362,235.23,100.232,235.23,99.923Z"
          transform="translate(-118.3 -48.315)"
          fill="#455a64"
        />
        <path
          id="Path_3345"
          data-name="Path 3345"
          d="M235.23,104.543a1.178,1.178,0,0,1,.564-.909l5.99-3.45c.31-.18.559-.065.559.26a1.178,1.178,0,0,1-.559.909l-5.99,3.45C235.485,105,235.23,104.887,235.23,104.543Z"
          transform="translate(-118.3 -50.629)"
          fill="#455a64"
        />
        <path
          id="Path_3346"
          data-name="Path 3346"
          d="M328.484,46.375v-.934a.06.06,0,0,0-.09-.06l-.719.324a.085.085,0,0,1-.12-.055,1.534,1.534,0,0,0-.16-.354.194.194,0,0,1,0-.175l.5-.968a.1.1,0,0,0-.045-.14l-.5-.3a.1.1,0,0,0-.145.035l-.594.9a.2.2,0,0,1-.155.075,1.5,1.5,0,0,0-.389.04.085.085,0,0,1-.11-.075l-.08-.784a.058.058,0,0,0-.095-.05l-.809.464a.215.215,0,0,0-.095.15l-.08.9a.324.324,0,0,1-.085.17,4.5,4.5,0,0,0-.449.474.15.15,0,0,1-.16.045l-.5-.18a.13.13,0,0,0-.145.05l-.594,1.028a.135.135,0,0,0,.025.155l.419.359a.16.16,0,0,1,.04.16,5.206,5.206,0,0,0-.19.624.3.3,0,0,1-.1.16l-.739.5a.215.215,0,0,0-.085.16V50a.06.06,0,0,0,.095.06l.719-.324a.09.09,0,0,1,.12.055,1.5,1.5,0,0,0,.16.359.2.2,0,0,1,0,.175l-.5.963a.1.1,0,0,0,.045.14l.5.3a.1.1,0,0,0,.14-.03l.6-.859a.2.2,0,0,1,.155-.08,1.5,1.5,0,0,0,.389-.04.09.09,0,0,1,.11.08l.08.784c0,.055.045.075.095.05l.809-.469a.22.22,0,0,0,.095-.15l.08-.9a.294.294,0,0,1,.085-.165,4.494,4.494,0,0,0,.449-.5.15.15,0,0,1,.16-.045l.5.18a.13.13,0,0,0,.145-.055l.594-1.028a.13.13,0,0,0-.03-.155l-.414-.354a.165.165,0,0,1-.04-.165,4.689,4.689,0,0,0,.185-.624.309.309,0,0,1,.1-.155l.739-.5A.225.225,0,0,0,328.484,46.375Zm-3.155,2.93c-.754.434-1.363.085-1.363-.789a3,3,0,0,1,1.363-2.361c.754-.434,1.363-.08,1.363.789A3,3,0,0,1,325.329,49.305Z"
          transform="translate(-161.873 -22.384)"
          fill="#37474f"
        />
        <path
          id="Path_3347"
          data-name="Path 3347"
          d="M274.867,93.639c6.13-3.539,11.1-.669,11.1,6.4s-4.962,15.685-11.1,19.224-11.1.669-11.1-6.41S268.742,97.179,274.867,93.639Z"
          transform="translate(-132.593 -46.635)"
          fill="#2a5798"
        />
        <path
          id="Path_3348"
          data-name="Path 3348"
          d="M282.239,105.826c2-1.148,3.6-.22,3.6,2.077a7.952,7.952,0,0,1-3.6,6.25c-2,1.148-3.6.22-3.6-2.077A7.957,7.957,0,0,1,282.239,105.826Z"
          transform="translate(-140.04 -53.25)"
          fill="#f4b947"
        />
        <path
          id="Path_3349"
          data-name="Path 3349"
          d="M286.153,126.6c0-3.774-2.651-5.3-5.916-3.415l-2.042,1.178a13.107,13.107,0,0,0-5.916,10.244v1.058a6.054,6.054,0,0,0,1.907.29,9.984,9.984,0,0,0,4.947-1.5,21.885,21.885,0,0,0,7.019-6.944Z"
          transform="translate(-136.855 -61.787)"
          fill="#f4b947"
        />
        <path
          id="Path_3350"
          data-name="Path 3350"
          d="M264.913,155.83l20.033-11.567c.594-.344,1.078-.1,1.078.549a2.321,2.321,0,0,1-1.078,1.792l-20.033,11.567c-.6.344-1.083.1-1.083-.544a2.316,2.316,0,0,1,1.083-1.8Z"
          transform="translate(-132.623 -72.668)"
          fill="#2a5798"
        />
        <path
          id="Path_3351"
          data-name="Path 3351"
          d="M260.553,169.9l24.331-14.058c.6-.344,1.083-.1,1.083.549a2.316,2.316,0,0,1-1.083,1.792l-24.331,14.068c-.6.344-1.083.1-1.083-.549A2.321,2.321,0,0,1,260.553,169.9Z"
          transform="translate(-130.439 -78.467)"
          fill="#2a5798"
        />
        <path
          id="Path_3352"
          data-name="Path 3352"
          d="M311.029,174.645l6.814-3.934c.359-.2.649-.11.649.21a1.3,1.3,0,0,1-.649.963l-6.814,3.934c-.354.2-.649.11-.649-.21A1.318,1.318,0,0,1,311.029,174.645Z"
          transform="translate(-155.935 -85.937)"
          fill="#37474f"
        />
        <path
          id="Path_3353"
          data-name="Path 3353"
          d="M242.408,207.448l10.009-5.776c.594-.344,1.078-.065,1.078.624v6.869a2.4,2.4,0,0,1-1.078,1.872l-10.009,5.776c-.594.344-1.078.065-1.078-.624V209.32A2.4,2.4,0,0,1,242.408,207.448Z"
          transform="translate(-121.355 -101.422)"
          fill="#2a5798"
        />
        <path
          id="Path_3354"
          data-name="Path 3354"
          d="M246.039,211.255l6.814-3.934c.359-.2.649-.11.649.21a1.3,1.3,0,0,1-.649.963l-6.814,3.934c-.359.2-.649.11-.649-.215a1.3,1.3,0,0,1,.649-.958Z"
          transform="translate(-123.388 -104.271)"
          fill="#fafafa"
        />
        <path
          id="Path_3355"
          data-name="Path 3355"
          d="M245.39,217.089v2c0,.414.29.579.649.374l6.814-3.934a1.443,1.443,0,0,0,.649-1.123v-2c0-.414-.29-.579-.649-.374l-6.814,3.934A1.433,1.433,0,0,0,245.39,217.089Z"
          transform="translate(-123.388 -106.64)"
          fill="#fafafa"
        />
        <path
          id="Path_3356"
          data-name="Path 3356"
          d="M274.913,188.685l9.984-5.776c.6-.349,1.083-.07,1.083.624V190.4a2.386,2.386,0,0,1-1.083,1.872l-9.984,5.776c-.6.344-1.083.065-1.083-.624v-6.869A2.386,2.386,0,0,1,274.913,188.685Z"
          transform="translate(-137.631 -92.024)"
          fill="#2a5798"
        />
        <path
          id="Path_3357"
          data-name="Path 3357"
          d="M278.539,192.492l6.814-3.934c.354-.21.644-.115.644.21a1.293,1.293,0,0,1-.644.958l-6.814,3.939c-.359.2-.649.11-.649-.215A1.3,1.3,0,0,1,278.539,192.492Z"
          transform="translate(-139.664 -94.873)"
          fill="#fafafa"
        />
        <path
          id="Path_3358"
          data-name="Path 3358"
          d="M277.89,198.324v2c0,.409.29.579.649.374l6.814-3.939a1.433,1.433,0,0,0,.644-1.123v-2c0-.414-.29-.579-.644-.374l-6.814,3.934a1.428,1.428,0,0,0-.649,1.128Z"
          transform="translate(-139.664 -97.24)"
          fill="#fafafa"
        />
        <path
          id="Path_3359"
          data-name="Path 3359"
          d="M307.4,169.918l9.984-5.776c.594-.344,1.078-.065,1.078.624v6.869a2.386,2.386,0,0,1-1.078,1.872l-9.984,5.781c-.6.344-1.083.065-1.083-.624V171.79a2.386,2.386,0,0,1,1.083-1.872Z"
          transform="translate(-153.902 -82.627)"
          fill="#2a5798"
        />
        <path
          id="Path_3360"
          data-name="Path 3360"
          d="M311.029,173.732l6.814-3.934c.359-.21.649-.115.649.21a1.288,1.288,0,0,1-.649.958l-6.814,3.934c-.359.21-.649.115-.649-.21A1.288,1.288,0,0,1,311.029,173.732Z"
          transform="translate(-155.935 -85.478)"
          fill="#fafafa"
        />
        <path
          id="Path_3361"
          data-name="Path 3361"
          d="M310.38,179.567v2c0,.414.29.584.649.374L317.843,178a1.428,1.428,0,0,0,.649-1.123v-2c0-.414-.29-.584-.649-.374l-6.814,3.934A1.428,1.428,0,0,0,310.38,179.567Z"
          transform="translate(-155.935 -87.848)"
          fill="#fafafa"
        />
        <path
          id="Path_3362"
          data-name="Path 3362"
          d="M243.492,221.355,283.777,198.1c1.193-.689,2.162-.2,2.162,1.093a4.638,4.638,0,0,1-2.162,3.589l-40.286,23.258c-1.193.689-2.162.2-2.162-1.093A4.638,4.638,0,0,1,243.492,221.355Z"
          transform="translate(-121.355 -99.549)"
          fill="#e0e0e0"
        />
        <path
          id="Path_3363"
          data-name="Path 3363"
          d="M243.492,240.085l40.286-23.258c1.193-.689,2.162-.2,2.162,1.093a4.638,4.638,0,0,1-2.162,3.589l-40.286,23.258c-1.193.689-2.162.2-2.162-1.093A4.638,4.638,0,0,1,243.492,240.085Z"
          transform="translate(-121.355 -108.929)"
          fill="#e0e0e0"
        />
        <path
          id="Path_3364"
          data-name="Path 3364"
          d="M270.843,263.709l14.058-8.117c.6-.344,1.083-.065,1.083.624v4.528a2.386,2.386,0,0,1-1.083,1.872l-14.058,8.117c-.6.344-1.083.065-1.083-.624v-4.528A2.386,2.386,0,0,1,270.843,263.709Z"
          transform="translate(-135.593 -128.425)"
          fill="#2a5798"
        />
        <path
          id="Path_3365"
          data-name="Path 3365"
          d="M246.418,246.211a2.241,2.241,0,0,0-1,1.757c0,.644.454.909,1,.584a2.241,2.241,0,0,0,1-1.757C247.432,246.151,246.978,245.886,246.418,246.211Z"
          transform="translate(-123.403 -123.731)"
          fill="#fafafa"
        />
        <path
          id="Path_3366"
          data-name="Path 3366"
          d="M252.858,242.5a2.236,2.236,0,0,0-1,1.757c0,.644.454.909,1,.584a2.241,2.241,0,0,0,1-1.757C253.872,242.435,253.428,242.181,252.858,242.5Z"
          transform="translate(-126.628 -121.873)"
          fill="#fafafa"
        />
        <path
          id="Path_3367"
          data-name="Path 3367"
          d="M259.288,238.771a2.241,2.241,0,0,0-1,1.757c0,.644.454.909,1,.584a2.241,2.241,0,0,0,1-1.757C260.3,238.711,259.847,238.446,259.288,238.771Z"
          transform="translate(-129.849 -120.005)"
          fill="#fafafa"
        />
        <path
          id="Path_3368"
          data-name="Path 3368"
          d="M265.718,235.051a2.242,2.242,0,0,0-1,1.757c0,.644.454.909,1,.584a2.236,2.236,0,0,0,1-1.757C266.737,234.991,266.283,234.726,265.718,235.051Z"
          transform="translate(-133.069 -118.142)"
          fill="#fafafa"
        />
        <path
          id="Path_3369"
          data-name="Path 3369"
          d="M272.158,231.331a2.241,2.241,0,0,0-1,1.757c0,.644.454.909,1,.584a2.241,2.241,0,0,0,1-1.757C273.172,231.271,272.718,231.006,272.158,231.331Z"
          transform="translate(-136.294 -116.279)"
          fill="#fafafa"
        />
        <path
          id="Path_3370"
          data-name="Path 3370"
          d="M278.588,227.611a2.241,2.241,0,0,0-1,1.757c0,.644.454.909,1,.584a2.241,2.241,0,0,0,1-1.757C279.6,227.551,279.147,227.286,278.588,227.611Z"
          transform="translate(-139.514 -114.416)"
          fill="#fafafa"
        />
        <path
          id="Path_3371"
          data-name="Path 3371"
          d="M285,223.87a2.241,2.241,0,0,0-1,1.757c0,.644.454.909,1,.584a2.241,2.241,0,0,0,1-1.757C286.027,223.825,285.572,223.56,285,223.87Z"
          transform="translate(-142.724 -112.548)"
          fill="#fafafa"
        />
        <path
          id="Path_3372"
          data-name="Path 3372"
          d="M246.418,264.99a2.241,2.241,0,0,0-1,1.757c0,.644.454.909,1,.584a2.241,2.241,0,0,0,1-1.757C247.432,264.925,246.978,264.665,246.418,264.99Z"
          transform="translate(-123.403 -133.135)"
          fill="#fafafa"
        />
        <path
          id="Path_3373"
          data-name="Path 3373"
          d="M252.858,261.271a2.236,2.236,0,0,0-1,1.757c0,.644.454.909,1,.584a2.241,2.241,0,0,0,1-1.757C253.872,261.211,253.428,260.946,252.858,261.271Z"
          transform="translate(-126.628 -131.273)"
          fill="#fafafa"
        />
        <path
          id="Path_3374"
          data-name="Path 3374"
          d="M259.288,257.542a2.241,2.241,0,0,0-1,1.757c0,.644.454.909,1,.584a2.241,2.241,0,0,0,1-1.757C260.3,257.482,259.847,257.2,259.288,257.542Z"
          transform="translate(-129.849 -129.401)"
          fill="#fafafa"
        />
        <path
          id="Path_3375"
          data-name="Path 3375"
          d="M265.718,253.851a2.241,2.241,0,0,0-1,1.757c0,.644.454.909,1,.584a2.236,2.236,0,0,0,1-1.757C266.737,253.777,266.283,253.512,265.718,253.851Z"
          transform="translate(-133.069 -127.553)"
          fill="#fafafa"
        />
        <path
          id="Path_3376"
          data-name="Path 3376"
          d="M272.158,250.111a2.241,2.241,0,0,0-1,1.757c0,.644.454.909,1,.584a2.241,2.241,0,0,0,1-1.757C273.172,250.051,272.718,249.786,272.158,250.111Z"
          transform="translate(-136.294 -125.684)"
          fill="#fafafa"
        />
        <path
          id="Path_3377"
          data-name="Path 3377"
          d="M278.588,246.391a2.241,2.241,0,0,0-1,1.757c0,.644.454.909,1,.584a2.241,2.241,0,0,0,1-1.757C279.6,246.331,279.147,246.066,278.588,246.391Z"
          transform="translate(-139.514 -123.821)"
          fill="#fafafa"
        />
        <path
          id="Path_3378"
          data-name="Path 3378"
          d="M285,242.671a2.241,2.241,0,0,0-1,1.757c0,.644.454.909,1,.584a2.242,2.242,0,0,0,1-1.757C286.027,242.611,285.572,242.346,285,242.671Z"
          transform="translate(-142.724 -121.958)"
          fill="#fafafa"
        />
        <path
          id="Path_3379"
          data-name="Path 3379"
          d="M365.668,244.351a9.715,9.715,0,0,1-4.917-1.3c-3.6-2.077-5.661-6.425-5.661-11.926,0-9.675,6.15-20.807,13.978-25.34,4.228-2.436,8.427-2.7,11.826-.744,3.594,2.082,5.661,6.425,5.661,11.931,0,9.675-6.15,20.8-14,25.335A13.882,13.882,0,0,1,365.668,244.351Zm10.314-33.641a7.368,7.368,0,0,0-3.41,1.108c-5.7,3.29-10.518,12.131-10.518,19.3,0,2.905.814,5.107,2.177,5.9,1.553.9,3.714-.08,4.857-.744,5.706-3.29,10.518-12.131,10.518-19.3,0-2.905-.814-5.112-2.177-5.9A2.841,2.841,0,0,0,375.982,210.71Z"
          transform="translate(-178.325 -102.532)"
          fill="#2a5798"
        />
        <path
          id="Path_3380"
          data-name="Path 3380"
          d="M390.023,225.873c0-5.436-3.425-7.443-3.425-7.443h0c1.363.784,2.177,3,2.177,5.9,0,7.174-4.812,16.015-10.518,19.3-1.143.664-3.3,1.642-4.857.744,0,0,2.89,1.792,6.884-.384C386.065,240.839,390.023,233.047,390.023,225.873Z"
          transform="translate(-187.495 -109.888)"
          fill="#2a5798"
        />
        <path
          id="Path_3381"
          data-name="Path 3381"
          d="M388.474,93.769a3.6,3.6,0,0,0-7.2,0h0v57.284h0a1.777,1.777,0,0,0,1.053,1.468,5.616,5.616,0,0,0,5.092,0,1.787,1.787,0,0,0,1.058-1.468h0V93.779h0Z"
          transform="translate(-191.436 -45.721)"
          fill="#2a5798"
        />
        <path
          id="Path_3382"
          data-name="Path 3382"
          d="M375.846,118.987a4.6,4.6,0,0,0-2.082-3.6,1.438,1.438,0,0,0-1.5-.13h0L363.4,120.37l-.215.13a.5.5,0,0,0-.09.05,3.157,3.157,0,0,0-.424.349,2.95,2.95,0,0,0,.659,4.678,3,3,0,0,0,1.408.354,2.94,2.94,0,0,0,1.4-.354l.17-.095,8.941-5.152h0a1.5,1.5,0,0,0,.6-1.343Z"
          transform="translate(-181.684 -58.144)"
          fill="#2a5798"
        />
        <path
          id="Path_3383"
          data-name="Path 3383"
          d="M374.288,147.714a4.587,4.587,0,0,0-2.082-3.6,1.438,1.438,0,0,0-1.5-.135h0l-10.413,5.99-.215.125a.385.385,0,0,0-.09.05,3.221,3.221,0,0,0-.424.349,2.935,2.935,0,0,0,2.067,5.032,2.885,2.885,0,0,0,1.4-.354l.17-.095,10.483-5.99h0A1.468,1.468,0,0,0,374.288,147.714Z"
          transform="translate(-180.126 -72.529)"
          fill="#2a5798"
        />
      </g>
    </svg>
  );
};
