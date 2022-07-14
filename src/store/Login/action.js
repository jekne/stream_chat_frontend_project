import axios from "axios";
import { apiUrl } from "../../config/constants";


export function loginUser(data) {
  return {
    type: "LOGIN/userLogin",
    payload: data,
  };
}

export function createLogin(userId) {
  return async function thunk(dispatch, getState) {
    try {
      const response = await axios.get(`${apiUrl}token?userId=${userId}`);

      const login = response.data.login;

      dispatch(loginUser(login));
    } catch (e) {}
  };
}