import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers/rootreducer";

const store = configureStore({
  reducer,
});

export default store;
