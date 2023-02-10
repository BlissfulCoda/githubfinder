import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";

import { GithubProvider } from "./Context/Github/GithubContextData";

export default function App() {
  return (
    <GithubProvider>
      <Router>
        <div className="h-screen mx-auto w-screen bg-black bg-center contrast-200 saturate-150 overflow-hidden bg-Earth-New bg-no-repeat bg-[length:460px_460px] bg-[center_top_8rem] sm:bg-[length:550px_550px] sm:bg-[center_top_7rem] md:bg-[length:750px_750px] md:bg-[top_left_6rem] lg:bg-[length:1000px_1000px] lg:bg-[top_left_11rem] ">
          <main className="sm:px-2">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user/:login" element={<Profile />} />
              <Route path="/notfound" element={<ErrorPage />} />
              <Route path="/*" element={<ErrorPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </GithubProvider>
  );
}
