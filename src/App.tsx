import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";

import { GithubProvider } from "./Context/Github/GithubContextData";

export default function App() {
  return (
    <GithubProvider>
      <Router>
        <div className="relative h-screen mx-auto w-screen bg-black bg-center contrast-200 saturate-150 overflow-hidden bg-Earth-New bg-no-repeat bg-[length:500px_500px]  bg-[center_top_9rem] sm:bg-[length:650px_650px] sm:bg-[center_top_6rem] md:bg-[length:800px_800px] md:bg-[top_left_6rem] lg:bg-[length:900px_900px] lg:bg-[top_left_9rem] xl:bg-[length:900px_900px] xl:bg-[top_left_24rem]">
          <main className="absolute left-0 right-0 bottom-0 top-0 sm:top-0  z-40 sm:px-2">
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
