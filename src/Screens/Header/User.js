import PersonImg from "../../images/person.png";
require("dotenv").config();
const BASE_URL = process.env.REACT_APP_BASE_URL;
function User() {
  return (
    <div className="rght_panel">
      <ul>
        <li className="p-2">
          <img src={BASE_URL + PersonImg} alt="Person" />
          <span className="p-2">Bruce Wayne</span>
        </li>
        <li className="p-2">
          <svg
            className="notification"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <defs></defs>
            <g transform="translate(-1074 118)">
              <g class="a" transform="translate(1074 -118)">
                <rect class="f" width="24" height="24" />
                <rect class="g" x="0.5" y="0.5" width="23" height="23" />
              </g>
              <g transform="translate(1074.555 -118)">
                <path
                  class="b"
                  d="M5.492,2.736A2.746,2.746,0,1,0,2.746,5.473,2.741,2.741,0,0,0,5.492,2.736Z"
                  transform="translate(6.259 18.527)"
                />
                <path
                  class="c"
                  d="M.8,0A2.752,2.752,0,0,0,0,.118,2.738,2.738,0,0,1,1.948,2.736,2.738,2.738,0,0,1,0,5.355,2.738,2.738,0,1,0,.8,0Z"
                  transform="translate(8.207 18.527)"
                />
                <path
                  class="b"
                  d="M1.95,3.214A1.623,1.623,0,1,1,3.226,1.3,1.629,1.629,0,0,1,1.95,3.214Z"
                  transform="translate(7.377 2.079)"
                />
                <path
                  class="c"
                  d="M2.155,1.3A1.629,1.629,0,0,0,.238.032,1.667,1.667,0,0,0,0,.1,1.624,1.624,0,0,1,1.038,1.3,1.622,1.622,0,0,1,0,3.148a1.627,1.627,0,0,0,.879.066A1.623,1.623,0,0,0,2.155,1.3Z"
                  transform="translate(8.447 2.079)"
                />
                <path
                  class="b"
                  d="M15.807,16.08H2.2A2.2,2.2,0,0,1,.829,12.155l.437-.351a4.273,4.273,0,0,0,1.6-3.331V6.165a6.187,6.187,0,0,1,12.375,0V8.516A4.273,4.273,0,0,0,16.784,11.8l.426.353a2.217,2.217,0,0,1,.8,1.705v.022a2.2,2.2,0,0,1-2.2,2.2Z"
                  transform="translate(0 4.726)"
                />
                <path
                  class="c"
                  d="M9.9,12.156,9.475,11.8A4.274,4.274,0,0,1,7.931,8.516V6.165A6.193,6.193,0,0,0,0,.249,6.171,6.171,0,0,1,4.444,6.165V8.516A4.274,4.274,0,0,0,5.989,11.8l.426.353a2.218,2.218,0,0,1,.8,1.705v.022a2.2,2.2,0,0,1-2.2,2.2H8.5a2.2,2.2,0,0,0,2.2-2.2v-.022A2.217,2.217,0,0,0,9.9,12.156Z"
                  transform="translate(7.309 4.726)"
                />
                <g transform="translate(10.023)">
                  <path
                    class="d"
                    d="M12.867,6.41a6.433,6.433,0,1,0-6.433,6.41A6.422,6.422,0,0,0,12.867,6.41Z"
                  />
                  <path
                    class="e"
                    d="M5.449,0A6.4,6.4,0,0,1,8.159,5.229,6.44,6.44,0,0,1,0,11.405,6.419,6.419,0,1,0,5.449,0Z"
                    transform="translate(2.711 0.234)"
                  />
                </g>
              </g>
            </g>
          </svg>
        </li>
        <li className="p-2">
          <svg
            className="calendar"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <defs></defs>
            <g transform="translate(-2 -1.751)">
              <g transform="translate(2 1.751)">
                <path
                  class="a"
                  d="M21.094,0H2.906A2.848,2.848,0,0,0,0,2.786V19.014A2.848,2.848,0,0,0,2.906,21.8H21.094A2.848,2.848,0,0,0,24,19.014V2.786A2.848,2.848,0,0,0,21.094,0Z"
                  transform="translate(0 2.2)"
                />
                <path
                  class="b"
                  d="M24,6.273V2.836A2.872,2.872,0,0,0,21.094,0H2.906A2.872,2.872,0,0,0,0,2.836V6.273Z"
                  transform="translate(0 1.256)"
                />
                <path
                  class="c"
                  d="M24,5.971V2.836A2.872,2.872,0,0,0,21.094,0H2.906A2.872,2.872,0,0,0,0,2.836V5.971Z"
                  transform="translate(0 2.2)"
                />
                <path
                  class="b"
                  d="M.99,0a.99.99,0,1,0,.99.99A.99.99,0,0,0,.99,0Z"
                  transform="translate(3.754 3.658)"
                />
                <path
                  class="d"
                  d="M.53,0A.53.53,0,0,0,0,.53V4.656a.53.53,0,1,0,1.059,0V.53A.53.53,0,0,0,.53,0Z"
                  transform="translate(4.222)"
                />
                <path
                  class="b"
                  d="M.99,0a.99.99,0,1,0,.99.99A.99.99,0,0,0,.99,0Z"
                  transform="translate(8.591 3.658)"
                />
                <path
                  class="d"
                  d="M.53,0A.53.53,0,0,0,0,.53V4.656a.53.53,0,0,0,1.059,0V.53A.53.53,0,0,0,.53,0Z"
                  transform="translate(9.054)"
                />
                <path
                  class="b"
                  d="M.99,0a.99.99,0,1,0,.99.99A.99.99,0,0,0,.99,0Z"
                  transform="translate(13.429 3.658)"
                />
                <path
                  class="d"
                  d="M.53,0A.53.53,0,0,0,0,.53V4.656a.53.53,0,1,0,1.059,0V.53A.53.53,0,0,0,.53,0Z"
                  transform="translate(13.887)"
                />
                <path
                  class="b"
                  d="M.99,0a.99.99,0,1,0,.99.99A.99.99,0,0,0,.99,0Z"
                  transform="translate(18.266 3.658)"
                />
                <path
                  class="d"
                  d="M.53,0A.53.53,0,0,0,0,.53V4.656a.53.53,0,1,0,1.059,0V.53A.53.53,0,0,0,.53,0Z"
                  transform="translate(18.719)"
                />
                <g transform="translate(4.932 11.692)">
                  <path
                    class="c"
                    d="M0,0H2.141V2.141H0Z"
                    transform="translate(3.998)"
                  />
                  <path
                    class="c"
                    d="M0,0H2.141V2.141H0Z"
                    transform="translate(7.996)"
                  />
                  <path
                    class="c"
                    d="M0,0H2.141V2.141H0Z"
                    transform="translate(11.994)"
                  />
                  <path
                    class="c"
                    d="M0,0H2.141V2.141H0Z"
                    transform="translate(0 3.356)"
                  />
                  <path
                    class="c"
                    d="M0,0H2.141V2.141H0Z"
                    transform="translate(3.998 3.356)"
                  />
                  <path
                    class="c"
                    d="M0,0H2.141V2.141H0Z"
                    transform="translate(7.996 3.356)"
                  />
                  <path
                    class="c"
                    d="M0,0H2.141V2.141H0Z"
                    transform="translate(11.994 3.356)"
                  />
                  <path
                    class="c"
                    d="M0,0H2.141V2.141H0Z"
                    transform="translate(0 6.713)"
                  />
                  <path
                    class="c"
                    d="M0,0H2.141V2.141H0Z"
                    transform="translate(3.998 6.713)"
                  />
                  <path
                    class="c"
                    d="M0,0H2.141V2.141H0Z"
                    transform="translate(7.996 6.713)"
                  />
                </g>
              </g>
            </g>
          </svg>
        </li>
      </ul>
    </div>
  );
}
export default User;
