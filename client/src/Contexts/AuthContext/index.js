//1.
import React, { useEffect, useState, useReducer, useContext } from "react";
import { auth, provider } from "../../firebase";
import firebase from "firebase/app";

//2.

const initialState = {
  loggedIn: false,
};

const globalReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOGGED_IN":
      return {
        ...state,
        loggedIn: action.payload,
      };

    default:
      return state;
  }
};

export const AuthContext = React.createContext(initialState);

export function useAuth() {
  return useContext(AuthContext);
}

//3.
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  const [currentUser, setCurrentUser] = useState();

  async function signUpWithGoogle() {
    auth
      .signInWithPopup(provider)
      .then((result) => (result.additionalUserInfo.isNewUser ? result : false));
    //access the user through result.user.displayName
    //result.user.uid
    //.then to send user to mongodb
    //.then change dispatch to true for loggedIn
  }

  const value = {
    ...state,
    signUpWithGoogle,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
