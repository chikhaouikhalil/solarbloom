export const userDataReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_USER_DATA":
      return action.payload;
    default:
      return state;
  }
};
export const plantsDataReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_PLANTS_DATA":
      return action.payload;
    default:
      return state;
  }
};
