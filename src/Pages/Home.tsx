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
    <section className="md:h-full w-full mx-auto sm:flex md:flex-col md:justify-center sm:items-center p-3">
      <section
        className="container flex flex-col  justify-between sm:mx-2 md:mx-0 px-1 md:h-4/5 lg:h-5/6 md:max-w-3xl lg:max-w-4xl xl:max-w-4xl profile-border md:bg-black  lg:w-[900px] xl:w-[1000px] md:h-4/5 lg:h-5/6 xl:h-5/6 sm:bg-Earth-New bg-no-repeat bg-[length:400px_400px] bg-center bg-[center_top_9rem] sm:bg-[length:500px_500px] sm:bg-[center_top_8rem] contrast-100 saturate-150 
     md:bg-[length:550px_550px] md:bg-[center_top_2rem] lg:bg-[length:590px_590px] lg:bg-[center_top_1rem] xl:bg-[length:660px_660px] xl:bg-[center_top_-1rem] overflow-hidden"
      >
        <Navbar />
        <div className="container mx-auto font-Lustria text-white font-thin mb-64 sm:mb-52 md:mb-48 ">
          {users.length > 0 ? (
            <UserResults />
          ) : (
            <div className="flex mt-60 md:mt-48 flex-col items-center justify-center space-y-2 md:space-y-2 tracking-[.60em] pl-3 sm:pl-8 ">
              {" "}
              <p className="text-3xl  sm:text-4xl">GITHUB</p>
              <hr className="text-white w-36 sm:w-40 opacity-40 md:w-40" />
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
