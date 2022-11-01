import "./header.scss";
import logo from "../../assets/logo/logo.svg";
import addPostIcon from "../../assets/icons/circle-plus.svg";
import profileIcon from "../../assets/icons/user.svg";

function Header(props) {
  return (
    <div className="header">
      <div className="header__logo-container">
        <img className="header__logo" src={logo} />
      </div>
      <div className="header__icon-container" >
        <img className="header__icon" src={addPostIcon} />
        <img className="header__icon" src={profileIcon} />
      </div>
    </div>
  );
}

export default Header;
