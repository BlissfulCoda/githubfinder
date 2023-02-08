import { useContext } from "react";
import Navbar from "../Components/Layout/Navbar";
import Footer from "../Components/Layout/Footer";
import UserResults from "../Components/Users/UserResults";
import GithubContext from "../Context/Github/GithubContextData";
import { GithubContextDataInterface } from "../Context/Github/GithubContextData";

export default function Home(): JSX.Element {
  const { users } = useContext(GithubContext) as GithubContextDataInterface;
  return (
    <section className="flex flex-col justify-between m-3 profile-border bg-black bg-opacity-40 h-screen bg-dark-image bg-no-repeat bg-[length:450px_450px] bg-center bg-[center_top_11rem]">
      <Navbar />
      <div className="container mx-auto font-Lustria text-white font-thin mb-60">
        {users.length > 0 ? (
          <UserResults />
        ) : (
          <div className="flex mt-60 flex-col items-center justify-center space-y-2 md:space-y-4 tracking-[.60em] pl-3">
            {" "}
            <p className="text-4xl md:text-7xl">GITHUB</p>
            <hr className="text-white w-44 opacity-40 md:w-64" />
            <p className="text-xs md:text-md opacity-80">FINDER</p>
          </div>
        )}
      </div>
      <Footer />
    </section>
  );
}
