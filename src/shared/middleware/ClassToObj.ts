import { Action, Dispatch, Middleware, MiddlewareAPI } from "redux";

const ClassToObj: Middleware = <S>(api: MiddlewareAPI<S>) => (
  next: Dispatch<S>
) => <A extends Action>(action: A): A => {
  console.log(action.type, action);
  let result;
  if (action.type && action.type.match(/app/)) {
    result = next(Object.assign({}, action));
  } else {
    result = next(action);
  }
  return result;
};

export default ClassToObj;
