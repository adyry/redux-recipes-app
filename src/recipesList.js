import { connect } from "react-redux";
import { Recipe } from "./Recipe";
import { removeRecipe } from "./actions/index";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  removeRecipe: id => dispatch(removeRecipe(id))
});

const RecipesList = connect(mapStateToProps, mapDispatchToProps)(Recipe);

export { RecipesList };
