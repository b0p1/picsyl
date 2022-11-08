import "./feed-comments.scss";

function Comments({ post }) {
  console.log(post.comments);
  return (
    <div className="post-feed__comments">
      <h3 className="post-feed__comments__title">Comments: </h3>
      {post.comments.map((comment) => (
        <div className="post-feed__comments" key={comment.id}>
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

export default Comments;
