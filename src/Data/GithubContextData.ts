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
  fetchUsers: () => void;
  initialState: GithubState;
  setLoading: () => void;
}
