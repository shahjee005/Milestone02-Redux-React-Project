export interface UserState {
  users: User[];
}

export interface User {
  id: number;
  username: string;
  password: string;
}

export const ADD_USER_TO_SYSTEM = "ADD_USER_TO_SYSTEM";

interface AddUserToSystem {
  type: typeof ADD_USER_TO_SYSTEM;
  user: User;
}

export type UserActionTypes = AddUserToSystem;
