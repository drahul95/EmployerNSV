import NoPageImg from "../../images/nopagebg.svg";
import "./NotFoundPage.scss";
import { useNavigate } from 'react-router-dom';
require("dotenv").config();
const BASE_URL = process.env.REACT_APP_BASE_URL;

function NotFoundPage() {
  let history = useNavigate();

  return (
    <div className="container">
      <div className="widthwrapper">
        <div className="notpagediv">
          <img src={BASE_URL + NoPageImg} alt="" />
          <div className="text_cont">
            <span className="title">404</span>
            <span className="subtext">Sorry Page Not Found !</span>
            <button onClick={()=> history.push("/")}>Back To Home</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NotFoundPage;
