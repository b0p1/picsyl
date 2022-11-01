import "./styles/global.scss"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeFeedPage from "./pages/HomeFeedPage/HomeFeedPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeFeedPage />} />
          {/* <Route path="/users/:id" element={<ProfilePage />} />
          <Route path="/upload" element={<AddPostPage />} />
          <Route path="*" element={<NotFoundPage/>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
