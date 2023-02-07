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
        <div className="relative h-screen bg-black bg-center bg-[length:630px_630px] contrast-200 saturate-150 overflow-hidden pt-2">
          <figure className="absolute top-20 -left-36 h-[680px] w-[680px] sm:top-12 sm:-left-28 sm:h-[750px] sm:w-[750px] md:-top-4 md:left-14 md:h-[1000px] md:w-[1000px] lg:h-[1100px] lg:w-[1100px] lg:-top-12 lg:left-12 xl:h-[1200px] xl:w-[1200px] xl:left-32">
            <img
              src={SpinningWorld}
              alt=""
              className="bg-no-repeat bg-center bg-blend-hard-light contrast-50 saturate-100"
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
