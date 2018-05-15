export const toLocalStorage = (state: any): any => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("todoapp", serializedState);
  } catch (e) {
    window.console.log(e);
  }
};

export const fromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("todoapp");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    window.console.log(e);
    return undefined;
  }
};
