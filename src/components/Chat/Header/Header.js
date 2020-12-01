import { Avatar } from "@material-ui/core";
import React, { useContext } from "react";
import headerStyles from "./Header.module.css";
import userContext from "../../../contexts/UserContext";
import { auth } from "../../../firebase";

function Header() {
  const { user, dispatch } = useContext(userContext);
  console.log(user);
  return (
    <div className={headerStyles.header}>
      <Avatar alt="user" src={user.photoURL} />
      <h3>{user.displayName}</h3>
      <button
        className={headerStyles.button}
        onClick={() => {
          auth.signOut().then(() => {
            dispatch({ type: "LOGOUT", user: null });
          });
        }}>
        Logout
      </button>
    </div>
  );
}

export default Header;
