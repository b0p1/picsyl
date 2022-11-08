import "./single-post-page.scss";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import emptyHeart from "../../assets/icons/empty-heart.svg";
import redHeart from "../../assets/icons/red-heart.svg";
import MobileFooter from "../../components/MobileFooter/MobileFooter";
import Header from "../../components/Header/Header";
import AddComment from "../../components/AddComment/AddComment";
import SinglePostHeader from "../../components/SinglePostHeader/SinglePostHeader";

function SinglePostPage(props) {
  const URL = `${process.env.REACT_APP_SERVER_URL}`;
  const [liked, setLiked] = useState(false);
  const [post, setPost] = useState();

  const updateLikes = () => {
    if (!liked) {
      axios.post(`${URL}/likes`, { user_id: 5, post_id: post.id }).then(() => {
        getPost();
      });
    } else {
      axios
        .delete(`${URL}/likes`, { data: { user_id: 5, post_id: post.id } })
        .then(() => {
          getPost();
        });
    }
  };

  const getPost = () => {
    axios
      // Fetches a single post
      .get(`${URL}/posts/${id}`)

      .then((resp) => {
        setPost(resp.data);
        const userLiked = resp.data.likes.find((like) => like.user_id === 5);
        setLiked(userLiked);
      })
      .catch(() => {
        console.error("Error");
      });
  };

  const { id } = useParams();

  useEffect(() => {
    getPost();
  }, [id]);

  // prevents error when first rendering
  if (!post) {
    return "loading";
  }
  return (
    <>
      <SinglePostHeader post={post} />
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
          <div className="single-post__like-container">
            <h3>{post.likes.length}</h3>
            <img
              onClick={updateLikes}
              src={liked ? redHeart : emptyHeart}
              className="single-post__like"
            />
          </div>
        </div>
        <div className="single-post__desc">
          <h4 className="single-post__desc-username">
            {" "}
            {post.username}{" "}
            <span className="single-post__desc-txt">{post.desc} </span>
          </h4>
        </div>

        {post.comments.map((comment) => (
          <div className="single-post__comments" key={comment.id}>
            <img
              className="single-post__comments__img"
              src={`${URL}/images/${comment.user_img}`}
            />
            <h4 className="single-post__comments__txt">
              <Link to={`../users/${comment.user_id}`}>
                <span className="single-post__comments__username">
                  {comment.username}:{" "}
                </span>
              </Link>

              {comment.text}
            </h4>
          </div>
        ))}
        <AddComment post={post} getPost={getPost}/>
      </div>
      <MobileFooter />
    </>
  );
}

export default SinglePostPage;
