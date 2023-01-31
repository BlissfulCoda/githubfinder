import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ErrorPage from "./Components/Pages/ErrorPage";
import Home from "./Components/Pages/Home";
import UserResults from "./Components/Users/UserResults";

import { GithubProvider } from "./Context/Github/GithubContextData";

export default function App() {
  return (
    <GithubProvider>
      <Router>
        <div className="h-screen flex flex-col justify-between bg-black bg-dark-image bg-no-repeat bg-center bg-[length:600px_600px] contrast-200 saturate-200  bg-blend-hard-light overflow-hidden">
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/notfound" element={<ErrorPage />} />
              <Route path="/*" element={<ErrorPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </GithubProvider>
  );
}
