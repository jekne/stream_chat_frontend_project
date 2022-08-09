import axios from "axios";
import { apiUrl } from "../../config/constants";
import { StreamChat } from "stream-chat";

const API_KEY = "9q8cp29sk4fh";
const PORT = process.env.REACT_APP_PORT;
const client = StreamChat.getInstance(API_KEY);
// console.log(" the client",client)
export function loginUser(data) {
  return {
    type: "LOGIN/userLogin",
    payload: data,
  };
}

export function createLogin(userId) {
  return async function thunk(dispatch, getState) {
      try {
          const response = await axios.get(`${apiUrl}/token?userId=${userId}`);

        //   console.log("Response from the thunk",response)

          const token= response.data.token
        //   console.log("token " ,token);


        //   console.log("my app key",API_KEY)

          const chatClient = await client.connectUser(
                    { id: userId },
                  token
                  );
                //   console.log("what is chatClient", chatClient);
      const login = response.data;
      console.log("i am arrving here?",login)
// console.log(" the client",client)
    //   dispatch(loginUser(login)); was working with this one
      dispatch(loginUser(login));
    } catch (e) {}
  };
}

