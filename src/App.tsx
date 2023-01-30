import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ErrorPage from "./Components/Pages/ErrorPage";
import UserResults from "./Components/Users/UserResults";

import { GithubProvider } from "./Context/Github/GithubData";

export default function App() {
  return (
    <GithubProvider>
      <Router>
        <div className="h-screen flex flex-col justify-between bg-black bg-dark-image bg-no-repeat bg-center bg-[length:600px_600px] contrast-200 saturate-250 object-right  brightness-100 overflow-hidden">
          <Navbar />
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <div className="container mx-auto font-Lustria text-white tracking-widest font-thin space-y-2 flex flex-col items-center justify-center mb-20">
                    {" "}
                    <p className="text-5xl ">GITHUB</p>
                    <hr className="text-white w-36 opacity-50" />
                    <p className="text-xs">FINDER!</p>
                    <UserResults />
                  </div>
                }
              />
              <Route path="/notfound" element={<ErrorPage />} />
              <Route path="/*" element={<ErrorPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </GithubProvider>
  );
}
