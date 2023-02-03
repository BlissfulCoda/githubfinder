import { FaBehance, FaSearch, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import UserSearch from "../Users/UserSearch";

export default function Navbar(): JSX.Element {
  return (
    <nav className="mb-12 ">
      <div className="container mx-auto flex justify-between pt-5 px-10">
        <Link to="/">
          <FaGithub className="text-slate-500 text-lg" />
        </Link>
        <div className="flex space-x-4">
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
