import { Action, combineReducers } from "redux";
import { IRootState } from "../App.duck";

// Actions
export enum RecipeTypes {
  ADD_RECIPE = "app/recipes/ADD_RECIPE",
  REMOVE_RECIPE = "app/recipes/REMOVE_RECIPE"
}

export class AddRecipe implements Action {
  public type: RecipeTypes.ADD_RECIPE = RecipeTypes.ADD_RECIPE;
  constructor(public payload: { author: string; recipe: string }) {}
}

export class RemoveRecipe implements Action {
  public type: RecipeTypes.REMOVE_RECIPE = RecipeTypes.REMOVE_RECIPE;
  constructor(public payload: { id: number }) {}
}

export type RecipeAction = AddRecipe | RemoveRecipe;

// Reducers
let id = 0;
export const recipesReducer = (
  state: IRecipeState = [],
  action: RecipeAction
): IRecipeState => {
  switch (action.type) {
    case RecipeTypes.ADD_RECIPE:
      return [
        ...state,
        {
          author: action.payload.author,
          id: id++,
          text: action.payload.recipe
        }
      ];
    case RecipeTypes.REMOVE_RECIPE:
      return [...state].filter(v => !(v.id === action.payload.id));
    default:
      return state;
  }
};

// Selectors
export const listSelector = (state: IRootState): IRecipeState =>
  state.app.recipes.list;

export default combineReducers({
  list: recipesReducer
});

export interface IRecipeState
  extends Array<{ text: string; id: number; author: string }> {}

export interface IRecipeListState {
  list: IRecipeState;
}
