import HomeMenu from "./HomeMenu";
import "./HeaderHome.scss";
import "../Home/HomeNew.scss";
import HomeSearch from "./HomeSearch";
function HeaderHome() {
  return (
    <header>
      <div className="homebg">
        <HomeMenu />
        <HomeSearch />
      </div>
    </header>
  );
}
export default HeaderHome;
