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
import { API } from "../../utils/API";
// We first build a context provider called AuthProvider and then pass in the children. Then we import a few of Firebase methods (createUserWithEmailAndPassword , signInWithEmailAndPassword , and signOut) from our Firebase auth module. These methods are used to develop functions for creating, logging in, and signing out users through email and password. We also import a method named onAuthStateChanged, which monitors authentication status changes and returns the current user. We construct a function called useAuth and wrap it in a custom hook called useContext to make it available to our app (through the use of the Context API).

//2.

const initialState = {
	loggedIn: false,
	user: null,
	fetchingUser: true,
};
//
const globalReducer = (state, action) => {
	switch (action.type) {
		//get user info (progress, test scores...) from mongodb
		case "SET_USER":
			return {
				...state,
				user: action.payload,
				fetchingUser: false,
			};
		//set currentlocation
		case "SET_LOCATION":
			return {
				...state,
				currentLocation: action.payload,
			};
		//set preceding route
		case "SET_PRECEDING":
			return {
				...state,
				precedingLocation: action.payload,
			};
		//set next route
		case "SET_NEXT":
			return {
				...state,
				nextLocation: action.payload,
			};
		//update progress
		case "UPDATE_PROGRESS":
			return {
				...state,
				updateProgress: action.payload,
			};
		//reset progress
		case "RESET_PROGRESS":
			return {
				...state,
				resetProgress: action.payload,
			};
		//reset test score
		case "RESET_SCORE":
			return {
				...state,
				resetScore: action.payload,
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
	const [user, setUser] = useState({});

	async function signUpWithGoogle() {
		auth
			.signInWithPopup(provider)
			.then((result) => (result.additionalUserInfo.isNewUser ? result : false))
			.then((result) => {
				if (result) {
					const newUser = {
						uid: result.user.uid,
						userName: result.user.displayName,
					};
					console.log(newUser);
					API.saveUser(newUser);
				}
			})
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

	// function updatePhotoURL(image) {
	//   return currentUser.updateProfile({ photoURL: image });
	// }

	// function updateDisplayName(name) {
	//   return currentUser.updateProfile({ displayName: name });
	// }

	function googleSignIn() {
		const googleAuthProvider = new GoogleAuthProvider();
		return signInWithPopup(auth, googleAuthProvider);
	}
	function facebookSignIn() {
		const facebookAuthprovider = new FacebookAuthProvider();
		return signInWithPopup(auth, facebookAuthprovider);
	}

	// useEffect(() => {
	//   const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
	//     console.log("Auth", currentuser);
	//     setUser(currentuser);
	//   });

	//   return () => {
	//     unsubscribe();
	//   };
	// }, []);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setUser(user);
			setLoading(false);
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
		user,
		login,
		signup,
		logout,
		// updatePhotoURL,
		signUpWithGoogle,
		// updateDisplayName,
		googleSignIn,
		facebookSignIn,
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
};
//We construct a function called userAuth and wrap it in a custom hook called useContext to make it available to our app (through the use of the Context API).
export function useAuth() {
	return useContext(AuthContext);
}
