import { combineReducers } from "redux";

// Actions
const ADD_RECIPE: string = "app/recipes/ADD_RECIPE";
// type ADD_RECIPE = typeof ADD_RECIPE;
interface IAddRecipe {
  author: string;
  id: number;
  text: string;
  type: "app/recipes/ADD_RECIPE";
}

const REMOVE_RECIPE: string = "app/recipes/REMOVE_RECIPE";
// type REMOVE_RECIPE = typeof REMOVE_RECIPE;
interface IRemoveRecipe {
  id: number;
  type: "app/recipes/REMOVE_RECIPE";
}

type RecipeAction = IAddRecipe | IRemoveRecipe;

// Reducers
export const recipesReducer = (
  state: IRecipeState = [],
  action: RecipeAction
): IRecipeState => {
  switch (action.type) {
    case "app/recipes/ADD_RECIPE":
      return [
        ...state,
        { text: action.text, id: action.id, author: action.author }
      ];
    case "app/recipes/REMOVE_RECIPE":
      return [...state].filter(v => !(v.id === action.id));
    default:
      return state;
  }
};

// Simple Actions
let id = 0;
export const AddRecipe = (formValues: { author: string; recipe: string }) => ({
  author: formValues.author,
  id: id++,
  text: formValues.recipe,
  type: ADD_RECIPE
});

export const RemoveRecipe = (idR: number) => ({
  id: idR,
  type: REMOVE_RECIPE
});

// Selectors
export const listSelector = (state: any): IRecipeState =>
  state.app.recipes.list;

export default combineReducers({
  list: recipesReducer
});

interface IRecipeState
  extends Array<{ text: string; id: number; author: string }> {}
