import "./upload-page.scss";
// import PublishIcon from "../../assets/icons/publish.svg";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import MobileHeader from "../../components/MobileHeader/MobileHeader";
import Header from "../../components/Header/Header";
import MobileFooter from "../../components/MobileFooter/MobileFooter";
import PublishIcon from "../../assets/icons/circle-plus.svg";

function UploadPage(props) {
  const navigate = useNavigate();
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("desc", desc);
    formData.append("file", file);
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/posts`, formData)
      .then((res) => {
        alert("File Upload success");
      })
      .catch((err) => alert("File Upload Error"));
  };

  return (
    <>
      <MobileHeader />
      <Header />
      <form
        onSubmit={(e) => {
          navigate("/");
          submitForm(e);
        }}
        className="upload-form"
      >
        <label htmlFor="file">Image file</label>
        <input
          className="upload-form__file"
          type="file"
          name="file"
          id="file"
          //   value=
          onChange={(e) => setFile(e.target.files[0])}
        />
        {/* <img
          className="upload-form__button-icon"
          src={PublishIcon}
          alt="Publish Icon"
        /> */}
        <label className="upload-form__label" htmlFor="desc-box">
          Add An Image Caption
        </label>
        <textarea
          name="desc"
          id="desc-box"
          className="upload-form__desc-box"
          autoComplete="off"
          placeholder="Image desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
        <div className="upload-form-container">
          <Link to="/">
            <h2 className="upload-form__cancel">Cancel</h2>
          </Link>
          <div className="upload-form-button-container">
            <button type="submit" className="upload-form__button">
              Upload
            </button>
          </div>
        </div>
      </form>
      <MobileFooter />
    </>
  );
}

export default UploadPage;
