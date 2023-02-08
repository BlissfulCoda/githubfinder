import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function GithubLogo(): JSX.Element {
  return (
    <Link to="/">
      <FaGithub className="text-slate-500 text-lg contrast-200" />
    </Link>
  );
}
