import { List } from "material-ui/List";
import React, { SFC } from "react";
import Recipe from "./Recipe/Recipe.cnt";
import { IMapProps } from "./Recipes.cnt";

const Recipes: SFC<IMapProps> = ({ recipes }) => {
  return (
    <List>
      {recipes.map(v => (
        <Recipe key={v.id} id={v.id} text={v.text} author={v.author} />
      ))}
    </List>
  );
};

export { Recipes };
