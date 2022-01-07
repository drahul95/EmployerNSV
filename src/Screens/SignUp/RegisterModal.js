import { MultistepForm } from "../Auth/Employers/signup/MultistepForm";
import SeekerSignUpScreen from "./../SeekerSignUp";

function RegisterModal() {
  return (
    <div
      class="modal fade invitejobmodal"
      id="RegModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h4 className="bold blcktxtclr block font18 text-center">
              Registration
            </h4>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => window.location.reload()}
            ></button>
          </div>
          <div class="modal-body">
            <div className="pb-3 mx-2">
              <ul class="nav nav-tabs" id="LoginTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="seeker-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#seeker"
                    type="button"
                    role="tab"
                    aria-controls="seeker"
                    aria-selected="true"
                  >
                    I am a Job Seeker
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="employer-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#employer"
                    type="button"
                    role="tab"
                    aria-controls="employer"
                    aria-selected="false"
                  >
                    I am an Employer
                  </button>
                </li>
              </ul>
              <div class="tab-content" id="LoginTabContent">
                <div
                  class="tab-pane fade show active"
                  id="seeker"
                  role="tabpanel"
                  aria-labelledby="seeker-tab"
                >
                  <SeekerSignUpScreen />
                  <div className="row mt-2">
                    <span className="greytxtclr font14 block text-center">
                      Already have an account?
                      <a
                        href=""
                        className="drkbluecolor bold_500 ms-2"
                        data-bs-toggle="modal"
                        data-bs-target="#SignModal"
                        data-bs-dismiss="modal"
                      >
                        Login
                      </a>
                    </span>
                  </div>
                </div>

                <div
                  class="tab-pane fade"
                  id="employer"
                  role="tabpanel"
                  aria-labelledby="employer-tab"
                >
                  <MultistepForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterModal;
