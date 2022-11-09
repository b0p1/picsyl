import "./single-post-header.scss";
import logo from "../../assets/logo/logo.svg";
import backArrow from "../../assets/icons/back-arrow.svg";
import { Link } from "react-router-dom";

function SinglePostHeader({ post }) {

  return (
    <div className="single-post-header">
      <Link to={`/users/${post.user_id}`}>
        <img className="single-post-header__back-arrow" src={backArrow} />
      </Link>
      <Link to="/">
        <img className="single-post-header__logo" src={logo} />
      </Link>
    </div>
  );
}

export default SinglePostHeader;
