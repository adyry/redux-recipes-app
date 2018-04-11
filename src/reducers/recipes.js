const recipes = (state = [], action) => {
  switch (action.type) {
    case "ADD_RECIPE":
      return [...state, { text: action.text, id: action.id }];
    case "REMOVE_RECIPE":
      return [...state].filter(v => !(v.id === action.id));
    default:
      return state;
  }
};

export { recipes };
