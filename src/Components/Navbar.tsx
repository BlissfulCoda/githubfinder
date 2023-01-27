import { FaBehance, FaSearch, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar(): JSX.Element {
  return (
    <nav className="mb-12 ">
      <div className="container mx-auto flex justify-between pt-5 px-10">
        <Link to="/">
          <FaGithub className="text-slate-500 text-lg" />
        </Link>
        <div className="flex space-x-4">
          <form action="" className="flex ">
            <input
              type="text"
              className="bg-black border border-x-0 border-t-0 focus:outline-none border-b-zinc-500 text-neutral-content placeholder:text-[9px] text-xs focus:placeholder:text-[7px] "
              placeholder="Search a user..."
            />
            <button className="bg-zinc-900 flex justify-center items-center rounded-full p-1">
              <FaSearch className="text-slate-500 text-xs" />
            </button>
          </form>
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
