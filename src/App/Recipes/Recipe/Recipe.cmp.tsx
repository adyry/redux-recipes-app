import React, { SFC } from "react";

import Divider from "material-ui/Divider";
import { ListItem } from "material-ui/List";
import { IDispatchProps, IOwnProps } from "./Recipe.cnt";

const Recipe: SFC<IOwnProps & IDispatchProps> = ({
  id,
  onRecipeClick,
  author,
  text
}) => {
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
