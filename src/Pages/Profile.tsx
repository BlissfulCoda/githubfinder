import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";
import Footer from "../Components/Layout/Footer";
import Button from "../Components/Shared/Button";
import { UserInterface } from "../Context/Github/GithubContextData";
import Spinner from "../Components/Shared/Spinner";
import UserRepos from "../Components/Repos/UserRepos";

import JohnWick from "../assets/JohnWick.png";

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
    <section className="mt-3 relative h-screen md:w-[600px] mx-auto max-w-sm">
      <figure>
        <img
          src={avatar_url}
          alt={`image of ${userLogin}`}
          className={`object-center h-[390px] md:h-[600px] w-full object-cover object-top contrast-150 opacity-80`}
        />
      </figure>
      <div className="w-full absolute top-2 right-0 h-full p-2 pt-5">
        <nav className="flex justify-between">
          <Link to="/">
            <Button>
              <BsArrowLeft className="text-2xl text-yellow-500 bg-[#1D252E]  rounded-full p-1" />
            </Button>
          </Link>

          <div className="flex space-x-3 items-center text-[9px] p-1">
            <FaUser className="text-sky-900" />
            <h1
              className={`font-light ${
                hireable ? "text-green-400 " : "text-red-400"
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
            {public_repos} <span className="opacity-40">Public Repos</span>
          </h4>
        </div>

        {/* PROFILE DISPLAY */}
        <div className="w-full absolute -bottom-36 right-0 opacity-90 sm:-bottom-28">
          <div className="space-y-4 mb-1">
            <div className="flex text-white text-[11px] justify-between opacity-70 text-thin">
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
    </section>
  );
}
