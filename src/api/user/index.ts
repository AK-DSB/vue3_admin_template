import { postRequest, getRequest } from "@/utils/request";
import { LoginForm, UserInfo } from "./type";
enum API {
  LOGIN_URL = "/admin/acl/index/login",
  USERINFO_URL = "/admin/acl/index/info",
  LOGOUT_URL = "/admin/acl/index/logout",
}

export const reqLogin = (data: LoginForm) => {
  return postRequest<LoginForm, string>(API.LOGIN_URL, data);
};

export const reqUserInfo = () => {
  return getRequest<any, UserInfo>(API.USERINFO_URL);
};

export const reqLogout = () => postRequest<any, any>(API.LOGOUT_URL);
