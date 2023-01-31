import { initialState } from "./GithubContextData";

export const enum REDUCER_ACTION_TYPE {
  GET_USERS,
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
    default:
      return state;
  }
};

export default githubReducer;
