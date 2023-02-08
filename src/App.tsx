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
        <div className="relative h-screen w-screen bg-black bg-center contrast-200 saturate-150 overflow-hidden pt-2">
          <figure className="absolute top-16 left-12 h-[630px] w-[630px] sm:top-12 sm:-left-36 sm:h-[700px] sm:w-[700px] md:-top-4 md:left-20 md:h-[800px] md:w-[800px] lg:h-[900px] lg:w-[900px] lg:left-32 lg:-top-6  xl:h-[1000px] xl:w-[1000px] xl:left-64">
            <img
              src={SpinningWorld}
              alt=""
              className="bg-no-repeat bg-center bg-blend-hard-light contrast-50 saturate-100 "
            />
          </figure>
          <main className="absolute left-0 right-0 bottom-0 top-1 ">
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
