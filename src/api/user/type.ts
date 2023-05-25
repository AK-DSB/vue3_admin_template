export interface LoginForm {
  username: string;
  password: string;
}

interface dataType {
  token: string;
}

export interface LoginResponseData {
  code: number;
  data: dataType;
}
