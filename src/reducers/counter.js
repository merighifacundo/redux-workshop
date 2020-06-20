



export const counter = (state = {count: 0}, action) => {
  if (action.type === "increment-counter") {
    return { ...state, count: state.count + 1  };
  }
  return state;
}
