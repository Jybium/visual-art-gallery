export const Reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      //   return state.map((todo) => {
      //     if (todo.id === action.id) {
      //       return { ...todo, complete: !todo.complete };
      //     } else {
      //       return todo;
      //     }
      //   });
      return state.map((step) => {
        if (step.id === action.id) {
          return { ...state, complete: true };
        } else {
          return step;
        }
      });
    default:
      return state;
  }
};
