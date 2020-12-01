import React, { useContext, useEffect, useState } from "react";
import Message from "../Message/Message";
import bodyStyles from "./Body.module.css";
import { database } from "../../../firebase";
import UserContext from "../../../contexts/UserContext";

function Body() {
  const { user } = useContext(UserContext);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    database.ref("messages").on("value", (snapshot) => {
      const messages = [];
      snapshot.forEach((childsnapshot) => {
        messages.push({
          id: childsnapshot.key,
          ...childsnapshot.val(),
        });
      });
      setMessages(messages);
    });
  }, []);

  return (
    <div className={bodyStyles.body}>
      {messages.map((message) => (
        <Message content={message.message} userId={message.user.id} />
      ))}
    </div>
  );
}

export { Body as default };
