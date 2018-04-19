import Divider from "material-ui/Divider";
import { ListItem } from "material-ui/List";
import React from "react";

export interface IProps {
  id: number;
  onRecipeClick: any;
  author: string;
  text: string;
}

const Recipe = ({ id, onRecipeClick, author, text }: IProps) => {
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
