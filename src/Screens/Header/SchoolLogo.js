import School1 from "../../images/school_1.png";
import School2 from "../../images/school_2.png";
import School3 from "../../images/school_3.png";
require("dotenv").config();
const BASE_URL = process.env.REACT_APP_BASE_URL;
function SchoolLogo() {
  return (
    <div className="schoollogo mb-5">
      <h4 className="font16 blcktxtclr pt-2 pb-5">
        Find jobs, create trackable resumes and upgrade your application
      </h4>
      <ul className="pb-5 dis_flex">
        <li>
          <img src={BASE_URL + School1} alt="The Doon School" />
        </li>
        <li>
          <img src={BASE_URL + School2} alt="The Schindia School" />
        </li>
        <li>
          <img src={BASE_URL + School3} alt="Guru Nanak" />
        </li>
        <li>
          <img src={BASE_URL + School1} alt="The Doon School" />
        </li>
        <li>
          <img src={BASE_URL + School2} alt="The Schindia School" />
        </li>
      </ul>
    </div>
  );
}
export default SchoolLogo;
