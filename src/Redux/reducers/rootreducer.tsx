import { combineReducers } from "@reduxjs/toolkit";
import postsReducer from "./postsreducer";
const reducer = combineReducers({ postsReducer });

export default reducer;
