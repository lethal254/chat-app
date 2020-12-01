const messagesReducer = (state, action) => {
  switch (action.type) {
    case "SEND_MESSAGE":
      return action.message;
  }
};
export default messagesReducer;
