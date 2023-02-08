import { createContext, useReducer } from "react";
import { Navigate } from "react-router-dom";
import githubReducer from "./GithubReducer";
import { REDUCER_ACTION_TYPE } from "./GithubReducer";

export type UserInterface = {
  [index: string]: string | undefined;
};

type GithubState = {
  users: UserInterface[];
  loading: boolean;
};

export interface GithubContextDataInterface {
  loading: boolean;
  users: UserInterface[];
  user: {};
  repos: UserInterface[];
  initialState: GithubState;
  searchUsers: (value: string) => void;
  fetchUser: (value: string) => void;
  setLoading: () => void;
  clearUsers: () => void;
  getUserRepos: (value: string) => void;
}

const GithubContext = createContext<GithubContextDataInterface | null>(null);

const GITHUB_URL = "https://api.github.com";

interface GithubContextInterface {
  children: React.ReactNode;
}

export const initialState = {
  users: [],
  user: {},
  loading: false,
  repos: [],
};

export const GithubProvider = ({
  children,
}: GithubContextInterface): JSX.Element => {
  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Fetch users
  const searchUsers = async (text: string) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    const { items } = await response.json();

    dispatch({
      type: REDUCER_ACTION_TYPE.GET_USERS,
      payload: items,
    });
  };

  // FETCH SINGLE USER
  const fetchUser = async (login: string) => {
    setLoading();

    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (response.status === 404) {
      <Navigate to="/notfound" />;
    } else {
      const data = await response.json();

      dispatch({
        type: REDUCER_ACTION_TYPE.FETCH_USER,
        payload: data,
      });
    }
  };

  // FETCH A USER REPO
  const getUserRepos = async (login: string) => {
    setLoading();

    const params = new URLSearchParams({
      sort: "created",
      per_page: "10",
    });

    const response = await fetch(
      `${GITHUB_URL}/users/${login}/repos?${params}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    );

    const data = await response.json();

    dispatch({
      type: REDUCER_ACTION_TYPE.GET_REPOS,
      payload: data,
    });
  };

  const setLoading = () => dispatch({ type: REDUCER_ACTION_TYPE.SET_LOADING });

  const clearUsers = () => dispatch({ type: REDUCER_ACTION_TYPE.CLEAR_USERS });

  return (
    <GithubContext.Provider
      value={{
        ...state,
        initialState,
        searchUsers,
        fetchUser,
        setLoading,
        clearUsers,
        getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
