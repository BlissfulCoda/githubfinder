import { useContext, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FaLongArrowAltLeft, FaUser } from "react-icons/fa";
import Footer from "../Components/Layout/Footer";
import Button from "../Components/Shared/Button";

import GithubContext from "../Context/Github/GithubContextData";
import { GithubContextDataInterface } from "../Context/Github/GithubContextData";

export default function Profile(): JSX.Element {
  const { loading, user, fetchUser } = useContext(
    GithubContext
  ) as GithubContextDataInterface;

  const params = useParams();
  const login: string = params.login!

  

  useEffect(() => {
    fetchUser(login);
  }, []);

  return (
    <div className="p-8">
      <nav className="flex justify-between">
        <Link to={`/user`}>
          <Button>
            <FaLongArrowAltLeft className="text-xl text-yellow-500 bg-slate-600 rounded-full p-1" />
          </Button>
        </Link>
        <div className="text-xs">
          <div className="flex space-x-2 items-center">
            <FaUser className="text-sky-800 " />
            <h1 className="text-green-300">{login}</h1>
          </div>
        </div>
      </nav>
      {/* PROFILE DISPLAY */}

      <Footer />
    </div>
  );
}
