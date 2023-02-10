import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";

import { GithubProvider } from "./Context/Github/GithubContextData";

export default function App() {
  return (
    <GithubProvider>
      <Router>
        <div className="h-screen flex flex-col justify-between md:justify-center md:items-center mx-auto  bg-black bg-center contrast-200 saturate-150 overflow-hidden bg-Earth bg-no-repeat bg-[length:470px_470px] bg-[center_top_6rem] sm:bg-[length:550px_550px] sm:bg-[center_top_7rem] md:bg-[length:750px_750px] md:bg-[top_left_7rem] lg:bg-[length:1000px_1000px] lg:bg-[top_left_11rem] ">
          <main className="px-1 container mx-auto ">
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
