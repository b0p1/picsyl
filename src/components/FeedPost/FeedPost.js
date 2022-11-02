import "./feed-post.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

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
    <div className="home-feed" >
      {posts.map((item) => (
        <div className="home-feed__post" key={item.post_id}>
        
          <div className="home-feed__post-details">
            <img className="home-feed__post__profile" src={`http://localhost:8081/images/${item.user_img}`} />
            
          </div>
          <img
            className="home-feed__post__img"
            src={`http://localhost:8081/images/${item.post_img}`}
          />
          <p> {item.post_desc}</p>
        </div>
      ))}
    </div>
  );
}

export default FeedPost;
