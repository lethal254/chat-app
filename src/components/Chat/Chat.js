import React from "react";
import Body from "./Body/Body";
import chatStyles from "./Chat.module.css";
import Chatform from "./Chatfrom/Chatform";
import Header from "./Header/Header";

function Chat() {
  return (
    <div className={chatStyles.chat}>
      <Header />
      <Body />
      <Chatform />
    </div>
  );
}

export default Chat;
