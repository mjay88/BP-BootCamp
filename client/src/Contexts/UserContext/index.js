import React, {
	createContext,
	useContext,
	useReducer,
	useEffect,
	useState,
} from "react";
import axios from "axios";
import { API } from "..utils/API";

//we will track the users progress/scores here
//to be able to track the progress we will need to create a function to help us track all the routes the user has been too...
//can we do this with the help of react router dom?
//we can use location to determine were we are currently at, we can then take that url and and use it to look up the index of currentRoute, then we can render previous and next based on this index...we will need to be inside of routes to use location

//getCurrentLocation function should return the current location so we can navigate forward or backwards, we can use location from react router dom...can we look up index by url?
const initialState = {
	fetchingUser: true,
	user: null,
	currentLocation: null,
	precedingRoute: null,
	nextRoute: null,
};

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
		//need to add this to userController with the progress model
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
		//need to add this to userController
		case "UPDATE_PROGRESS":
			return {
				...state,
				updateProgress: action.payload,
			};
		//reset progress
		//need to add to usercontroller
		case "RESET_PROGRESS":
			return {
				...state,
				resetProgress: action.payload,
			};
		//reset test score
		//need to add to userController
		case "RESET_SCORE":
			return {
				...state,
				resetScore: action.payload,
			};

		default:
			return state;
	}
};
//create context
export const UserContext = createContext();

//provider component
export const GlobalProvider = (props) => {
	//the reducer takes in state and a dispatch function
	const [state, dispatch] = useReducer(globalReducer, initialState);

	//fetch call to database for user...we need to update our model
	useEffect(() => {
		getCurrentUser();
	}, []);

	//action : SET_USER
	const getCurrentUser = async () => {
		if (user) {
			API.getUser(user.uid).then((res) => {
				dispatch({ type: "SET_USER", payload: res.data[0].userName });
			});
		}
	};
};
