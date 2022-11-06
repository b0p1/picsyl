import "./single-post-page.scss";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import emptyHeart from "../../assets/icons/empty-heart.svg";
import redHeart from "../../assets/icons/red-heart.svg";
import addComment from "../../assets/icons/comment.svg";
import MobileHeader from "../../components/MobileHeader/MobileHeader";
import MobileFooter from "../../components/MobileFooter/MobileFooter";
import Header from "../../components/Header/Header";

function SinglePostPage(props) {
  const URL = `${process.env.REACT_APP_SERVER_URL}`;
  const [post, setPost] = useState();

  const { id } = useParams();

  console.log(post);

  useEffect(() => {
    axios
      .get(`${URL}/posts/${id}`)
      .then((resp) => {
        setPost(resp.data);
      })
      .catch(() => {
        console.error("Error");
      });
  }, [id]);

  // prevents error when first rendering
  if (!post) {
    return "loading";
  }
  return (
    <>
      <MobileHeader />
      <Header />
      <div className="single-post" key={post.id}>
        <Link to={`/users/${post.user_id}`}>
          <div className="single-post-details">
            <img
              className="single-post__profile"
              src={`${process.env.REACT_APP_SERVER_URL}/images/${post.user_img}`}
              alt={`${post.username}'s profile picture`}
            />
            <h3 className="single-post__username">{post.username} </h3>
          </div>
        </Link>
        <img
          className="single-post__img"
          src={`${process.env.REACT_APP_SERVER_URL}/images/${post.img}`}
        />
        <div className="single-post__actions">
          <Link to={`/posts/${post.id}`}>
            <img className="single-post__comment" src={addComment} />
          </Link>
          <div className="single-post__like-container">
            <h3>{post.likes.length}</h3>
            <img className="single-post__like" src={emptyHeart} />
            <img className="single-post__like--clicked" src={redHeart} />
          </div>
        </div>
        <div className="single-post__desc">
          <h4 className="single-post__desc-username">
            {" "}
            {post.username}{" "}
            <span className="single-post__desc-txt">{post.desc} </span>
          </h4>
        </div>
        <h3 className="single-post__comments__title">Comments: </h3>
        {post.comments.map((comment) => (
          <div className="single-post__comments" key={comment.id}>
            <img className="single-post__comments__img" src={`${URL}/images/${comment.user_img}`}/>
            <h4 className="single-post__comments__txt">
              <span className="single-post__comments__username">{comment.username}: </span>
              {comment.text}
            </h4>
          </div>
        ))}
      </div>
      <MobileFooter />
    </>
  );
}

export default SinglePostPage;
