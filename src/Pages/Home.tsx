import { useContext } from "react";
import Navbar from "../Components/Layout/Navbar";
import Footer from "../Components/Layout/Footer";
import UserResults from "../Components/Users/UserResults";
import GithubContext from "../Context/Github/GithubContextData";
import { GithubContextDataInterface } from "../Context/Github/GithubContextData";

export default function Home(): JSX.Element {
  const { users } = useContext(GithubContext) as GithubContextDataInterface;
  return (
    <section className="md:h-full w-full mx-auto">
      <section
        className="flex flex-col justify-between m-5 sm:m-10 md:mx-0 px-2 sm:px-5 md:max-w-3xl lg:max-w-4xl xl:max-w-4x profile-border bg-black bg-opacity-40 h-[700px] md:h-[590px] lg:w-[900px] md:h-4/5 lg:h-5/6 bg-dark-image bg-no-repeat bg-[length:400px_400px] bg-center bg-[center_top_9rem] sm:bg-[length:410px_420px] sm:bg-[center_top_8rem]
     md:bg-[length:500px_500px] md:bg-[center_top_4rem] lg:bg-[length:600px_600px] lg:bg-[center_top_1rem] xl:bg-[length:660px_660px] xl:bg-[center_top_-1rem] overflow-hidden"
      >
        <Navbar />
        <div className="container mx-auto font-Lustria text-white font-thin mb-60 ">
          {users.length > 0 ? (
            <UserResults />
          ) : (
            <div className="flex mt-60 flex-col items-center justify-center space-y-2 md:space-y-4 tracking-[.60em] pl-3 sm:pl-8 ">
              {" "}
              <p className="text-3xl md:text-4xl">GITHUB</p>
              <hr className="text-white w-36 opacity-40 md:w-40" />
              <p className="text-xs md:text-md opacity-80">FINDER</p>
            </div>
          )}
        </div>
        <Footer />
      </section>
    </section>
  );
}
