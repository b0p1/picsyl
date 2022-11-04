import "./styles/global.scss"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeFeedPage from "./pages/HomeFeedPage/HomeFeedPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import UploadPage from "./pages/UploadPage/UploadPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeFeedPage />} />
          <Route path="/users/:id" element={<ProfilePage />} />
          <Route path="/upload" element={<UploadPage />} />
          {/* <Route path="*" element={<NotFoundPage/>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
