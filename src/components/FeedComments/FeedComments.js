import "./feed-comments.scss";

function FeedComments({ post }) {
  const URL = `${process.env.REACT_APP_SERVER_URL}`;
  
  return (
    <div className="post-feed__comments">
   
      {post.comments.map((comment) => (
        <div className="post-feed__comments__single" key={comment.id}>
          <img
            className="post-feed__comments__img"
            src={`${URL}/images/${comment.user_img}`}
          />
          <h4 className="post-feed__comments__txt">
            <span className="post-feed__comments__username">
              {comment.username}:{" "}
            </span>
            {comment.text}
          </h4>
        </div>
      ))}
    </div>
  );
}

export default FeedComments;
