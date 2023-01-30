export type UserInterface = {
  [index: string]: string | undefined;
};

export interface GithubContextDataInterface {
  loading: boolean;
  users: UserInterface[];
  fetchUsers: () => void;
}
