import Logo from "./Logo";
import MenuHome from "../Header/MenuHome";
import UserLoginBtn from "../Header/UserLoginBtn";
function HomeMenu() {
  return (
    <div className="darkbluebg">
      <div className="container">
        <nav className="navbar navbar-expand-xl navbar-light">
          <div className="container-fluid px-0">
            <a className="navbar-brand" href="#">
              <Logo customclass="brandlogo" />
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
    </div>
  );
}
export default HomeMenu;
