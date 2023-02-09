import { useState } from "react";
import { Link } from "react-router-dom";
import { UserInterface } from "../../Context/Github/GithubContextData";

type UserProps = {
  user: UserInterface;
};

export default function User({ user }: UserProps): JSX.Element {
  const [hoverText, setHoverText] = useState<boolean>(false);

  const { login, avatar_url } = user;
  return (
    <Link to={`/user/${login}`}>
      <section>
        <div className="clip-path-myPolygon hover:border-4 hover:border-indigo-600 h-48 w-52 sm:w-68 sm:h-68 lg:w-68 relative hover:duration-500">
          <img
            src={avatar_url}
            alt="Profile"
            className={`brightness-75 hover:brightness-100 object-center h-full w-full object-cover `}
            onMouseEnter={() => setHoverText(true)}
            onMouseLeave={() => setHoverText(false)}
          />
          <h4
            className={`text-white absolute bottom-8 md:left-4 left-4 -rotate-90 text-xs ${
              hoverText
                ? "hover:opacity-100 duration-500"
                : "opacity-0 duration-500"
            } `}
          >
            {login}
          </h4>
          <span
            className={`absolute flex top-3 right-20  md:right-8 sm:right-6 md:right-4 space-x-1 ${
              hoverText ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="bg-white rounded-full h-1 w-1"></span>
            <span className="bg-white rounded-full h-1 w-1"></span>
            <span className="bg-white rounded-full h-1 w-1"></span>
          </span>
        </div>
      </section>
    </Link>
  );
}
