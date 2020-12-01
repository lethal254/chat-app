import React, { useContext, useEffect, useReducer, useState } from "react";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import chatFormStyles from "./ChatForm.module.css";
import messagesReducer from "../../../reducers/messagesReducer";
import { database } from "../../../firebase";
import userContext from "../../../contexts/UserContext";

function Chatform() {
  const [input, setInput] = useState("");
  const { user } = useContext(userContext);

  return (
    <div className={chatFormStyles.chatForm}>
      <form
        className={chatFormStyles.form}
        onSubmit={(e) => {
          e.preventDefault();
          database.ref("messages").push({
            message: input,
            user: user,
          });
          setInput("");
        }}>
        <input
          type="text"
          value={input}
          className={chatFormStyles.input}
          onChange={(e) => {
            setInput(e.target.value);
          }}></input>
        <button type="submit" className={chatFormStyles.button}>
          <SendRoundedIcon className={chatFormStyles.MuiSvgIconRoot} />
        </button>
      </form>
    </div>
  );
}

export default Chatform;
