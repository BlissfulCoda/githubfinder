import { initialState } from "./GithubContextData";

export const enum REDUCER_ACTION_TYPE {
  GET_USERS,
  SET_LOADING,
  CLEAR_USERS,
  FETCH_USER,
}

type GithubReducerTypes = {
  type: REDUCER_ACTION_TYPE;
  payload?: [];
};

const githubReducer = (
  state: typeof initialState,
  action: GithubReducerTypes
): typeof initialState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.GET_USERS:
      return { ...state, users: action.payload ?? [], loading: false };
    case REDUCER_ACTION_TYPE.SET_LOADING:
      return { ...state, loading: true };
    case REDUCER_ACTION_TYPE.CLEAR_USERS:
      return { ...state, users: [] };
    case REDUCER_ACTION_TYPE.FETCH_USER:
      return { ...state, user: action.payload ?? {}, loading: false };
    default:
      return state;
  }
};

export default githubReducer;
