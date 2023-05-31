export interface LoginForm {
  username: string;
  password: string;
}

export interface Token {
  token: string;
}

export interface UserInfo {
  avatar: string;
  buttons: string[];
  name: string;
  roles: string[];
  routes: string[];
}

export interface ResponseData<T> {
  code: number;
  message: string;
  data: T;
  ok: boolean;
}
