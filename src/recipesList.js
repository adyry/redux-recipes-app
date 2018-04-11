import React from "react";
import { connect } from "react-redux";
import { Recipe } from "./Recipe";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({});

const RecipesList = connect(mapStateToProps, mapDispatchToProps)(Recipe);

export { RecipesList };
