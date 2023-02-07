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
      <div className="relative h-[800px] overflow-y-auto">
        <div className="absolute top-0 -left-4 container grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-0 px-1 ">
          {users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
}
