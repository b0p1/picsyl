import "./mobile-header.scss";
import logo from "../../assets/logo/logo.svg";
import { Link } from "react-router-dom";

function MobileHeader(props) {
  return (
    <div className="mobile-header">
      <Link to="/">
        <img className="header__logo" src={logo} />
      </Link>
    </div>
  );
}

export default MobileHeader;
