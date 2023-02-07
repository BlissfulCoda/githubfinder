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
      <div className="relative h-[800px] w-[400px] sm:w-full mx-auto overflow-y-auto overflow-x-hidden">
        <div className="absolute top-0 -left-12 container grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-0 px-1 lg:grid-cols-6">
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
