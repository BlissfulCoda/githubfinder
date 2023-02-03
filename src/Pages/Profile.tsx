import { useContext, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FaLongArrowAltLeft, FaUser } from "react-icons/fa";
import {
  BsFillStarFill,
  BsEye,
  BsArrowLeft,
  BsBoxArrowUpRight,
} from "react-icons/bs";
import Footer from "../Components/Layout/Footer";
import Button from "../Components/Shared/Button";
import { UserInterface } from "../Context/Github/GithubContextData";
import Spinner from "../Components/Shared/Spinner";
import JohnWick from "../assets/JohnWick.png";

import GithubContext from "../Context/Github/GithubContextData";
import { GithubContextDataInterface } from "../Context/Github/GithubContextData";

export default function Profile(): JSX.Element {
  const { loading, user, fetchUser } = useContext(
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
  }: UserInterface = user;

  useEffect(() => {
    fetchUser(userLogin);
    console.log(user);
  }, []);

  if (loading) return <Spinner />;

  return (
    <section className="mx-9 mt-3 relative h-screen">
      <figure>
        <img
          src={avatar_url}
          alt={`image of ${userLogin}`}
          className={`object-center h-[445px] w-full object-cover object-top  brightness-75 contrast-50`}
        />
      </figure>
      <div className="w-full absolute top-2 right-0 h-full p-2 pt-5">
        <nav className="flex justify-between">
          <Link to="/">
            <Button>
              <BsArrowLeft className="text-2xl text-yellow-500 bg-[#1D15E] rounded-full p-1" />
            </Button>
          </Link>

          <div className="flex space-x-3 items-center text-[9px] p-1">
            <FaUser className="text-sky-900" />
            <h1
              className={`font-light ${
                hireable ? "text-green-400" : "text-red-400"
              }`}
            >
              Hireable
            </h1>
          </div>
        </nav>

        <div className="flex text-white text-[7px] space-x-2 border-[0.1px] border-opacity-10 border-y-neutral-50 border-x-0 py-2 font-light w-52 text-right ml-auto pl-5">
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
        <div className="w-full absolute bottom-1 right-0 opacity-90">
          <div className="space-y-6 mb-1">
            <div className="flex text-white text-[11px] justify-between opacity-40 text-thin px-1">
              <h3 className="">Latest Repositories</h3>
              <div className="flex space-x-6">
                <h3>{location}</h3>
                <h3>Website</h3>
                <h3>Github</h3>
              </div>
            </div>

            {/* REPOSITORIES */}
            <div className="space-y-1">
              <div className="bg-[#0C0E15] bg-opacity-75 border-l-4 border-l-violet-700 w-full h-24 p-3 rounded-lg p-2">
                {/* LEFT SIDE */}
                <div className="flex justify-between ml-1">
                  <div className="flex space-x-2">
                    {/* STARS */}
                    <span className="flex space-x-1">
                      <BsFillStarFill className="text-amber-300 text-[9px]" />{" "}
                      <h6 className="text-white text-[8px] ">24</h6>
                    </span>
                    {/* EYES */}
                    <span className="flex space-x-1">
                      <BsEye className="text-blue-600 text-[13px]" />{" "}
                      <h6 className="text-white text-[8px]">302</h6>
                    </span>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="flex space-x-2">
                    <BsBoxArrowUpRight className="text-violet-600 text-xs" />
                    <h6 className="text-white text-[10px]">Project Name</h6>
                  </div>
                </div>
                <h5 className="text-white text-xs text-center mt-4 opacity-70">
                  Welcome to this Project
                </h5>
              </div>

              <div className="bg-[#0C0E15] bg-opacity-75 border-l-4 border-l-violet-700 w-full h-24 p-3 rounded-lg p-2">
                {/* LEFT SIDE */}
                <div className="flex justify-between ml-1">
                  <div className="flex space-x-2">
                    {/* STARS */}
                    <span className="flex space-x-1">
                      <BsFillStarFill className="text-amber-300 text-[9px]" />{" "}
                      <h6 className="text-white text-[8px]">24</h6>
                    </span>
                    {/* EYES */}
                    <span className="flex space-x-1">
                      <BsEye className="text-blue-600 text-[13px]" />{" "}
                      <h6 className="text-white text-[8px]">302</h6>
                    </span>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="flex space-x-2">
                    <BsBoxArrowUpRight className="text-violet-600 text-xs" />
                    <h6 className="text-white text-[10px]">Project Name</h6>
                  </div>
                </div>
                <h5 className="text-white text-xs text-center mt-4 opacity-70">
                  Welcome to this Project
                </h5>
              </div>

              <div className="bg-[#0C0E15] bg-opacity-75 border-l-4 border-l-violet-700 w-full h-24 p-3 rounded-lg p-2">
                {/* LEFT SIDE */}
                <div className="flex justify-between ml-1">
                  <div className="flex space-x-2">
                    {/* STARS */}
                    <span className="flex space-x-1">
                      <BsFillStarFill className="text-amber-300 text-[9px]" />{" "}
                      <h6 className="text-white text-[8px]">24</h6>
                    </span>
                    {/* EYES */}
                    <span className="flex space-x-1">
                      <BsEye className="text-blue-600 text-[13px]" />{" "}
                      <h6 className="text-white text-[8px]">302</h6>
                    </span>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="flex space-x-2">
                    <BsBoxArrowUpRight className="text-violet-600 text-xs" />
                    <h6 className="text-white text-[10px]">Project Name</h6>
                  </div>
                </div>
                <h5 className="text-white text-xs text-center mt-4 opacity-70">
                  Welcome to this Project
                </h5>
              </div>

              <div className="bg-[#0C0E15] bg-opacity-75 border-l-4 border-l-violet-700 w-full h-24 p-3 rounded-lg p-2">
                {/* LEFT SIDE */}
                <div className="flex justify-between ml-1">
                  <div className="flex space-x-2">
                    {/* STARS */}
                    <span className="flex space-x-1">
                      <BsFillStarFill className="text-amber-300 text-[9px]" />{" "}
                      <h6 className="text-white text-[8px]">24</h6>
                    </span>
                    {/* EYES */}
                    <span className="flex space-x-1">
                      <BsEye className="text-blue-600 text-[13px]" />{" "}
                      <h6 className="text-white text-[8px]">302</h6>
                    </span>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="flex space-x-2">
                    <BsBoxArrowUpRight className="text-violet-600 text-xs" />
                    <h6 className="text-white text-[10px]">Project Name</h6>
                  </div>
                </div>
                <h5 className="text-white text-xs text-center mt-4 opacity-70">
                  Welcome to this Project
                </h5>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </section>
  );
}
