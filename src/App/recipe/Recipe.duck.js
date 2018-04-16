import { combineReducers } from "redux";

// Actions
const ADD_RECIPE = "app/recipes/ADD_RECIPE";
const REMOVE_RECIPE = "app/recipes/REMOVE_RECIPE";

// Reducers
export const recipesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_RECIPE:
      return [
        ...state,
        { text: action.text, id: action.id, author: action.author }
      ];
    case REMOVE_RECIPE:
      return [...state].filter(v => !(v.id === action.id));
    default:
      return state;
  }
};

// Simple Actions
let id = 0;
export const AddRecipe = (text, author) => ({
  type: ADD_RECIPE,
  id: id++,
  text,
  author
});

export const RemoveRecipe = id => ({
  type: REMOVE_RECIPE,
  id
});

// Selectors
export const listSelector = state => state.app.recipes.list;

export default combineReducers({
  list: recipesReducer
});
