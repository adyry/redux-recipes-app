let id = 0;
export const AddRecipe = text => ({
  type: "ADD_RECIPE",
  id: id++,
  text
});

export const RemoveRecipe = id => ({
  type: "REMOVE_RECIPE",
  id
});
