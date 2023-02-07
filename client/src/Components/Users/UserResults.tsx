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
      <div className="container relative h-[800px] max-w-[450px] sm:max-w-3xl md:max-w-3xl lg:max-w-4xl mx-auto overflow-y-auto overflow-x-hidden ">
        <div className="absolute top-0 -left-12 container grid grid-cols-3 md:grid-cols-4 gap-0 px-1 lg:grid-cols-5">
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
