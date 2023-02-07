import { useContext } from "react";
import Navbar from "../Components/Layout/Navbar";
import Footer from "../Components/Layout/Footer";
import UserResults from "../Components/Users/UserResults";
import GithubContext from "../Context/Github/GithubContextData";
import { GithubContextDataInterface } from "../Context/Github/GithubContextData";

export default function Home(): JSX.Element {
  const { users } = useContext(GithubContext) as GithubContextDataInterface;
  return (
    <section>
      <div className="h-screen flex flex-col justify-between mt-4 ">
        <Navbar />
        <div className="container mx-auto font-Lustria text-white  font-thin">
          {users.length > 0 ? (
            <UserResults />
          ) : (
            <div className="flex mt-56 flex-col items-center justify-center space-y-2 md:space-y-4 tracking-[.55em]">
              {" "}
              <p className="text-5xl md:text-7xl">GITHUB</p>
              <hr className="text-white w-36 opacity-50 md:w-64" />
              <p className="text-xs md:text-md">FINDER</p>
            </div>
          )}
        </div>
        <UserResults />
        <Footer />
      </div>
    </section>
  );
}
