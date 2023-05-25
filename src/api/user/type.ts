export interface LoginForm {
  username: string;
  password: string;
}

export interface Token {
  token: string;
}

export interface UserInfo {
  userId: number;
  avatar: string;
  username: string;
  password: string;
  desc: string;
  roles: string[];
  buttons: string[];
  routes: string[];
  token: string;
}

export interface User {
  checkUser: UserInfo;
}

export interface ResponseData<T> {
  code: number;
  data: T;
}
