import { Avatar } from "@material-ui/core";
import React, { useContext, useEffect, useRef } from "react";
import userContext from "../../../contexts/UserContext";
import messageStyles from "./Message.module.css";

function Message({ content, userId, photoUrl }) {
  const { user } = useContext(userContext);
  const dummy = useRef();
  const checkUser = () => {
    if (userId === user.id) {
      return messageStyles.left;
    } else {
      return messageStyles.right;
    }
  };
  useEffect(() => {
    dummy.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <div ref={dummy} className={`${messageStyles.message} ${checkUser()}`}>
      <Avatar src={photoUrl} />
      <p className={messageStyles.content}>{content}</p>
    </div>
  );
}

export default Message;
