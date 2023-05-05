import {GET_PLACE_DETAILS, GET_RECOMMENDATION} from "../type/RecommendationType";

const initialState = {
    dataRecommendation: [],
    dataPlaceDetail: [],
    isLoading: false,
    error: null,
}

const recommendationReducer = (state = initialState, action) => {
    const {type, payload, error} = action;
    switch (type) {
        case `LOADING`:
            return {
                ...state,
                isLoading: true,
            };
        case GET_RECOMMENDATION:
            return {
                ...state,
                isLoading: false,
                dataRecommendation: payload,
            };
        case GET_PLACE_DETAILS:
            return {
                ...state,
                isLoading: false,
                dataPlaceDetail: payload,
            }
        case `ERROR`:
            return {
                ...state,
                isLoading: false,
                error: error,
            };
        default:
            return {
                ...state,
            };
    }
}

export default recommendationReducer
