import { postRequest, getRequest } from "@/utils/request";
import { LoginForm, LoginResponseData } from "./type";
enum API {
  LOGIN_URL = "/user/login",
  USERINFO_URL = "/user/info",
}

export const reqLogin = (data: LoginForm) => {
  return postRequest<LoginForm, LoginResponseData>(API.LOGIN_URL, data);
};

export const reqUserInfo = () => {
  return getRequest(API.USERINFO_URL);
};
