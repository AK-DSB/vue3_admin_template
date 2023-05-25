import { postRequest, getRequest } from "@/utils/request";
import { LoginForm, Token, User } from "./type";
enum API {
  LOGIN_URL = "/user/login",
  USERINFO_URL = "/user/info",
}

export const reqLogin = (data: LoginForm) => {
  return postRequest<LoginForm, Token>(API.LOGIN_URL, data);
};

export const reqUserInfo = () => {
  return getRequest<any, User>(API.USERINFO_URL);
};
