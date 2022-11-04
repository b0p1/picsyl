import "./mobile-footer.scss";
import addPostIcon from "../../assets/icons/circle-plus.svg";
import profileIcon from "../../assets/icons/user.svg";
import { Link } from "react-router-dom"

function MobileFooter(props) {
  return (
    <div className="mobile-footer">
      <div className="mobile-footer__icon-container">
        <Link to="/upload">
        <img className="mobile-footer__icon mobile-footer__icon-mid" src={addPostIcon} />

        </Link>
        <img className="mobile-footer__icon mobile-footer__icon-right" src={profileIcon} />
      </div>
      
    </div>
  );
}

export default MobileFooter;
