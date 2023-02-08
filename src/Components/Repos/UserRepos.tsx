import { useContext } from "react";
import { BsFillStarFill, BsEye, BsBoxArrowUpRight } from "react-icons/bs";

import GithubContext from "../../Context/Github/GithubContextData";
import { GithubContextDataInterface } from "../../Context/Github/GithubContextData";

export default function UserRepos(): JSX.Element {
  const { repos } = useContext(GithubContext) as GithubContextDataInterface;

  return (
    <div className="space-y-1 overflow-y-auto h-screen scrollbar-thin scrollbar-[#0C0E15] md:h-[335px] lg:h-[400px]">
      {repos.map((item) => (
        <div
          key={item.id}
          className="bg-gray-600 bg-opacity-40 border-l-2 border-l-violet-700 w-full h-24 p-3 rounded p-2 md:h-20 lg:h-24 md:border-l-2"
        >
          {/* LEFT SIDE */}
          <div className="flex justify-between ml-1">
            <div className="flex space-x-2">
              {/* STARS */}
              <span className="flex space-x-1">
                <BsFillStarFill className="text-amber-300 text-[9px] md:text-[8px]" />{" "}
                <h6 className="text-white text-[8px] md:text-[7px]">
                  {item.stargazers_count}
                </h6>
              </span>
              {/* EYES */}
              <span className="flex space-x-1">
                <BsEye className="text-blue-600 text-[13px] md:text-[10px]" />{" "}
                <h6 className="text-white text-[8px] md:text-[7px]">
                  {item.watchers_count}
                </h6>
              </span>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex space-x-2">
              <a href={`${item.html_url}`} target="_blank">
                {" "}
                <BsBoxArrowUpRight className="text-violet-700 text-xs md:text-[9px]" />
              </a>
              <h6 className="text-white text-[9px] md:text-[7px]">
                {item.name}
              </h6>
            </div>
          </div>
          <h5 className="text-white text-[10px] md:text-[8px] px-9 md:px-8 text-center mt-4 opacity-60">
            {item.description}
          </h5>
        </div>
      ))}
    </div>
  );
}
