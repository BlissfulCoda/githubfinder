import { useContext } from "react";
import Spinner from "../Shared/Spinner";
import User from "./User";

import GithubContext from "../../Context/Github/GithubContextData";
import { GithubContextDataInterface } from "../../Context/Github/GithubContextData";

export default function UserResults(): JSX.Element {
  const { loading, users } = useContext(
    GithubContext
  ) as GithubContextDataInterface;

  if (!loading) {
    return (
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-0 px-4 h-screen ">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}
