import "./feed-post.scss";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import emptyHeart from "../../assets/icons/empty-heart.svg";
import redHeart from "../../assets/icons/red-heart.svg";
import addComment from "../../assets/icons/comment.svg";

function FeedPost(props) {
  const URL = `${process.env.REACT_APP_SERVER_URL}/posts`;
  const [posts, setPosts] = useState([]);

  const { id } = useParams();

  // console.log(posts);

  useEffect(() => {
    axios
      .get(`${URL}`)
      .then((resp) => {
        setPosts(resp.data);
      })
      .catch(() => {
        console.error("Error");
      });
  }, [id]);

  // prevents error when first rendering
  if (!posts) {
    return "loading";
  }
  return (
    <div className="home-feed">
      {posts.map((item) => (
        <div className="home-feed__post" key={item.id}>
          <Link to={`/users/${item.user_id}`}>
            <div className="home-feed__post-details">
              <img
                className="home-feed__post__profile"
                src={`${process.env.REACT_APP_SERVER_URL}/images/${item.user_img}`}
                alt={`${item.username}'s profile picture`}
              />
              <h3 className="home-feed__post__username">{item.username} </h3>
            </div>
          </Link>

          <img
            className="home-feed__post__img"
            src={`${process.env.REACT_APP_SERVER_URL}/images/${item.img}`}
          />
          <div className="home-feed__post__actions">
            <Link to={`/posts/${item.id}`}>
              <img className="home-feed__post__comment" src={addComment} />
            </Link>
            <div className="home-feed__post__like-container">
              <h3>{item.likes.length}</h3>
              <img className="home-feed__post__like" src={emptyHeart} />
              <img className="home-feed__post__like--clicked" src={redHeart} />
            </div>
          </div>

          <div className="home-feed__post__desc">
            <h4 className="home-feed__post__desc-username">
              {" "}
              {item.username}{" "}
              <span className="home-feed__post__desc-txt">{item.desc} </span>
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeedPost;
