import MobileHeader from "../../components/MobileHeader/MobileHeader";
import MobileFooter from "../../components/MobileFooter/MobileFooter";
import Header from "../../components/Header/Header";
import ProfileDesc from "../../components/ProfileDesc/ProfileDesc";
import ProfileFeed from "../../components/ProfileFeed/ProfileFeed";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./profile-page.scss"

function ProfilePage() {
  const userURL = `${process.env.REACT_APP_SERVER_URL}/users`;
  const [user, setUser] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${userURL}/${id}`)

      .then((resp) => {
        setUser(resp.data);
        axios.get(`${userURL}/${id}/posts`).then((resp) => {
          setUserPosts(resp.data);
        });
      })
      .catch(() => {
        console.error("Error getting User");
      });
  }, [id]);



  // prevents error when first rendering
  if (!user) {
    return "loading";
  }
  return (
    <>
      <MobileHeader />
      <Header />
      <div className="profile-page">
        <ProfileDesc user={user} />
        <ProfileFeed userPosts={userPosts} />
      </div>
      <MobileFooter />
    </>
  );
}

export default ProfilePage;
