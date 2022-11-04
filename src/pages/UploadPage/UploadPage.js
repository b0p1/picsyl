import "./upload-page.scss";
// import PublishIcon from "../../assets/icons/publish.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UploadPage(props) {
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        navigate("/");
        axios.post("http://localhost:8081/posts", {
          img: e.target.img.value,
          desc: e.target.desc.value,
        });
      }}
      className="upload-form"
    >
      <label className="upload-form__label" htmlFor="desc-box">
        Add An Image Description
      </label>
      <textarea
        name="desc"
        id="desc-box"
        className="upload-form__desc-box"
        autoComplete="off"
        placeholder="Add an image caption"
      ></textarea>
      <div className="upload-form-bottom-container">
        <Link to="/">
          <h2 className="upload-form__cancel">Cancel</h2>
        </Link>
        <div className="upload-form-button-container">
          <button type="submit" className="upload-form__button">
            Upload
          </button>

          <img
            className="upload-form__button-icon"
            //   src={PublishIcon}
            //   alt="Publish Icon"
          />
        </div>
      </div>
    </form>
  );
}

export default UploadPage;
