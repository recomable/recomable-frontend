import {GET_ALL_PLACE, GET_MY_PLACE_DETAIL, POST_PREFERENCE} from '../type/PlaceType';

const initialState = {
    dataMyPlace: [],
    dataPlace: [],
    dataPreference: [],
    isLoading: false,
    error: null,
}

const placeReducer = (state = initialState, action) => {
    const {type, payload, error} = action;
    switch (type) {
        case `LOADING`:
            return {
                ...state,
                isLoading: true,
            };
        case `${GET_MY_PLACE_DETAIL}`:
            return {
                ...state,
                isLoading: false,
                dataMyPlace: payload,
            }
        case `${GET_ALL_PLACE}`:
            return {
                ...state,
                isLoading: false,
                dataPlace: payload,
            }
        case `${POST_PREFERENCE}`:
            return {
                ...state,
                isLoading: false,
                dataPlace: payload,
            }
        default:
            return {
                ...state,
            };
    }
}

export default placeReducer;

