import "./feed-post.scss";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import emptyHeart from "../../assets/icons/empty-heart.svg";
import redHeart from "../../assets/icons/red-heart.svg";
import addComment from "../../assets/icons/comment.svg";
import FeedComments from "../FeedComments/FeedComments";
import DesktopAddComment from "../DesktopAddComment/DesktopAddComment";

function FeedPost() {
  const URL = `${process.env.REACT_APP_SERVER_URL}`;
  const [posts, setPosts] = useState([]);

  const { id } = useParams();

  const updateLikes = (post) => {
    const liked = post.likes.find((like) => like.user_id === 5);
    if (!liked) {
      axios.post(`${URL}/likes`, { user_id: 5, post_id: post.id }).then(() => {
        getPosts();
      });
    } else {
      axios
        .delete(`${URL}/likes`, { data: { user_id: 5, post_id: post.id } })
        .then(() => {
          getPosts();
        });
    }
  };

  const getPosts = () => {
    axios
      .get(`${URL}/posts`)
      .then((resp) => {
        setPosts(resp.data);
      })
      .catch(() => {
        console.error("Error");
      });
  };

  const likedPost = (post) => {
    return !!post.likes.find((like) => like.user_id === 5);
  };

  useEffect(() => {
    // Fetches all posts
    getPosts();
  }, [id]);

  // prevents error when first rendering
  if (!posts) {
    return "loading";
  }

  return (
    <div className="home-feed">
      {posts.map((post) => (
        <div className="home-feed__post" key={post.id}>
          <Link to={`/users/${post.user_id}`}>
            <div className="home-feed__post-details">
              <img
                className="home-feed__post__profile"
                src={`${URL}/images/${post.user_img}`}
                alt={`${post.username}'s profile picture`}
              />
              <h3 className="home-feed__post__username">{post.username} </h3>
            </div>
          </Link>

          <img
            className="home-feed__post__img"
            src={`${URL}/images/${post.img}`}
          />
          <div className="home-feed__post__actions-container">
            <div className="home-feed__post__actions">
              <Link to={`/posts/${post.id}`}>
                <img className="home-feed__post__comment" src={addComment} />
              </Link>
              {/* <Link to={`/posts/${post.id}`}> */}
              <div className="home-feed__post__like-container">
                <h3>{post.likes.length}</h3>

                <img
                  className="home-feed__post__like"
                  onClick={() => updateLikes(post)}
                  src={likedPost(post) ? redHeart : emptyHeart}
                />
              </div>
              {/* </Link> */}
            </div>

            <div className="home-feed__post__desc">
              <h4 className="home-feed__post__desc-username">
                {" "}
                {post.username}{" "}
                <span className="home-feed__post__desc-txt">{post.desc} </span>
              </h4>
            </div>
            <FeedComments post={post} />
            <DesktopAddComment post={post} getPosts={getPosts}/>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeedPost;
