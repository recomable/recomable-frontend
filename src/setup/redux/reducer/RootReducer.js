import { combineReducers } from "redux";
import placeReducer from "./PlaceReducer";
import recommendationReducer from "./RecommendationReducer";

export default combineReducers({
    place: placeReducer,
    recommendation: recommendationReducer,
});
