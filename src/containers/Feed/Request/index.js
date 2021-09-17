import { axios } from "../../../utils";
import {logoutUrl, uploadPostUrl, userFeedUrl} from "../Api";

export const uploadPost = async (data) => {
  try {
    let resp = await axios.post(uploadPostUrl(),data);
    return resp;
  } catch (err) {
    return { error: true, message: err.response.data };
  }
};

export const getUserFeed = async () => {
  try {
    let resp = await axios.get(userFeedUrl());
    return resp;
  } catch (err) {
    return { error: true, message: err.response.data };
  }
};

export const LogoutUser = async () => {
  try {
    let resp = await axios.delete(logoutUrl());
    return resp;
  } catch (err) {
    return { error: true, message: err.response.data };
  }
};


