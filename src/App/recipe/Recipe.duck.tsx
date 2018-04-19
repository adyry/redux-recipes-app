import { Action, combineReducers } from "redux";

// Actions
const ADD_RECIPE: string = "app/recipes/ADD_RECIPE";
const REMOVE_RECIPE: string = "app/recipes/REMOVE_RECIPE";

// interface IAddRecipe {
//   author: string;
//   id: number;
//   text: string;
//   type: "app/recipes/ADD_RECIPE";
// }

enum TypeKeys {
  ADD_RECIPE = "app/recipes/ADD_RECIPE",
  REMOVE_RECIPE = "app/recipes/REMOVE_RECIPE"
}

// Simple Actions
export class AddRecipe implements Action {
  public type: TypeKeys.ADD_RECIPE = TypeKeys.ADD_RECIPE;
  constructor(public payload: any) {}
}

export class RemoveRecipe implements Action {
  public type: TypeKeys.REMOVE_RECIPE = TypeKeys.REMOVE_RECIPE;
  constructor(public payload: any) {}
}

// interface IRemoveRecipe {
//   id: number;
//   type: "app/recipes/REMOVE_RECIPE";
// }

type RecipeAction = AddRecipe | RemoveRecipe;

// Reducers
let id = 0;
export const recipesReducer = (
  state: IRecipeState = [],
  action: RecipeAction
): IRecipeState => {
  switch (action.type) {
    case ADD_RECIPE:
      return [
        ...state,
        {
          author: action.payload.author,
          id: id++,
          text: action.payload.recipe
        }
      ];
    case REMOVE_RECIPE:
      return [...state].filter(v => !(v.id === action.payload.id));
    default:
      return state;
  }
};

// Selectors
export const listSelector = (state: any): IRecipeState =>
  state.app.recipes.list;

export default combineReducers({
  list: recipesReducer
});

interface IRecipeState
  extends Array<{ text: string; id: number; author: string }> {}
