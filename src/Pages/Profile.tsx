import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";
import Footer from "../Components/Layout/Footer";
import Button from "../Components/Shared/Button";
import { UserInterface } from "../Context/Github/GithubContextData";
import Spinner from "../Components/Shared/Spinner";
import UserRepos from "../Components/Repos/UserRepos";

import GithubLogo from "../Components/Shared/GithubLogo";

import GithubContext from "../Context/Github/GithubContextData";
import { GithubContextDataInterface } from "../Context/Github/GithubContextData";

export default function Profile(): JSX.Element {
  const { loading, user, fetchUser, getUserRepos } = useContext(
    GithubContext
  ) as GithubContextDataInterface;

  const params = useParams();
  const userLogin: string = params.login!;

  const {
    name,
    avatar_url,
    followers,
    following,
    public_repos,
    login,
    bio,
    location,
    hireable,
    website,
    github,
    html_url,
    twitter_username,
  }: UserInterface = user;

  useEffect(() => {
    fetchUser(userLogin);
    getUserRepos(userLogin);
  }, []);

  if (loading) return <Spinner />;

  return (
    <section className="md:h-full w-full mx-auto md:flex md:flex-col md:justify-center md:items-center">
      <section className="relative container h-screen w-full mx-auto max-w-sm sm:max-w-md border border-blue-700 px-2 sm:px-1 border-opacity-10 rounded-[25px] md:overflow-hidden md:border-opacity-40 md:flex md:mt-10 md:h-4/5 lg:h-5/6 md:max-w-3xl lg:max-w-4xl xl:max-w-4xl bg-[#010101] bg-opacity-0 md:bg-opacity-10 ">
        {/* LEFT */}
        <div className="hidden md:flex flex-col w-10 lg:w-14 h-full justify-between pb-20 items-center pt-14">
          <Link to="/">
            <Button>
              <BsArrowLeft className="text-xl text-yellow-500 bg-[#1D252E]  rounded-full p-1 bg-zinc-600" />
            </Button>
          </Link>

          <span className="text-white opacity-50 -rotate-90 flex ">
            <span className="text-white text-[7px]">
              RonnieKiyegga@hotmail.com
            </span>
          </span>
        </div>

        {/* MIDDLE */}
        <div className="relative md:border md:border-x-neutral-300 md:px-0 md:border-opacity-10 md:border-y-0 w-full md:flex md:justify-between md:pt-10 md:space-x-0 md:w-[680px] lg:px-3 lg:w-full">
          {/* IMAGE */}
          <div className="md:w-[370px] md:order-2 relative ">
            <figure>
              <img
                src={avatar_url}
                alt={`image of ${userLogin}`}
                className={`object-center h-[400px] w-full object-cover object-top  opacity-90 md:h-[520px] lg:h-[550px] md:w-5/5`}
              />
            </figure>
            <div className="w-full absolute top-2 right-0 h-24 p-2 pt-5 md:pt-2 ">
              <nav className="flex justify-between">
                <Link to="/" className="md:hidden">
                  <Button>
                    <BsArrowLeft className="text-xl text-yellow-500 bg-[#1D252E]  rounded-full p-1 bg-zinc-600" />
                  </Button>
                </Link>

                <div className="flex space-x-3 items-center text-[9px] p-1 md:hidden">
                  <FaUser className="text-sky-900" />
                  <h1
                    className={`font-light ${
                      Boolean(hireable) ? "text-green-400 " : "text-red-400"
                    }`}
                  >
                    Hireable
                  </h1>
                </div>
              </nav>

              <div className="flex text-white text-[7px] space-x-2 border-[0.2px] border-opacity-40 border-y-neutral-50 border-x-0 py-2 font-light w-52 text-right ml-auto pl-7">
                <h4>
                  {followers} <span className="opacity-40">Followers</span>
                </h4>
                <h4>
                  {following} <span className="opacity-40">Following</span>
                </h4>
                <h4>
                  {public_repos}{" "}
                  <span className="opacity-40">Public Repos</span>
                </h4>
              </div>
            </div>
          </div>

          {/* PROFILE DISPLAY */}
          <div className="w-full -mt-6 opacity-90 sm:-bottom-28 md:order-1 md:w-[330px] md:h-[710px] md:flex md:flex-col justify-between md:p-1 md:mt-6 md:pr-2 lg:w-[400px] lg:h-[700px] lg:p-0 ">
            <div className="flex space-x-3 items-center text-[9px] p-1 hidden md:flex md:justify-end ">
              <FaUser className="text-sky-800" />
              <h1
                className={`font-light ${
                  hireable ? "text-green-400 " : "text-red-400"
                }`}
              >
                Hireable
              </h1>
            </div>
            <div className="space-y-4 mb-1">
              <div className="flex text-white text-[11px] justify-between opacity-70 text-thin md:text-[9px] md:opacity-50 lg:text-[10px]">
                <h3 className="">Latest Repositories</h3>
                <div className="flex space-x-6 pr-2">
                  {location && <h3>{location}</h3>}
                  {website && <a href={website}>Website</a>}
                  {html_url && (
                    <h3>
                      <a href={html_url} target="_blank" rel="noreferrer">
                        Github
                      </a>
                    </h3>
                  )}
                </div>
              </div>

              {/* REPOSITORIES */}
              <UserRepos />
            </div>
            <Footer />
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="hidden w-full h-full md:flex flex-col
      justify-between items-center text-xs pt-16"
        >
          <GithubLogo />
          <div className=" space-y-6">
            <FaTwitter className="text-blue-400" />
            <FaLinkedinIn className="text-purple-800" />
          </div>
          <div></div>
        </div>
      </section>
    </section>
  );
}
