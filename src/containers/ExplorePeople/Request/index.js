import { axios } from "../../../utils";
import { fetchPeopleUrl, followingUrl} from "../Api";

export const fetchPeopleList = async () => {
  try {
    let resp = await axios.get(fetchPeopleUrl());
    return resp;
  } catch (err) {
    return { error: true, message: err.response.data };
  }
};

export const addFollowing = async (data) => {
  try {
    let resp = await axios.post(followingUrl(),data);
    return resp;
  } catch (err) {
    return { error: true, message: err.response.data };
  }
};

export const deleteFollowing = async (data) => {
  try {
    let resp = await axios.delete(followingUrl(),{data:data});
    return resp;
  } catch (err) {
    return { error: true, message: err.response.data };
  }
};
