const usersReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.user;
    case "LOGOUT":
      return action.user;
  }
};
export default usersReducer;
