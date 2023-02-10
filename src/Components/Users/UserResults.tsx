import { useContext } from "react";
import Spinner from "../Shared/Spinner";
import User from "./User";
import Footer from "../Layout/Footer";

import GithubContext from "../../Context/Github/GithubContextData";
import { GithubContextDataInterface } from "../../Context/Github/GithubContextData";

export default function UserResults(): JSX.Element {
  const { loading, users } = useContext(
    GithubContext
  ) as GithubContextDataInterface;

  if (!loading) {
    return (
      <div className="h-full w-full sm:flex sm:justify-center sm:items-center sm:flex-col md:p-0 md:pt-4">
        <div className="container relative h-[570px] sm:h-[660px] md:h-[450px] lg:h-[480px] w-[440px] sm:w-[440px] md:w-[600px] lg:w-[740px] xl:w-[800px] xl:h-[485px] md:max-w-3xl lg:max-w-4xl mx-auto overflow-y-auto overflow-hidden">
          <div className="absolute top-0 -left-12 container grid grid-cols-3 md:grid-cols-4 md:gap-1 px-1 lg:grid-cols-5 saturate-100 contrast-100">
            {users.map((user) => (
              <User key={user.id} user={user} />
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
}
