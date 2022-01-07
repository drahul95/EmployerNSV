import SearchImg from "../../images/search.png";
import "./FindJobArea.scss";
import Notification from "./Notification";
import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
// import { makeStyles } from "@material-ui/core/styles";
// import CancelIcon from "@material-ui/icons/Cancel";
require("dotenv").config();
const BASE_URL = process.env.REACT_APP_BASE_URL;

function FindJobArea(props) {
  const { customcolorh1, customcolorspan, isHomePage } = props;
  return (
    <div id="fndjob" className={isHomePage}>
      <div className="py-5 container">
        <h1 className={customcolorh1}>Find a Job You Deserved It</h1>
        <span className={customcolorspan}>
          Tell us what kind of a job you are looking out for and stay updated
          with latest opportunities.
        </span>
        <form action="" className="srchjob_frm mt-3 row ps-3">
          <div className="job col-12 col-lg-5 dis_flex_no_space">
            <label>
              <img src={BASE_URL + SearchImg} alt="Search" />
            </label>
            <Autocomplete
              id="free-solo-demo"
              freeSolo
              classes={{
                clearIndicator: "SrchBtn",
              }}
              fullWidth
              options={jobTitle.map((option) => option.name)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  margin="normal"
                  placeholder="Job Title or Keywords"
                  className="srcharea_inputdiv"
                />
              )}
            />
          </div>
          <div className="location col-12 col-lg-5 dis_flex_no_space">
            <label>
              <svg
                className="locate"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <defs></defs>
                <g transform="translate(2894 -1379)">
                  <rect
                    className="a"
                    width="24"
                    height="24"
                    transform="translate(-2894 1379)"
                  />
                  <g transform="translate(-2924.191 1378.052)">
                    <g transform="translate(32.191 0.948)">
                      <path
                        d="M41.73,24a2.467,2.467,0,0,1-1.187-.684c-1.415-1.276-2.862-2.517-4.153-3.923a17.5,17.5,0,0,1-3.277-4.751,9.312,9.312,0,0,1,1.052-9.786A9.094,9.094,0,0,1,40,1.149a9.481,9.481,0,0,1,9.291,3.144A9.47,9.47,0,0,1,50.81,14.619a17.931,17.931,0,0,1-3.259,4.736c-1.382,1.507-2.937,2.83-4.454,4.193A2.151,2.151,0,0,1,42.18,24Z"
                        transform="translate(-32.191 -0.948)"
                      />
                      <path
                        className="b"
                        d="M64.838,24.72a8.284,8.284,0,0,1,7.047,4.037A7.9,7.9,0,0,1,73.011,34.4,9.273,9.273,0,0,1,71.9,37.414a20.951,20.951,0,0,1-3.9,4.824c-.957.921-1.963,1.787-2.95,2.675-.235.212-.366.228-.569.046a56.658,56.658,0,0,1-4.538-4.3A16.538,16.538,0,0,1,57.2,36.678a7.976,7.976,0,0,1,.353-7.859A8.179,8.179,0,0,1,63.1,24.893a6.78,6.78,0,0,1,.755-.116C64.147,24.749,64.441,24.742,64.838,24.72Z"
                        transform="translate(-54.97 -23.382)"
                      />
                      <path
                        d="M138.059,95.553a4.292,4.292,0,1,1-4.277-4.3A4.311,4.311,0,0,1,138.059,95.553Z"
                        transform="translate(-124 -86.168)"
                      />
                      <path
                        className="b"
                        d="M159.192,118.247a2.946,2.946,0,1,1-2.945-2.947,2.963,2.963,0,0,1,2.945,2.947Z"
                        transform="translate(-146.484 -108.864)"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </label>
            <Autocomplete
              id="free-solo-demo"
              freeSolo
              classes={{
                clearIndicator: "SrchBtn",
              }}
              fullWidth
              options={location.map((option) => option.name)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  margin="normal"
                  placeholder="Work Location"
                  className="srcharea_inputdiv"
                />
              )}
            />
          </div>
          <div className="frmbtn col-12 col-lg-2">
            <button type="submit">Search Job</button>
          </div>
        </form>
      </div>
      <Notification />
      <div
        class="modal fade"
        id="notifi_filter_div"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <span className="font18 font_normal blcktxtclr">
                Notification Filter
              </span>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body pt-4">
              <div className="my-2">
                <div>
                  <label className="form-label font14 blcktxtclr">
                    Job Category
                  </label>
                  <Autocomplete
                    id="combo-box-demo"
                    className="BlueSelectDropdown"
                    options={JobCat}
                    getOptionLabel={(option) => option.name}
                    classes={{
                      paper: "BlueAutoCompletePaper",
                    }}
                    renderInput={(params) => {
                      params.inputProps.className = "noborderinput";
                      params.InputProps.className = "noBeforeAfter";
                      params.InputProps.placeholder = "Select";
                      return (
                        <TextField
                          disabled
                          inputStyle={{ cursor: "none" }}
                          {...params}
                          onKeyPress={(e) => e.preventDefault()}
                        />
                      );
                    }}
                  />
                </div>
              </div>

              <div className="my-2">
                <div>
                  <label className="form-label font14 blcktxtclr">
                    Institutions
                  </label>
                  <Autocomplete
                    id="combo-box-demo"
                    className="BlueSelectDropdown"
                    options={Inst}
                    getOptionLabel={(option) => option.name}
                    classes={{
                      paper: "BlueAutoCompletePaper",
                    }}
                    renderInput={(params) => {
                      params.inputProps.className = "noborderinput";
                      params.InputProps.className = "noBeforeAfter";
                      params.InputProps.placeholder = "Select";
                      return (
                        <TextField
                          disabled
                          inputStyle={{ cursor: "none" }}
                          {...params}
                          onKeyPress={(e) => e.preventDefault()}
                        />
                      );
                    }}
                  />
                </div>
              </div>

              <div className="my-2">
                <div>
                  <label className="form-label font14 blcktxtclr">
                    Activity
                  </label>
                  <Autocomplete
                    id="combo-box-demo"
                    className="BlueSelectDropdown"
                    options={Activity}
                    getOptionLabel={(option) => option.name}
                    classes={{
                      paper: "BlueAutoCompletePaper",
                    }}
                    renderInput={(params) => {
                      params.inputProps.className = "noborderinput";
                      params.InputProps.className = "noBeforeAfter";
                      params.InputProps.placeholder = "Select";
                      return (
                        <TextField
                          disabled
                          inputStyle={{ cursor: "none" }}
                          {...params}
                          onKeyPress={(e) => e.preventDefault()}
                        />
                      );
                    }}
                  />
                </div>
              </div>

              <div className="my-2">
                <div>
                  <label className="form-label font14 blcktxtclr">Date</label>
                  <input
                    type="date"
                    className="form-control nobrder py-3 brdrds8 lghtbluebg bold_500 px-3 width_full font14"
                  />
                </div>
              </div>

              <div className="row my-3">
                <div className="col-lg-8">
                  <button className="darkbluebg_whttxt py-3 font18 nobrder brdrds8 width_full">
                    Apply
                  </button>
                </div>
                <div className="col-lg-4">
                  <button className="lghtbluebg drkbluecolor py-3 font18 nobrder brdrds8 width_full">
                    Clear All
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FindJobArea;
const jobTitle = [
  { name: "Chemistry", id: 1 },
  { name: "Maths", id: 2 },
];
const location = [
  { name: "Kolkata", id: 1 },
  { name: "Chennai", id: 2 },
  { name: "Mumbai", id: 3 },
  { name: "Delhi", id: 4 },
];

const JobCat = [
  { name: "Academic", id: 1 },
  { name: "Non-Academic", id: 2 },
];
const Inst = [{ name: "Coaching institution", id: 1 }];
const Activity = [
  { name: "Medical Engineering", id: 1 },
  { name: "Physics", id: 2 },
];
