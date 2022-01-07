import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
// import { makeStyles } from "@material-ui/core/styles";
// import CancelIcon from "@material-ui/icons/Cancel";

function HomeSearch() {
  return (
    <div className="container">
      <div className="findjobarea col-12 col-xl-6 pt-5 mt-5">
        <h4 className="pt-5 pb-3 mt-5">Find the Job You Deserved</h4>
        <span className="subtext pb-5 block">
          Tell us what kind of a job you are looking out for and stay updated
          with latest opportunities.
        </span>
        <form action="">
          <div className="whitebg brdrds16 py-3 px-3 mb-3 form-group d-flex">
            <span>
              <svg
                className="search_svg"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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

          <div className="whitebg brdrds16 py-3 px-3 mb-3 form-group d-flex">
            <span>
              <svg
                className="locate"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
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
            </span>
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

          <button
            type="submit"
            className="py-4 px-3 brdrds16 whitebg big_srch_btn"
          >
            Search Job
          </button>
        </form>
      </div>
    </div>
  );
}
export default HomeSearch;
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
