import {
    DELETE_PREFERENCE,
    GET_ALL_PLACE,
    GET_MY_PLACE_DETAIL,
    POST_PREFERENCE,
    SAVE_PREFERENCE, SAVE_RECOMMENDATION
} from '../type/PlaceType';

const initialState = {
    dataMyPlace: [],
    dataPlace: [],
    dataPreference: [],
    dataSaveRecommendation: [],
    dataKecamatan: [],
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
                dataPreference: payload,
            }
        case `${DELETE_PREFERENCE}`:
            return {
                ...state,
                isLoading: false,
                dataPreference: state.dataPreference.filter((item) => item.place_name !== action.payload.place_name),
            }
        case `${SAVE_PREFERENCE}`:
            return {
                ...state,
                isLoading: false,
                dataPreference: payload,
            }
        case `${SAVE_RECOMMENDATION}`:
            return {
                ...state,
                isLoading: false,
                dataSaveRecommendation: payload,
            }
        default:
            return {
                ...state,
            };
    }
}

export default placeReducer;

