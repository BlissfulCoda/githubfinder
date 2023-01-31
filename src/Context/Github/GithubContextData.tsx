import { createContext, useReducer } from "react";
import { GithubContextDataInterface } from "../../Data/GithubContextData";
import githubReducer from "./GithubReducer";
import { REDUCER_ACTION_TYPE } from "./GithubReducer";

const GithubContext = createContext<GithubContextDataInterface | null>(null);

const GITHUB_URL = import.meta.env.VITE_REACT_APP_GITHUB_URL;

interface GithubContextInterface {
  children: React.ReactNode;
}

export const initialState = {
  users: [],
  loading: false,
};

export const GithubProvider = ({
  children,
}: GithubContextInterface): JSX.Element => {
  const [state, dispatch] = useReducer(githubReducer, initialState);

  const fetchUsers = async () => {
    setLoading();
    const response = await fetch(`${GITHUB_URL}/users`, {
      method: "GET",
    });

    const data = await response.json();

    dispatch({
      type: REDUCER_ACTION_TYPE.GET_USERS,
      payload: data,
    });
  };

  const setLoading = () => dispatch({ type: REDUCER_ACTION_TYPE.SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        initialState,
        fetchUsers,
        setLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
