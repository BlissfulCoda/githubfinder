import { useEffect, useContext } from "react";
import Spinner from "../Spinner";
import User from "./User";

import GithubContext from "../../Context/Github/GithubData";
import { GithubContextDataInterface } from "../../Data/GithubContextData";

export default function UserResults(): JSX.Element {
  const { loading, users, fetchUsers } = useContext(
    GithubContext
  ) as GithubContextDataInterface;

  useEffect(() => {
    fetchUsers();
  }, []);

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
