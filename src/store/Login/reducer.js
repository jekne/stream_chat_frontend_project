const initialState = {
    login: [],
  };
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case "LOGIN/userLogin": {
        return {
          ...state,
          clubs: action.payload,
        };
      }
      default: {
        return state;
      }
    }
  }