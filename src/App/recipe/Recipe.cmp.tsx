import Divider from "material-ui/Divider";
import { List, ListItem } from "material-ui/List";
import React from "react";

export interface IProps {
  onRecipeClick: any;
  recipes: any[];
}

const Recipe = ({ onRecipeClick, recipes }: IProps) => {
  return (
    <List>
      {recipes.map(v => (
        <div key={v.id}>
          <ListItem
            // onClick={onRecipeClick(v.id)}
            primaryText={v.author}
            secondaryText={<p>{v.text}</p>}
            secondaryTextLines={2}
          />
          <Divider inset={true} />
        </div>
      ))}
    </List>
  );
};

export { Recipe };
