import { useContext, useState } from "react";
import Navbar from "../Components/Layout/Navbar";
import Footer from "../Components/Layout/Footer";
import UserResults from "../Components/Users/UserResults";
import GithubContext from "../Context/Github/GithubContextData";
import { GithubContextDataInterface } from "../Context/Github/GithubContextData";

export default function Home(): JSX.Element {
  const { users } = useContext(GithubContext) as GithubContextDataInterface;

  const [bgImage, setBgImage] = useState<boolean>(false);
  return (
    <section className="md:h-screen w-screen mx-auto p-2 sm:flex sm:justify-center sm:items-center md:flex-col md:p-0">
      <section
        className="container flex  overflow-hidden flex-col justify-between contrast-100 saturate-100 sm:mx-2 md:mx-0 px-1 md:h-3/5 lg:h-5/6 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl profile-border md:bg-black md:h-4/5 lg:h-5/6 xl:h-5/6 md:bg-Earth-New bg-no-repeat md:bg-opacity-30 bg-[length:400px_400px] bg-center bg-[center_top_9rem] sm:bg-[length:500px_500px] sm:bg-[center_top_8rem]  
     md:bg-[length:550px_550px] md:bg-[center_top_2rem] lg:bg-[length:590px_590px] lg:w-[900px]  lg:bg-[center_top_1rem] xl:bg-[length:660px_660px] xl:bg-[center_top_-1rem] xl:w-[1000px] overflow-hidden"
      >
        <Navbar />
        <div className="container mx-auto font-Lustria text-white font-thin mb-64 sm:mb-64 md:mb-48 ">
          {users.length > 0 ? (
            <UserResults />
          ) : (
            <div className="flex mt-60 md:mt-48 flex-col items-center justify-center space-y-2 md:space-y-2 tracking-[.50em] text-center pl-3">
              {" "}
              <p className="text-3xl  sm:text-4xl">GITHUB</p>
              <hr className="text-white w-32 sm:w-40 opacity-40 md:w-40" />
              <p className="text-xs sm:text-[9px]  md:text-md opacity-80">
                FINDER
              </p>
            </div>
          )}
        </div>
        <Footer />
      </section>
    </section>
  );
}
