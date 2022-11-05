import "./mobile-footer.scss";
import homeIcon from "../../assets/icons/home.svg";
import addPostIcon from "../../assets/icons/camera-plus.svg";
import profileIcon from "../../assets/icons/user.svg";
import { Link } from "react-router-dom";

function MobileFooter(props) {
  return (
    <div className="mobile-footer">
      <div className="mobile-footer__icon-container">
        <Link to="/">
          <img
            className="mobile-footer__icon mobile-footer__icon-left"
            src={homeIcon}
          />
        </Link>
        <Link to="/upload">
          <img
            className="mobile-footer__icon mobile-footer__icon-mid"
            src={addPostIcon}
          />
        </Link>
        <Link to="/users/5">
          <img
            className="mobile-footer__icon mobile-footer__icon-right"
            src={profileIcon}
          />
        </Link>
      </div>
    </div>
  );
}

export default MobileFooter;
