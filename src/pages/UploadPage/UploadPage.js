import "./upload-page.scss";
// import PublishIcon from "../../assets/icons/publish.svg";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import MobileHeader from "../../components/MobileHeader/MobileHeader";
import Header from "../../components/Header/Header";
import MobileFooter from "../../components/MobileFooter/MobileFooter";
import PublishIcon from "../../assets/icons/circle-plus.svg";

function UploadPage(props) {
  const navigate = useNavigate();
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState("");
  const URL = `${process.env.REACT_APP_SERVER_URL}`

  const submitForm = (e) => {
    e.preventDefault();
    navigate("/");
    const formData = new FormData();
    formData.append("desc", desc);
    formData.append("file", file);
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/posts`, formData, {
        user_id: 5,
      })
      .then(() => {
        // refreshes page so most recent post is on top of feed
        setTimeout(() => {
          window.location.reload(false);
        }, 0.01);
      })
      .catch((err) => alert("File Upload Error"));
  };
  console.log(file);

  return (
    <>
      <MobileHeader />
      <Header />
      <form
        onSubmit={(e) => {
          submitForm(e);
        }}
        className="upload-form"
      >
        <div className="upload-form-top">
          <div className="upload-form__choose-file">
            <img src={``} />
            <img
              className="upload-form__file-icon"
              src={PublishIcon}
              alt="Publish Icon"
            />
            Choose an Image
            <input
              className="upload-form__file"
              type="file"
              name="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <h3 className="upload-form__file-name__title">
            File: <span className="upload-form__file-name">{file.name}</span>{" "}
          </h3>
        </div>
        <div className="upload-form-bottom">
          <label className="upload-form__label" htmlFor="desc-box">
            Add An Image Caption
          </label>
          <textarea
            name="desc"
            id="desc-box"
            className="upload-form__desc-box"
            autoComplete="off"
            placeholder="Please add an image description..."
            value={desc}
            rows="3"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <div className="upload-form__submit-container">
            <Link to="/">
              <button className="upload-form__cancel">Cancel</button>
            </Link>
            <div className="upload-form-button-container">
              <button type="submit" className="upload-form__button">
                Upload
              </button>
            </div>
          </div>
        </div>
      </form>
      <MobileFooter />
    </>
  );
}

export default UploadPage;
