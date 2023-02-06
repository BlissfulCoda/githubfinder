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
        <div className=" relative h-screen flex flex-col justify-between bg-black bg-center bg-[length:630px_630px] contrast-200 saturate-150 overflow-hidden pt-2">
          <figure className="absolute top-20 -left-40 h-[700px] w-[700px]">
            <img
              src={SpinningWorld}
              alt=""
              className="bg-no-repeat bg-center bg-blend-hard-light contrast-50 saturate-150"
            />
          </figure>
          <main className="absolute top-0 left-0 right-0 bottom-0">
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
