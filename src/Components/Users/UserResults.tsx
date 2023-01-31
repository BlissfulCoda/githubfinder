import { useContext } from "react";
import Spinner from "../Spinner";
import User from "./User";

import GithubContext from "../../Context/Github/GithubContextData";
import { GithubContextDataInterface } from "../../Data/GithubContextData";

export default function UserResults(): JSX.Element {
  const { loading, users } = useContext(
    GithubContext
  ) as GithubContextDataInterface;

  if (!loading) {
    return (
      <div className="grid grid-cols-3 gap-0 overflow-hidden p-2">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}
