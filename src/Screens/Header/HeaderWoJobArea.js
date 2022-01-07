import "./Header.scss";
import Logo from "./Logo";
import Menu from "./Menu";
import User from "./User";

function HeaderWoJobArea() {
  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
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
              <Menu></Menu>
              <User></User>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
export default HeaderWoJobArea;
