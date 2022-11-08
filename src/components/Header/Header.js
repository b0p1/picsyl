import "./header.scss";
import logo from "../../assets/logo/logo.svg";
import addPostIcon from "../../assets/icons/camera-plus.svg";
import profileIcon from "../../assets/icons/user.svg";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header">
      <div className="header__logo-container">
        <Link to="/">
          <img className="header__logo" src={logo} />
        </Link>
      </div>
      <div className="header__icon-container">
        <Link to="/upload">
          <img className="header__icon header__icon__add-post" src={addPostIcon} />
        </Link>
        <Link to={`/users/5`}>
          <img className="header__icon" src={profileIcon} />
        </Link>
      </div>
    </div>
  );
}

export default Header;
