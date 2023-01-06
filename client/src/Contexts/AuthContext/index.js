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
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
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

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logout() {
    return signOut(auth);
  }

  function updatePhotoURL(image) {
    return currentUser.updateProfile({ photoURL: image });
  }

  function updateDisplayName(name) {
    return currentUser.updateProfile({ displayName: name });
  }

  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }
  function facebookSignIn() {
    const facebookAuthprovider = new FacebookAuthProvider();
    return signInWithPopup(auth, facebookAuthprovider);
    // signInWithPopup(auth, provider)
    //   .then((result) => {
    //     // The signed-in user info.
    //     const user = result.user;

    //     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    //     const credential = FacebookAuthProvider.credentialFromResult(result);
    //     const accessToken = credential.accessToken;

    //     // ...
    //   })
    //   .catch((error) => {
    //     // Handle Errors here.
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // The email of the user's account used.
    //     const email = error.customData.email;
    //     // The AuthCredential type that was used.
    //     const credential = FacebookAuthProvider.credentialFromError(error);

    //     // ...
    //   });
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     setCurrentUser(user);
  //     setLoading(false);
  //   });

  //   return unsubscribe;
  // }, []);

  const value = {
    ...state,
    currentUser,
    login,
    signup,
    logout,
    updatePhotoURL,
    signupWithGoogle,
    updateDisplayName,
    googleSignIn,
    facebookSignIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
//We construct a function called userAuth and wrap it in a custom hook called useContext to make it available to our app (through the use of the Context API).
export function useAuth() {
  return useContext(AuthContext);
}
