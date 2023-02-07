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
      <div className="h-screen flex flex-col justify-between mt-3 ">
        <Navbar />
        <div className="container mx-auto font-Lustria text-white font-thin">
          {users.length > 0 ? (
            <UserResults />
          ) : (
            <div className="flex mt-56 flex-col items-center justify-center space-y-2 md:space-y-4 tracking-[.60em]">
              {" "}
              <p className="text-4xl md:text-7xl">GITHUB</p>
              <hr className="text-white w-36 opacity-20 md:w-64" />
              <p className="text-xs md:text-md opacity-80">FINDER</p>
            </div>
          )}
        </div>
        <UserResults />
        <Footer />
      </div>
    </section>
  );
}
