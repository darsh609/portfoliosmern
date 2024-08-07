import { configureStore } from "@reduxjs/toolkit";
// import { userReducer } from "./reducers/user";
import { loginReducer, updateReducer, userReducer } from "./reducers/user";

const store = configureStore({
  reducer: {
    user: userReducer,
    login: loginReducer,
     update: updateReducer,
  },
});

export default store;