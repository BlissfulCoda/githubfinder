import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";

import { GithubProvider } from "./Context/Github/GithubContextData";

export default function App() {
  return (
    <GithubProvider>
      <Router>
        <div className="relative h-screen mx-auto w-screen bg-black bg-center  contrast-200 saturate-150 overflow-hidden bg-dark-image bg-no-repeat bg-[length:600px_600px]  bg-[center_top_6rem] sm:bg-[length:670px_670px] sm:bg-[center_top_5rem] md:bg-[length:820px_820px] md:bg-[center_top_2rem] lg:bg-[length:900px_900px] lg:bg-[center_top_0rem] xl:bg-[length:1000px_1000px] xl:bg-[center_top_0rem]">
          <main className="absolute left-0 right-0 bottom-0 top-0 sm:top-3  z-40 ">
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
