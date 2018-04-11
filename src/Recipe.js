import React from "react";

const Recipe = ({ recipes, removeRecipe }) => {
  return (
    <ul>
      {recipes.map(v => (
        <li key={v.id} onClick={() => removeRecipe(v.id)}>
          {v.text}
        </li>
      ))}
    </ul>
  );
};

export { Recipe };
