import { useContext } from "react";
import { BsFillStarFill, BsEye, BsBoxArrowUpRight } from "react-icons/bs";

import GithubContext from "../../Context/Github/GithubContextData";
import { GithubContextDataInterface } from "../../Context/Github/GithubContextData";

export default function UserRepos(): JSX.Element {
  const { repos } = useContext(GithubContext) as GithubContextDataInterface;

  return (
    <div className="space-y-2 overflow-y-auto h-80 scrollbar-thin scrollbar-[#0C0E15]">
      {repos.map((item, index) => (
        <div
          key={item.id}
          className="bg-[#0C0E15] bg-opacity-75 border-l-4 border-l-violet-700 w-full h-28 p-3 rounded-lg p-2"
        >
          {/* LEFT SIDE */}
          <div className="flex justify-between ml-1">
            <div className="flex space-x-2">
              {/* STARS */}
              <span className="flex space-x-1">
                <BsFillStarFill className="text-amber-300 text-[9px]" />{" "}
                <h6 className="text-white text-[8px] ">
                  {item.stargazers_count}
                </h6>
              </span>
              {/* EYES */}
              <span className="flex space-x-1">
                <BsEye className="text-blue-600 text-[13px]" />{" "}
                <h6 className="text-white text-[8px]">{item.watchers_count}</h6>
              </span>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex space-x-2">
              <a href={`${item.html_url}`} target="_blank">
                {" "}
                <BsBoxArrowUpRight className="text-violet-700 text-xs" />
              </a>
              <h6 className="text-white text-[10px]">{item.name}</h6>
            </div>
          </div>
          <h5 className="text-white text-xs text-center mt-4 opacity-70">
            <h1>{item.description}</h1>
          </h5>
        </div>
      ))}
    </div>
  );
}
