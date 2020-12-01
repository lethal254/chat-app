import React, { useEffect, useReducer } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Chat from "./components/Chat/Chat";
import Login from "./components/Login/Login";
import UserContext from "./contexts/UserContext";
import { auth } from "./firebase";
import usersReducer from "./reducers/usersReducer";

function App() {
  const [user, dispatch] = useReducer(usersReducer, null);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch({
          type: "LOGIN",
          user: {
            id: user.uid,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          },
        });
      }
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, dispatch }} className="App">
      {!user ? <Login /> : false}
      {user ? (
        <>
          <Chat />
        </>
      ) : (
        ""
      )}

      {console.log(user)}
    </UserContext.Provider>
  );
}

export default App;
