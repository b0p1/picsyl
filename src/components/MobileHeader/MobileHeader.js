import "./mobile-header.scss";
import logo from "../../assets/logo/logo.svg";

function MobileHeader(props) {
  return (
    <div className="mobile-header">
      <img className="mobile-header__logo" src={logo} />
    </div>
  );
}

export default MobileHeader;
