import FooterLogo from "../Footer/FooterLogo.js";
import MenuHome from "./MenuHome";
import UserLoginBtn from "./UserLoginBtn";
import "./HeaderHome.scss";
import JobSearchHome from "./JobSearchHome.js";
import SignIn from "../Login/SignIn.js";
import SignUp from "../Login/SignUp.js";
import { useLocation } from "react-router-dom";

function HeaderHome(props) {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return (
    <header className="headerForHome">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid px-0">
            <a className="navbar-brand" href="#">
              <FooterLogo customclass="footerbrandlogo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <MenuHome></MenuHome>
              <UserLoginBtn></UserLoginBtn>
            </div>
          </div>
        </nav>
      </div>
      <div className="container py-5">
        {splitLocation[1] === "usersignin" ? (
          <SignIn></SignIn>
        ) : splitLocation[1] === "usersignup" ? (
          <SignUp></SignUp>
        ) : (
          <JobSearchHome></JobSearchHome>
        )}
      </div>
    </header>
  );
}
export default HeaderHome;
