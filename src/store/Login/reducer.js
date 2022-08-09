const initialState = {
    login: null,
  };
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case "LOGIN/userLogin": {
        console.log("what it is my payload, from the reducer",action.payload)
        return {
          ...state,
          ...action.payload,
        };
      }
      default: {
        return state;
      }
    }
  }




