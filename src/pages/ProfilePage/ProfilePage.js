import MobileHeader from "../../components/MobileHeader/MobileHeader";
import MobileFooter from "../../components/MobileFooter/MobileFooter";
import Header from "../../components/Header/Header";
import ProfileDesc from "../../components/ProfileDesc/ProfileDesc";
import ProfileFeed from "../../components/ProfileFeed/ProfileFeed";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ProfilePage() {
  const userURL = "http://localhost:8081/users";
  const [user, setUser] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${userURL}`)
      .then((resp) => {
        setUser(resp.data);
        const userId = user.id || resp.data[0].id ;
        // console.log(userId);
        return axios.get(`${userURL}/${userId}`);
      })
      .then((resp) => {
        setUser(resp.data);
      })
      .catch(() => {
        console.error("Error getting User");
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(`${userURL}`)
      .then((resp) => {
        setUserPosts(resp.data);
        const userId = userPosts.user_id || resp.data[0].id;
        return axios.get(`${userURL}/${userId}/posts`);
      })
      .then((resp) => {
        setUserPosts(resp.data);
      })
      .catch(() => {
        console.error("Error getting Users user");
      });
  }, [id]);

//   console.log(user);

  // prevents error when first rendering
  if (!user) {
    return "loading";
  }
  return (
    <div className="profile-page">
      <MobileHeader />
      <Header />
      <ProfileDesc user={user} />
      <ProfileFeed userPosts={userPosts}/>
      <MobileFooter />
    </div>
  );
}

export default ProfilePage;
