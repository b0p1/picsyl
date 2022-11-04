import "./profile-desc.scss";

function ProfileDesc({ user }) {
//   console.log(user.img);
  if (!user|| !user.img || !user.desc || !user.name || !user.username) {
    return "loading";
  }
  return (
    <div className="profile-desc">
      <div className="profile-desc-top">
        <img className="profile-desc-top__img"
          src={`http://localhost:8081/images/${user.img} `}
          alt={`${user.username}'s profile picture`}
        />
        <h2>{user.username}</h2>
      </div>
      <div className="profile-desc-bottom">
        <h3 className="profile-desc-bottom__name">{user.name}</h3>
        <h4 className="profile-desc-bottom__desc">{user.desc}</h4>
      </div>
    </div>
  );
}

export default ProfileDesc;
