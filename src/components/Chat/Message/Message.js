import React, { useContext, useEffect, useRef } from "react";
import userContext from "../../../contexts/UserContext";
import messageStyles from "./Message.module.css";

function Message({ content, userId }) {
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
      <p>{content}</p>
    </div>
  );
}

export default Message;
