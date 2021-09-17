import { axios } from "../../../utils";
import { LoginUrl, SignupUrl } from "../Api";

axios.defaults.withCredentials = true;

export const signup = async (data) => {
  try {
    let resp = await axios.post(SignupUrl(), data);
    return resp;
  } catch (err) {
    return { error: true, message: err.response.data };
  }
};

export const login = async (data) => {
  try {
    let { data: userInfo } = await axios.post(LoginUrl(), data);
    if (userInfo) localStorage.setItem("userName", userInfo.name);
    return "done";
  } catch (err) {
    console.log("err is", err);
    return { error: true, message: err.response.data };
  }
};
