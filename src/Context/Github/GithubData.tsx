import { createContext, useState } from "react";
import {
  GithubContextDataInterface,
} from "../../Data/GithubContextData";

const GithubContext = createContext<GithubContextDataInterface | null>(null);

const GITHUB_URL = import.meta.env.VITE_REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_REACT_APP_GITHUB_TOKEN;

interface GithubContextInterface {
  children: React.ReactNode;
}

export const GithubProvider = ({
  children,
}: GithubContextInterface): JSX.Element => {
  const [users, setUsers] = useState([]);
  const [loading, isLoading] = useState<boolean>(true);

  const fetchUsers = async () => {
    const response = await fetch(`${GITHUB_URL}/users`, {
      method: "GET",
    });

    const data = await response.json();
    setUsers(data);
    isLoading(false);
  };

  return (
    <GithubContext.Provider value={{ users, loading, fetchUsers }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
