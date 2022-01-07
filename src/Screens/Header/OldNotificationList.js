import SchlLogo from "../../images/school_logo.png";
require("dotenv").config();
const BASE_URL = process.env.REACT_APP_BASE_URL;

function OldNotificationList() {
  return (
    <>
      <div className="oldnotifidiv">
        <div className="dis_flex_no_space">
          <div className="image">
            <img src={BASE_URL + SchlLogo} alt="" />
          </div>
          <div className="text_area">
            <span className="title">Job Applied</span>
            <span className="time">15 Minute ago</span>
            <span className="msglist">
              You have applied for Chemistry Teacher in DPS School
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default OldNotificationList;
