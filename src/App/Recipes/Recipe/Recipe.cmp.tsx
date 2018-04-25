import React from "react";
import Divider from "material-ui/Divider";
import { ListItem } from "material-ui/List";

export interface IRecipeProps {
  id: number;
  onRecipeClick: any;
  author: string;
  text: string;
}

const Recipe = ({ id, onRecipeClick, author, text }: IRecipeProps) => {
  return (
    <div key={id}>
      <ListItem
        onClick={onRecipeClick}
        primaryText={author}
        secondaryText={<p>{text}</p>}
        secondaryTextLines={2}
      />
      <Divider inset={true} />
    </div>
  );
};

export { Recipe };
