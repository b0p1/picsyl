import "./desktop-add-comment.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import addComment from "../../assets/icons/comment.svg";

function AddComment({ post, getPosts }) {
  const navigate = useNavigate();
  const [comments, setComments] = useState(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/comments`).then((resp) => {
      setComments(resp.data);
    });
  }, []);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(post);
          axios
            .post(`${process.env.REACT_APP_SERVER_URL}/comments`, {
              text: e.target.text.value,
              user_id: 5,
              post_id: post.id,
            })
            .then(()=>{
              getPosts()
            })

            .catch((e) => {
              console.log(e);
            });
        }}
      >
        <div className="desktop-add-comment">
          <input
            className="desktop-add-comment__input"
            type="text"
            id="text"
            name="text"
            autoComplete="off"
            placeholder="Add a comment..."
          ></input>

          <button className="desktop-add-comment__submit">
            <img className="desktop-add-comment__submit__img" src={addComment} />
          </button>
        </div>
      </form>
    </>
  );
}

export default AddComment;
