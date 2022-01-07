import { useState, useEffect } from 'react';
import './UserLoginBtn.scss';
import RegisterVerification from './RegisterVerification';
import RegisterModal from '../SignUp/RegisterModal';
import LoginModal from '../Login/LoginModal';
import {LoginEmailMobileOtpValidation} from "../Auth/Employers/login/steps/step2";

require('dotenv').config();

function UserLoginBtn() {
  const [LoginEmployerEmail, SetLoginEmployerEmail] = useState('');

  const LoginEmpEmail = (x) => {
    SetLoginEmployerEmail(x);
  };
  return (
    //   <div className="rght_panel">
    //     <ul>
    //       <li className="p-2">
    //         <img src={BASE_URL + PersonImg} alt="Person" />
    //         <span className="p-2">Bruce Wayne</span>
    //       </li>
    //     </ul>
    //   </div>
    // ) : (
    <>
      {/* <div className="loginpanel pt-2"> */}
      {/* <ul>
          <li>
            <a
              href=""
              className="signbtn blcktxtclr px-4 py-2 font14 brdrds8 bold_500"
              data-bs-toggle="modal"
              data-bs-target="#SignModal"
            >
              Sign In
            </a>
          </li>
          <li>
            <a
              href=""
              className="empbtn px-4 py-2 font14 brdrds8 bold_500"
              data-bs-toggle="modal"
              data-bs-target="#RegModal"
            >
              For Employers
            </a>
          </li>
        </ul> */}
      {/* </div> */}
      {/* )
  ) : ( */}

      <div className='loginpanel pt-2'>
        <ul>
          <li>
            <a
              href=''
              className='signbtn blcktxtclr font14 brdrds8 bold_500'
              data-bs-toggle='modal'
              data-bs-target='#SignModal'
            >
              Sign In
            </a>
          </li>
          <li>
            <a
              href=''
              className='empbtn font14 brdrds8 bold_500'
              data-bs-toggle='modal'
              data-bs-target='#RegModal'
            >
              Sign Up
            </a>
          </li>
        </ul>

        {/* Login Modal Window */}
        <LoginModal LoginEmpEmail={LoginEmpEmail} />

        {/* Register Modal Wondow */}
        <RegisterModal />

        {/* Login Verfication Code */}
        <LoginEmailMobileOtpValidation />
        {/*<LoginVerification LoginEmployerEmail={LoginEmployerEmail} />*/}

        {/* SignUp Verfication Code */}
        <RegisterVerification />
      </div>
    </>
  );
}

export default UserLoginBtn;
