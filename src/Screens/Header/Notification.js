import "./Notification.scss";
import NewNotificationList from "./NewNotificationList";
import OldNotificationList from "./OldNotificationList";
import Events from "../../images/events.svg";
import SmlSchl from "../../images/school_sml.png";
require("dotenv").config();
const BASE_URL = process.env.REACT_APP_BASE_URL;

function Notification() {
  const Notifi = () => {
    const NotifiDiv = document.querySelector(".notifi_div");
    const NotifiBtn = document.querySelector(".notfibutton");
    if (
      NotifiDiv.style.display === "block" &&
      NotifiBtn.style.left === "-58px"
    ) {
      NotifiDiv.style.display = "none";
      NotifiBtn.style.left = "unset";
      NotifiBtn.style.right = "0";
    } else {
      NotifiDiv.style.display = "block";
      NotifiBtn.style.left = "-58px";
      NotifiBtn.style.right = "0";
    }
  };
  return (
    <div className="notifi_div_area">
      <div className="notfibutton px-3 py-3 whitebg" onClick={Notifi}>
        <svg
          className="notifi me-2"
          xmlns="http://www.w3.org/2000/svg"
          width="18.011"
          height="21.921"
          viewBox="0 0 18.011 21.921"
        >
          <defs></defs>
          <g transform="translate(0 -2.079)">
            <path
              class="a"
              d="M5.492,2.736A2.746,2.746,0,1,0,2.746,5.473,2.741,2.741,0,0,0,5.492,2.736Z"
              transform="translate(6.259 18.527)"
            />
            <path
              class="b"
              d="M.8,0A2.752,2.752,0,0,0,0,.118,2.738,2.738,0,0,1,1.948,2.736,2.738,2.738,0,0,1,0,5.355,2.738,2.738,0,1,0,.8,0Z"
              transform="translate(8.207 18.527)"
            />
            <path
              class="a"
              d="M1.95,3.214A1.623,1.623,0,1,1,3.226,1.3,1.629,1.629,0,0,1,1.95,3.214Z"
              transform="translate(7.377 2.079)"
            />
            <path
              class="b"
              d="M2.155,1.3A1.629,1.629,0,0,0,.238.032,1.667,1.667,0,0,0,0,.1,1.624,1.624,0,0,1,1.038,1.3,1.622,1.622,0,0,1,0,3.148a1.627,1.627,0,0,0,.879.066A1.623,1.623,0,0,0,2.155,1.3Z"
              transform="translate(8.447 2.079)"
            />
            <path
              class="a"
              d="M15.807,16.08H2.2A2.2,2.2,0,0,1,.829,12.155l.437-.351a4.273,4.273,0,0,0,1.6-3.331V6.165a6.187,6.187,0,0,1,12.375,0V8.516A4.273,4.273,0,0,0,16.784,11.8l.426.353a2.217,2.217,0,0,1,.8,1.705v.022a2.2,2.2,0,0,1-2.2,2.2Z"
              transform="translate(0 4.726)"
            />
            <path
              class="b"
              d="M9.9,12.156,9.475,11.8A4.274,4.274,0,0,1,7.931,8.516V6.165A6.193,6.193,0,0,0,0,.249,6.171,6.171,0,0,1,4.444,6.165V8.516A4.274,4.274,0,0,0,5.989,11.8l.426.353a2.218,2.218,0,0,1,.8,1.705v.022a2.2,2.2,0,0,1-2.2,2.2H8.5a2.2,2.2,0,0,0,2.2-2.2v-.022A2.217,2.217,0,0,0,9.9,12.156Z"
              transform="translate(7.309 4.726)"
            />
          </g>
        </svg>
      </div>
      <div className="notifi_div">
        <div className="whitebg">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                <span>
                  <svg
                    className="notifi me-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18.011"
                    height="21.921"
                    viewBox="0 0 18.011 21.921"
                  >
                    <defs></defs>
                    <g transform="translate(0 -2.079)">
                      <path
                        class="a"
                        d="M5.492,2.736A2.746,2.746,0,1,0,2.746,5.473,2.741,2.741,0,0,0,5.492,2.736Z"
                        transform="translate(6.259 18.527)"
                      />
                      <path
                        class="b"
                        d="M.8,0A2.752,2.752,0,0,0,0,.118,2.738,2.738,0,0,1,1.948,2.736,2.738,2.738,0,0,1,0,5.355,2.738,2.738,0,1,0,.8,0Z"
                        transform="translate(8.207 18.527)"
                      />
                      <path
                        class="a"
                        d="M1.95,3.214A1.623,1.623,0,1,1,3.226,1.3,1.629,1.629,0,0,1,1.95,3.214Z"
                        transform="translate(7.377 2.079)"
                      />
                      <path
                        class="b"
                        d="M2.155,1.3A1.629,1.629,0,0,0,.238.032,1.667,1.667,0,0,0,0,.1,1.624,1.624,0,0,1,1.038,1.3,1.622,1.622,0,0,1,0,3.148a1.627,1.627,0,0,0,.879.066A1.623,1.623,0,0,0,2.155,1.3Z"
                        transform="translate(8.447 2.079)"
                      />
                      <path
                        class="a"
                        d="M15.807,16.08H2.2A2.2,2.2,0,0,1,.829,12.155l.437-.351a4.273,4.273,0,0,0,1.6-3.331V6.165a6.187,6.187,0,0,1,12.375,0V8.516A4.273,4.273,0,0,0,16.784,11.8l.426.353a2.217,2.217,0,0,1,.8,1.705v.022a2.2,2.2,0,0,1-2.2,2.2Z"
                        transform="translate(0 4.726)"
                      />
                      <path
                        class="b"
                        d="M9.9,12.156,9.475,11.8A4.274,4.274,0,0,1,7.931,8.516V6.165A6.193,6.193,0,0,0,0,.249,6.171,6.171,0,0,1,4.444,6.165V8.516A4.274,4.274,0,0,0,5.989,11.8l.426.353a2.218,2.218,0,0,1,.8,1.705v.022a2.2,2.2,0,0,1-2.2,2.2H8.5a2.2,2.2,0,0,0,2.2-2.2v-.022A2.217,2.217,0,0,0,9.9,12.156Z"
                        transform="translate(7.309 4.726)"
                      />
                    </g>
                  </svg>
                  Notifications
                </span>
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="calendar-tab"
                data-bs-toggle="tab"
                data-bs-target="#calendar"
                type="button"
                role="tab"
                aria-controls="calendar"
                aria-selected="false"
              >
                <span>
                  <svg
                    className="calendar me-2"
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
                  Calendar
                </span>
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="srchbox">
                <span className="srch">
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
                <input type="text" placeholder="Search" />
              </div>
              <div className="filter dis_flex_no_space">
                <div>
                  <button
                    data-bs-target="#notifi_filter_div"
                    data-bs-toggle="modal"
                    className="transaparent_btn nobrder filter_btn"
                  >
                    <svg
                      className="filter_icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <defs></defs>
                      <g transform="translate(0 -0.355)">
                        <rect
                          class="a"
                          width="24"
                          height="24"
                          transform="translate(0 0.355)"
                        />
                        <g transform="translate(1.801 3.607)">
                          <path
                            class="b"
                            d="M0,3.444A3.444,3.444,0,1,1,3.444,6.888,3.444,3.444,0,0,1,0,3.444ZM12.054,5.165a1.722,1.722,0,1,1,0-3.444h6.888a1.722,1.722,0,0,1,0,3.444Z"
                          />
                          <path
                            class="b"
                            d="M13.776,3.444A3.444,3.444,0,1,1,17.22,6.888,3.444,3.444,0,0,1,13.776,3.444ZM1.723,5.165a1.722,1.722,0,1,1,0-3.444H8.61a1.722,1.722,0,0,1,0,3.444Z"
                            transform="translate(0 10.332)"
                          />
                        </g>
                      </g>
                    </svg>
                    <div className="filter_num">
                      <span className="num">4</span>
                    </div>
                  </button>
                </div>
                <div className="margin_auto_right">
                  <span className="font14 blcktxtclr">
                    Show Only Important
                    <label className="switch mt-1 ms-1">
                      <input type="checkbox" />
                      <span className="slider round"></span>
                    </label>
                  </span>
                </div>
              </div>
              <div className="panel">
                <div className="new_notifi">
                  <span className="bold block pt-2 pb-3">New</span>
                  <NewNotificationList />
                  <OldNotificationList />
                </div>
                <div className="early_notifi">
                  <span className="bold block pt-2 pb-3">Earlier</span>
                  <OldNotificationList />
                  <OldNotificationList />
                  <OldNotificationList />
                  <OldNotificationList />
                  <OldNotificationList />
                  <OldNotificationList />
                  <OldNotificationList />
                  <OldNotificationList />
                  <OldNotificationList />
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="calendar"
              role="tabpanel"
              aria-labelledby="calendar-tab"
            >
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="day-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#day"
                    type="button"
                    role="tab"
                    aria-controls="day"
                    aria-selected="true"
                  >
                    Day
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="week-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#week"
                    type="button"
                    role="tab"
                    aria-controls="week"
                    aria-selected="false"
                  >
                    Week
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="month-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#month"
                    type="button"
                    role="tab"
                    aria-controls="month"
                    aria-selected="false"
                  >
                    Month
                  </button>
                </li>
              </ul>
              <div class="tab-content" id="CalendarContent">
                <div
                  class="tab-pane fade show active"
                  id="day"
                  role="tabpanel"
                  aria-labelledby="day-tab"
                >
                  {/* No Events Div */}
                  {/* <div className="emptyday">
                    <img src={BASE_URL + Events} alt="" />
                    <span className="block bold mb-5 mt-3">No Events</span>
                  </div> */}

                  {/* Events Div */}
                  <div className="daylist">
                    <div className="daydiv dis_flex_no_space">
                      <div>
                        <span className="date">17, Tue, June</span>
                        <span className="year">2020</span>
                      </div>
                      <div className="arrow_div d-flex margin_auto_right">
                        <button className="triangle-left me-2"></button>
                        <button className="triangle-right"></button>
                      </div>
                    </div>

                    {/* Calendar Show */}
                    <div className="calendar_div_area"></div>

                    <div className="schedulediv">
                      <span className="title">Today's Schedule</span>
                      <div className="blueschedulediv">
                        <div className="d-flex">
                          <div className="time">
                            <span>10:00</span>
                            <span>Am</span>
                          </div>
                          <div className="roundsdiv">
                            <span className="title">Interview Rounds</span>
                            <span className="subtext">MCQ, Face to Face</span>
                            <span className="subtext">
                              Primary Chemistry Teacher
                            </span>
                            <div className="dis_flex_no_space">
                              <img src={BASE_URL + SmlSchl} alt="" />
                              <span>
                                DPS School, <span>New Town, Kolkata</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="yellschedulediv">
                        <div className="d-flex">
                          <div className="time">
                            <span>02:00</span>
                            <span>Pm</span>
                          </div>
                          <div className="roundsdiv">
                            <span className="title">Interview Rounds</span>
                            <span className="subtext">MCQ, Face to Face</span>
                            <span className="subtext">
                              Primary Chemistry Teacher
                            </span>
                            <div className="dis_flex_no_space">
                              <img src={BASE_URL + SmlSchl} alt="" />
                              <span>
                                DPS School, <span>New Town, Kolkata</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="blueschedulediv">
                        <div className="d-flex">
                          <div className="time">
                            <span>10:00</span>
                            <span>Am</span>
                          </div>
                          <div className="roundsdiv">
                            <span className="title">Interview Rounds</span>
                            <span className="subtext">MCQ, Face to Face</span>
                            <span className="subtext">
                              Primary Chemistry Teacher
                            </span>
                            <div className="dis_flex_no_space">
                              <img src={BASE_URL + SmlSchl} alt="" />
                              <span>
                                DPS School, <span>New Town, Kolkata</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="blueschedulediv">
                        <div className="d-flex">
                          <div className="time">
                            <span>10:00</span>
                            <span>Am</span>
                          </div>
                          <div className="roundsdiv">
                            <span className="title">Interview Rounds</span>
                            <span className="subtext">MCQ, Face to Face</span>
                            <span className="subtext">
                              Primary Chemistry Teacher
                            </span>
                            <div className="dis_flex_no_space">
                              <img src={BASE_URL + SmlSchl} alt="" />
                              <span>
                                DPS School, <span>New Town, Kolkata</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="week"
                  role="tabpanel"
                  aria-labelledby="week-tab"
                >
                  {/* No Events Div */}
                  {/* <div className="emptyday">
                    <img src={BASE_URL + Events} alt="" />
                    <span className="block bold mb-5 mt-3">No Events</span>
                  </div> */}

                  {/* Events Div */}
                  <div className="daylist">
                    <div className="daydiv dis_flex_no_space">
                      <div>
                        <span className="date">17, Tue, June</span>
                        <span className="year">2020</span>
                      </div>
                      <div className="arrow_div d-flex margin_auto_right">
                        <button className="triangle-left me-2"></button>
                        <button className="triangle-right"></button>
                      </div>
                    </div>

                    {/* Calendar Show */}
                    <div className="calendar_div_area"></div>

                    <div className="schedulediv">
                      <span className="title">Today's Schedule</span>
                      <div className="blueschedulediv">
                        <div className="d-flex">
                          <div className="time">
                            <span>10:00</span>
                            <span>Am</span>
                          </div>
                          <div className="roundsdiv">
                            <span className="title">Interview Rounds</span>
                            <span className="subtext">MCQ, Face to Face</span>
                            <span className="subtext">
                              Primary Chemistry Teacher
                            </span>
                            <div className="dis_flex_no_space">
                              <img src={BASE_URL + SmlSchl} alt="" />
                              <span>
                                DPS School, <span>New Town, Kolkata</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="yellschedulediv">
                        <div className="d-flex">
                          <div className="time">
                            <span>02:00</span>
                            <span>Pm</span>
                          </div>
                          <div className="roundsdiv">
                            <span className="title">Interview Rounds</span>
                            <span className="subtext">MCQ, Face to Face</span>
                            <span className="subtext">
                              Primary Chemistry Teacher
                            </span>
                            <div className="dis_flex_no_space">
                              <img src={BASE_URL + SmlSchl} alt="" />
                              <span>
                                DPS School, <span>New Town, Kolkata</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="blueschedulediv">
                        <div className="d-flex">
                          <div className="time">
                            <span>10:00</span>
                            <span>Am</span>
                          </div>
                          <div className="roundsdiv">
                            <span className="title">Interview Rounds</span>
                            <span className="subtext">MCQ, Face to Face</span>
                            <span className="subtext">
                              Primary Chemistry Teacher
                            </span>
                            <div className="dis_flex_no_space">
                              <img src={BASE_URL + SmlSchl} alt="" />
                              <span>
                                DPS School, <span>New Town, Kolkata</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="blueschedulediv">
                        <div className="d-flex">
                          <div className="time">
                            <span>10:00</span>
                            <span>Am</span>
                          </div>
                          <div className="roundsdiv">
                            <span className="title">Interview Rounds</span>
                            <span className="subtext">MCQ, Face to Face</span>
                            <span className="subtext">
                              Primary Chemistry Teacher
                            </span>
                            <div className="dis_flex_no_space">
                              <img src={BASE_URL + SmlSchl} alt="" />
                              <span>
                                DPS School, <span>New Town, Kolkata</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="month"
                  role="tabpanel"
                  aria-labelledby="month-tab"
                >
                  {/* No Events Div */}
                  {/* <div className="emptyday">
                    <img src={BASE_URL + Events} alt="" />
                    <span className="block bold mb-5 mt-3">No Events</span>
                  </div> */}

                  {/* Events Div */}
                  <div className="daylist">
                    <div className="daydiv dis_flex_no_space">
                      <div>
                        <span className="date">17, Tue, June</span>
                        <span className="year">2020</span>
                      </div>
                      <div className="arrow_div d-flex margin_auto_right">
                        <button className="triangle-left me-2"></button>
                        <button className="triangle-right"></button>
                      </div>
                    </div>

                    {/* Calendar Show */}
                    <div className="calendar_div_area"></div>

                    <div className="schedulediv">
                      <span className="title">Today's Schedule</span>
                      <div className="blueschedulediv">
                        <div className="d-flex">
                          <div className="time">
                            <span>10:00</span>
                            <span>Am</span>
                          </div>
                          <div className="roundsdiv">
                            <span className="title">Interview Rounds</span>
                            <span className="subtext">MCQ, Face to Face</span>
                            <span className="subtext">
                              Primary Chemistry Teacher
                            </span>
                            <div className="dis_flex_no_space">
                              <img src={BASE_URL + SmlSchl} alt="" />
                              <span>
                                DPS School, <span>New Town, Kolkata</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="yellschedulediv">
                        <div className="d-flex">
                          <div className="time">
                            <span>02:00</span>
                            <span>Pm</span>
                          </div>
                          <div className="roundsdiv">
                            <span className="title">Interview Rounds</span>
                            <span className="subtext">MCQ, Face to Face</span>
                            <span className="subtext">
                              Primary Chemistry Teacher
                            </span>
                            <div className="dis_flex_no_space">
                              <img src={BASE_URL + SmlSchl} alt="" />
                              <span>
                                DPS School, <span>New Town, Kolkata</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="blueschedulediv">
                        <div className="d-flex">
                          <div className="time">
                            <span>10:00</span>
                            <span>Am</span>
                          </div>
                          <div className="roundsdiv">
                            <span className="title">Interview Rounds</span>
                            <span className="subtext">MCQ, Face to Face</span>
                            <span className="subtext">
                              Primary Chemistry Teacher
                            </span>
                            <div className="dis_flex_no_space">
                              <img src={BASE_URL + SmlSchl} alt="" />
                              <span>
                                DPS School, <span>New Town, Kolkata</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="blueschedulediv">
                        <div className="d-flex">
                          <div className="time">
                            <span>10:00</span>
                            <span>Am</span>
                          </div>
                          <div className="roundsdiv">
                            <span className="title">Interview Rounds</span>
                            <span className="subtext">MCQ, Face to Face</span>
                            <span className="subtext">
                              Primary Chemistry Teacher
                            </span>
                            <div className="dis_flex_no_space">
                              <img src={BASE_URL + SmlSchl} alt="" />
                              <span>
                                DPS School, <span>New Town, Kolkata</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Notification;
