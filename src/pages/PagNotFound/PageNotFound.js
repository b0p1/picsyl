import "./page-not-found.scss";
import Header from "../../components/Header/Header";
import MobileFooter from "../../components/MobileFooter/MobileFooter";
import MobileHeader from "../../components/MobileHeader/MobileHeader";
import { Link } from "react-router-dom";

function PageNotFound(props) {
  return (
    <>
      <Header />
      <MobileHeader />
      <div className="page-not-found">
        <h1>Error 404</h1>
        <h2>Page not found</h2>
        <h2>
          Go back to{" "}
          <Link className="home-link" to="/">
            HOME
          </Link>
        </h2>
      </div>
      <MobileFooter />
    </>
  );
}

export default PageNotFound;
