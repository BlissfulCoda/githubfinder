import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SpinningWorld from "./assets/SpinningWorld.gif";

import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";

import { GithubProvider } from "./Context/Github/GithubContextData";

export default function App() {
  return (
    <GithubProvider>
      <Router>
        <div className="relative h-screen bg-black bg-center contrast-200 saturate-150 overflow-hidden pt-2 ">
          <figure className="absolute top-16 -left-48 h-[630px] w-[630px] sm:top-12 sm:-left-40 sm:h-[700px] sm:w-[700px] md:-top-4 md:-left-10 md:h-[900px] md:w-[900px] lg:h-[1100px] lg:w-[1100px] lg:-top-12 lg:left-12 xl:h-[1200px] xl:w-[1200px] xl:left-32">
            <img
              src={SpinningWorld}
              alt=""
              className="bg-no-repeat bg-center bg-blend-hard-light contrast-50 saturate-100 "
            />
          </figure>
          <main className="absolute left-0 right-0 bottom-0 -top-3">
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
