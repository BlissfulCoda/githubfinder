import { useEffect, useState } from "react";
import Spinner from "../Spinner";
import User from "./User";

export default function UserResults(): JSX.Element {
  const [users, setUsers] = useState([]);
  const [loading, isLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const GITHUB_TOKEN = import.meta.env.VITE_REACT_APP_GITHUB_TOKEN;
  const GITHUB_URL = import.meta.env.VITE_REACT_APP_GITHUB_URL;

  const fetchUsers = async () => {
    const response = await fetch(`${GITHUB_URL}/users`, {
      method: "GET",
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();
    setUsers(data);
    isLoading(false);
  };

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
