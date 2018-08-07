type ActionCreators<T extends string> = {
  [key in T]: <P>(payload: P) => { type: key; payload: P }
};

export function factory<T extends string>(types): ActionCreators<T> {
  const actionCreators = {};
  for (const type in types) {
    actionCreators[type] = payload => ({ type, payload });
  }
  return actionCreators as ActionCreators<T>;
}
