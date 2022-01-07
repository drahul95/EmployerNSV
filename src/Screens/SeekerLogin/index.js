import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Logins } from "../../Redux/actions/EmployeeLoginActions";
import Loader from "../../Components/Loader";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

const SekerLogin = (props) => {
  const [userName, setUserName] = useState("");
  const [LoginAlertMsg, SetLoginAlertMsg] = useState("");
  const [LoginAlert, SetLoginAlert] = useState(false);
  const [typeOfOtp, setTypeOfOtp] = useState({
    auth_type: "email_otp",
    email_otp: {
      email: "",
    },
    device_type: "web",
  });
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const logins = useSelector((state) => state.employeeLogin);
  const { login } = logins;
  const buttonRef = useRef(null);
  const userRegister = useRef(null);
  const captureRef = useRef(null);

  useEffect(() => {
    if (login) {
      console.log("login=========>", login);

      if (login?.success === true) {
        if (login.data.next == "MOBILE_OTP_VERIFICATION") {
          buttonRef.current.click();
        } else if (login.data.next == "CAPTURE") {
          captureRef.current.click();
        } else {
          var encodedStringBtoA = window.btoa(login.data.token);
          var encoded = window.btoa(encodedStringBtoA);
          const encodeType = window.btoa("Employee");
          const type = window.btoa(encodeType);
          window.location.href = `https://development.jobsineducation.net/landingpage/${encoded}/${type}`;
        }
        setLoading(false);
      } else {
        setLoading(false);
        SetLoginAlert(true);
        SetLoginAlertMsg(login?.error?.message);
        if (login.error.next == "SIGNUP") {
          setTimeout(()=>{
            userRegister.current.click();
          }, 1500)          
        }
      }
    }
  }, [logins]);

  const setLoginViaOtp = (value) => {
    const reg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (reg.test(String(value).toLowerCase())) {
      let otpObj = {
        auth_type: "email_otp",
        email_otp: {
          email: value,
        },
        device_type: "web",
      };
      setTypeOfOtp(otpObj);
    } else if (!isNaN(value)) {
      let otpObj = {
        auth_type: "mobile_otp",
        mobile_otp: {
          mobile: value,
        },
        device_type: "web",
      };
      setTypeOfOtp(otpObj);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeOfOtp.email_otp) {
      if (typeOfOtp.email_otp.email === "") {
        SetLoginAlert(true);
        SetLoginAlertMsg("Mobile or email is required.");
        return;
      }
    } else if (typeOfOtp.mobile_otp) {
      if (typeOfOtp.mobile_otp.mobile === "") {
        SetLoginAlert(true);
        SetLoginAlertMsg("Mobile or email is required.");
        return;
      }
      if (
        typeOfOtp.mobile_otp.mobile.length > 10 ||
        typeOfOtp.mobile_otp.mobile.length < 10
      ) {
        SetLoginAlert(true);
        SetLoginAlertMsg("Mobile number is not valid.");
        return;
      }
    }
    setLoading(true);
    dispatch(Logins({ userObject: typeOfOtp }));
  };

  const responseFacebook = async (response) => {
    if (response.status != "not_authorized") {
      let boday = {
        auth_type: "facebook",
        facebook: {
          accesstoken: response.accessToken,
          uid: response.userID,
          full_name: response.name,
          email: response.email,
          imageurl: response.picture.url,
          raw_data: response,
          mobile: "",
        },
        device_type: "web",
      };
      dispatch(Logins({ userObject: boday }));
    }
  };

  const getGoogleRespError = async (response) => {
    console.log("google login is not working", JSON.stringify(response));
  };

  const getGoogleResp = async (response) => {
    var session_id = Math.floor(100000000 + Math.random() * 900000000);
    localStorage.setItem("sessionId", session_id);
    if (
      response.error === undefined ||
      response.error !== "popup_closed_by_user" ||
      response.error !== "idpiframe_initialization_failed"
    ) {
      if (response.profileObj) {
        let boday = {
          auth_type: "google",
          google: {
            accesstoken: response.accessToken,
            uid: response.googleId,
            full_name: response.profileObj
              ? response.profileObj.givenName
                ? response.profileObj.givenName
                : ""
              : "" + " " + response.profileObj.familyName,
            email: response.profileObj.email,
            imageurl: response.profileObj.imageUrl,
            raw_data: response,
            mobile: "",
          },
          device_type: "web",
        };

        dispatch(Logins({ userObject: boday }));
      }
    }
  };

  return (
    <div>
      <div
        class="tab-pane fade show active"
        id="seeker2"
        role="tabpanel"
        aria-labelledby="seeker2-tab"
        style={{ position: "relative" }}
      >
        <form onSubmit={handleSubmit} className="row">
          <div className="col-12">
            {/* <label className="py-3 blcktxtclr bold_500 font14">
              Email or Phone Number
            </label> */}
          </div>
          <div className="col-12">
            <input
              value={userName}
              type="text"
              placeholder="Email or Phone Number"
              onChange={(e) => {
                setUserName(e.target.value);
                setLoginViaOtp(e.target.value);
              }}
              className={
                LoginAlert
                  ? "py-3 lghtbluebg blcktxtclr brdrds8 form-control px-4 font12 span-alert"
                  : "py-3 lghtbluebg blcktxtclr brdrds8 form-control px-4 font12"
              }
              onFocus={() => {
                SetLoginAlert(false);
              }}
            />
          </div>

          <div className="d-flex justify-content-end">
            {LoginAlert && <span className="span-alert">{LoginAlertMsg}</span>}
          </div>

          <div className="col-12 pt-3">
            <button
              type="submit"
              className="btn btn-primary darkbluebg py-3 brdrds8 font14 mb-3 width_full"
            >
              Get verification code
            </button>
            <a
              ref={buttonRef}
              data-bs-toggle={"modal"}
              data-bs-target={"#loginVerificationModal"}
              data-bs-dismiss={"modal"}
            />
          </div>
        </form>

        <div className="row my-4">
          <div className="break">
            <span className="font14 block py-2 px-2">Or</span>
          </div>
        </div>
        <div className="row">
          <div className="social_login">
            <ul>
              <li>
                <FacebookLogin
                  appId="595413994831998"
                  autoLoad={false}
                  authType="reauthenticate"
                  fields="name,email,picture"
                  callback={responseFacebook}
                  cssclassName="fcb drkbluecolor inline_block ps-4"
                  textButton="facebook"
                  icon={
                    <svg
                      className="fb_color me-3"
                      xmlns="http://www.w3.org/2000/svg"
                      width="9.324"
                      height="20.226"
                      viewBox="0 0 9.324 20.226"
                    >
                      <defs></defs>
                      <g transform="translate(-59.163 -248.739)">
                        <g transform="translate(59.163 248.739)">
                          <g transform="translate(0 0)">
                            <path
                              className="a"
                              d="M8.949,10.093H6.183V20.226H1.993V10.093H0V6.532H1.993v-2.3A3.929,3.929,0,0,1,6.22,0l3.1.013V3.469H7.072a.853.853,0,0,0-.889.971v2.1H9.315Z"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  }
                />
                <a
                  ref={captureRef}
                  data-bs-toggle={"modal"}
                  data-bs-target={"#CaptureMobile"}
                  data-bs-dismiss={"modal"}
                />
              </li>
              <li>
                <GoogleLogin
                  // clientId="691805907225-gnrgje89qgv7vho19sl7l0lodcl576ud.apps.googleusercontent.com" jit
                  clientId="997896074967-6rb4i1iv8fulte3n7f9le0d0d78iim7j.apps.googleusercontent.com"
                  buttonText="Google"
                  disabled={false}
                  onSuccess={(resp) => getGoogleResp(resp)}
                  onFailure={(resp) => getGoogleRespError(resp)}
                  cookiePolicy={"single_host_origin"}
                  prompt="select_account"
                  className="gog redcolor inline_block ps-4"
                  icon={false}
                >
                  <svg
                    className="g_color"
                    xmlns="http://www.w3.org/2000/svg"
                    width="15.225"
                    height="15.228"
                    viewBox="0 0 15.225 15.228"
                  >
                    <defs></defs>
                    <g transform="translate(-2.364 -2.363)">
                      <path
                        className="a"
                        d="M8.35,9.185h3.718a4.727,4.727,0,1,1-1.283-5.069.512.512,0,0,0,.7,0l1.366-1.285a.511.511,0,0,0,0-.742A7.586,7.586,0,0,0,7.766,0a7.614,7.614,0,1,0,7.45,8.041c.006-.05.01-1.748.01-1.748H8.35a.51.51,0,0,0-.51.51v1.87A.51.51,0,0,0,8.35,9.185Z"
                        transform="translate(2.364 2.363)"
                      />
                    </g>
                  </svg>
                  <span className="inline_block px-4">Google</span>
                </GoogleLogin>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-2">
          <span className="greytxtclr font14 block text-center">
            Don't you have an account?{" "}
            <a
              href=""
              className="drkbluecolor bold_500 ms-2"
              data-bs-toggle="modal"
              data-bs-target="#RegModal"
                        // data-bs-target="#Groups_Tab_modal"
              data-bs-dismiss="modal"
              ref={userRegister}
            >
              Register
            </a>
          </span>
        </div>

        {/* <div className='row'>
            <div className='social_login'>
              <ul>
                <li>
                  <a href='' className='fcb'>
                    <svg
                      className='fb_color'
                      xmlns='http://www.w3.org/2000/svg'
                      width='9.324'
                      height='20.226'
                      viewBox='0 0 9.324 20.226'
                    >
                      <defs></defs>
                      <g transform='translate(-59.163 -248.739)'>
                        <g transform='translate(59.163 248.739)'>
                          <g transform='translate(0 0)'>
                            <path
                              class='a'
                              d='M8.949,10.093H6.183V20.226H1.993V10.093H0V6.532H1.993v-2.3A3.929,3.929,0,0,1,6.22,0l3.1.013V3.469H7.072a.853.853,0,0,0-.889.971v2.1H9.315Z'
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                    <span className='drkbluecolor inline_block ps-4'>
                      Facebook
                    </span>
                  </a>
                </li>
                <li>
                  <a href='' className='gog'>
                    <svg
                      className='g_color'
                      xmlns='http://www.w3.org/2000/svg'
                      width='15.225'
                      height='15.228'
                      viewBox='0 0 15.225 15.228'
                    >
                      <defs></defs>
                      <g transform='translate(-2.364 -2.363)'>
                        <path
                          class='a'
                          d='M8.35,9.185h3.718a4.727,4.727,0,1,1-1.283-5.069.512.512,0,0,0,.7,0l1.366-1.285a.511.511,0,0,0,0-.742A7.586,7.586,0,0,0,7.766,0a7.614,7.614,0,1,0,7.45,8.041c.006-.05.01-1.748.01-1.748H8.35a.51.51,0,0,0-.51.51v1.87A.51.51,0,0,0,8.35,9.185Z'
                          transform='translate(2.364 2.363)'
                        />
                      </g>
                    </svg>
                    <span className='redcolor inline_block ps-4'>
                      Google
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
      </div>
      <Loader isLoading={isLoading} />
    </div>
  );
};

export default SekerLogin;
