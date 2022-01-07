import FindJobArea from "./FindJobArea";
import SchoolLogo from "./SchoolLogo.js";

function JobSearchHome() {
  return (
    <div className="jobsearch">
      <div className="row py-5">
        <FindJobArea
          customcolorh1="fndh1 bold"
          customcolorspan="fndspan"
          isHomePage="isHomePage"
        ></FindJobArea>
      </div>
      <div className="row py-5">
        <SchoolLogo></SchoolLogo>
      </div>
    </div>
  );
}
export default JobSearchHome;
