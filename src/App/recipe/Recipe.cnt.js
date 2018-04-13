import { connect } from "react-redux";
import { Recipe } from "./Recipe.cmp";
import { RemoveRecipe, listSelector } from "./Recipe.duck";

const mapStateToProps = state => ({
  recipes: listSelector(state)
});

const mapDispatchToProps = dispatch => ({
  RemoveRecipe: id => dispatch(RemoveRecipe(id))
});

const RecipesList = connect(mapStateToProps, mapDispatchToProps)(Recipe);

export { RecipesList };
