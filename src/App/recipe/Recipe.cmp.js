import React from "react";
import { List, ListItem } from "material-ui/List";
import Divider from "material-ui/Divider";

const Recipe = ({ RemoveRecipe, recipes }) => {
  return (
    <List>
      {recipes.map(v => (
        <div key={v.id}>
          <ListItem
            onClick={() => RemoveRecipe(v.id)}
            primaryText="Brunch this weekend?"
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

// b
