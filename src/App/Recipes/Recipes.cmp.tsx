import { List } from "material-ui/List";
import React from "react";
import Recipe from "./Recipe/Recipe.cnt";

export interface IProps {
  recipes: any[];
}

const Recipes = ({ recipes }: IProps) => {
  return (
    <List>
      {recipes.map(v => (
        <Recipe key={v.id} id={v.id} text={v.text} author={v.author} />
      ))}
    </List>
  );
};

export { Recipes };
