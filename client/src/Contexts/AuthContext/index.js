//1.
import React, {
  createContext,
  useEffect,
  useState,
  useReducer,
  useContext,
} from "react";
import { auth, provider } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

// We first build a context provider called AuthProvider and then pass in the children. Then we import a few of Firebase methods (createUserWithEmailAndPassword , signInWithEmailAndPassword , and signOut) from our Firebase auth module. These methods are used to develop functions for creating, logging in, and signing out users through email and password. We also import a method named onAuthStateChanged, which monitors authentication status changes and returns the current user. We construct a function called useAuth and wrap it in a custom hook called useContext to make it available to our app (through the use of the Context API).

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

export const AuthContext = createContext(initialState);

export function useAuth() {
  return useContext(AuthContext);
}

//3.
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);
  const [loading, setLoading] = useState(true);

  const [currentUser, setCurrentUser] = useState();

  async function signupWithGoogle() {
    auth
      .signInWithPopup(provider)
      .then((result) => (result.additionalUserInfo.isNewUser ? result : false))
      .then(() => dispatch({ type: "SET_LOGGED_IN", payload: true }));
  }

  function signup(name, email, password) {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => (result.additionalUserInfo.isNewUser ? result : false));
  }

  async function login(email, password) {
    return auth
      .signInWithEmailAndPassword(email, password)
      .then(() => dispatch({ type: "SET_LOGGED_IN", payload: true }));
  }

  function logout() {
    return auth
      .signOut()
      .then(() => dispatch({ type: "SET_LOGGED_IN", payload: false }));
  }

  function updatePhotoURL(image) {
    return currentUser.updateProfile({ photoURL: image });
  }

  function updateDisplayName(name) {
    return currentUser.updateProfile({ displayName: name });
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    ...state,
    currentUser,
    login,
    signup,
    logout,
    updatePhotoURL,
    signupWithGoogle,
    updateDisplayName,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
