import { FaBehance } from "react-icons/fa";
import UserSearch from "../Users/UserSearch";

import GithubLogo from "../Shared/GithubLogo";

export default function Navbar(): JSX.Element {
  return (
    <nav className="mb-2 contrast-200">
      <div className="container mx-auto flex justify-between pt-6 px-4 sm:px-0 lg:px-6 ">
        <GithubLogo />
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
