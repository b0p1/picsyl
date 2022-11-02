import "./feed-post.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import emptyHeart from "../../assets/icons/empty-heart.svg";

function FeedPost(props) {
  const URL = "http://localhost:8081/posts";
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelected] = useState(null);

  const { id } = useParams();

  //   console.log(selectedPost);

  useEffect(() => {
    axios
      .get(`${URL}`)
      .then((resp) => {
        setPosts(resp.data);
        // const postId = id || resp.data[0].id;
        // return axios.get(`${URL}/${postId}`);
      })
      //   .then((resp) => {
      //     setSelected(resp.data);
      //   })
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
        <div className="home-feed__post" key={item.post_id}>
          <div className="home-feed__post-details">
            <img
              className="home-feed__post__profile"
              src={`http://localhost:8081/images/${item.user_img}`}
            />
            <h3 className="home-feed__post__username">{item.user_name} </h3>
          </div>
          <img
            className="home-feed__post__img"
            src={`http://localhost:8081/images/${item.post_img}`}
          />
          <div className="home-feed__post__like-container">
            {/* <h3>{item.likes.like_num}</h3> */}
            <img className="home-feed__post__like" src={emptyHeart} />
          </div>

          <div className="home-feed__post__desc">
            <h4 className="home-feed__post__desc-username">
              {" "}
              {item.user_name}{" "}
              <span className="home-feed__post__desc-txt">
                {item.post_desc}{" "}
              </span>
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeedPost;
