import { FaBehance, FaSearch, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import UserSearch from "../Users/UserSearch";

export default function Navbar(): JSX.Element {
  return (
    <nav className="mb-10 contrast-200">
      <div className="container mx-auto flex justify-between pt-8 px-4 sm:px-0 ">
        <Link to="/">
          <FaGithub className="text-slate-500 text-lg" />
        </Link>
        <div className="flex space-x-5">
          <UserSearch />
          <a
            href="https://www.behance.net/gallery/161600827/Github-Project-UI-Design"
            target="_blank"
          >
            <FaBehance className="text-white text-xl" />
          </a>
        </div>
      </div>
    </nav>
  );
}
