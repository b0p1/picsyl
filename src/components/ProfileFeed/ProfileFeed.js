import "./profile-feed.scss";
import emptyHeart from "../../assets/icons/empty-heart.svg";
import { Link } from "react-router-dom";

function ProfileFeed({ userPosts }) {
  if (!userPosts) {
    return "loading";
  }
  console.log(userPosts);
  return (
    <div className="profile-feed">
      {userPosts.map((item) => (
        <div className="profile-feed__post" key={item.id}>
          <Link to={`/posts/${item.id}`}>
            <img
              className="profile-feed__post"
              src={`${process.env.REACT_APP_SERVER_URL}/images/${item.img}`}
            />
          </Link>
          <div className="profile -feed__post__like-container">
            <h3>{item.likes.length}</h3>
            <img className="profile -feed__post__like" src={emptyHeart} />
          </div>
          <div className="profile -feed__post__desc">
            <h4 className="profile -feed__post__desc-username">
              {" "}
              {item.username}{" "}
              <span className="profile -feed__post__desc-txt">
                {item.desc}{" "}
              </span>
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProfileFeed;
