import Logo from "./Logo";
import MenuHome from "./MenuHome";
import UserLoginBtn from "./UserLoginBtn";
import "./Header.scss";
import HeaderHome from "./HeaderHome";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Header(props) {
  const { token, setToken, removeToken, loginMutate } = props;

  //const {token,setToken,removeToken} = useToken()
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  useEffect(() => {
    console.log(loginMutate);
  }, [loginMutate]);

  if (
    splitLocation[1] === "" ||
    splitLocation[1] === "usersignin" ||
    splitLocation[1] === "usersignup"
  )
    return <HeaderHome />;
  return (
    <header className="innerHeader">
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
              <MenuHome />
              <UserLoginBtn
                loginMutate={loginMutate}
                token={token}
                setToken={setToken}
                removeToken={removeToken}
              />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
export default Header;
