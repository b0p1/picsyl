import "./mobile-footer.scss";
import addPostIcon from "../../assets/icons/circle-plus.svg";
import profileIcon from "../../assets/icons/user.svg";

function MobileFooter(props) {
  return (
    <div className="mobile-footer">
      <div className="mobile-footer__icon-container">
        <img className="mobile-footer__icon mobile-footer__icon-mid" src={addPostIcon} />
        <img className="mobile-footer__icon mobile-footer__icon-right" src={profileIcon} />
      </div>
      
    </div>
  );
}

export default MobileFooter;
