import { useState } from "react";
import { Link } from "react-router-dom";
import { UserInterface } from "../../Data/GithubContextData";

type UserProps = {
  user: UserInterface;
};

export default function User({ user }: UserProps): JSX.Element {
  const [hoverText, setHoverText] = useState<boolean>(false);

  const { login, avatar_url } = user;
  return (
    <Link to={`/users/${login}`}>
      <div className="clip-path-myPolygon hover:border-4 hover:border-indigo-500 h-full w-56 drop-shadow-3xl relative">
        <img
          src={avatar_url}
          alt="Profile"
          className={`brightness-75 hover:brightness-100 object-center h-full w-full object-cover`}
          onMouseEnter={() => setHoverText(true)}
          onMouseLeave={() => setHoverText(false)}
        />
        <h4
          className={`text-white absolute bottom-8 left-1 -rotate-90 text-xs ${
            hoverText
              ? "hover:opacity-100 duration-500"
              : "opacity-0 duration-500"
          } `}
        >
          {login}
        </h4>
        <span
          className={`absolute flex top-3 right-7 space-x-1 ${
            hoverText ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="bg-white rounded-full h-1 w-1"></span>
          <span className="bg-white rounded-full h-1 w-1"></span>
          <span className="bg-white rounded-full h-1 w-1"></span>
        </span>
      </div>
    </Link>
  );
}
