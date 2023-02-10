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
      <div className="container relative md:mt-12 h-[800px] w-[440px] sm:w-[430px] md:w-[600px] md:h-[430px] lg:w-[680px] xl:w-[700px] md:max-w-3xl lg:max-w-4xl mx-auto overflow-y-auto overflow-hidden">
        <div className="absolute top-0 -left-12 container grid grid-cols-3 md:grid-cols-4 md:gap-1 px-1 lg:grid-cols-5 saturate-100 contrast-100">
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
