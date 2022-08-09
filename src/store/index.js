import { applyMiddleware, compose } from "redux";
import {configureStore} from "@reduxjs/toolkit"
import login from "./Login/reducer"

import ReduxThunk from "redux-thunk";
import reducer from "./rootReducer";
import rootReducer from "./rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(ReduxThunk));

// const store = configureStore(reducer, enhancer);
// const store = configureStore({
//     reducer:{
//        login: login,
    
//     }
//   })

  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })})

export default store;


