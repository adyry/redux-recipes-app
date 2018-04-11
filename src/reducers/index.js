import { combineReducers } from "redux";
import { recipes } from "./recipes";
import { tags } from "./tags";

export const rootReducer = combineReducers({
  recipes,
  tags
});
