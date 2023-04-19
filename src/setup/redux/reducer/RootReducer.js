import { combineReducers } from "redux";
import placeReducer from "./PlaceReducer";

export default combineReducers({
    place: placeReducer
});
