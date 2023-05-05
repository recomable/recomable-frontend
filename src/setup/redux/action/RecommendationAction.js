import axios from "axios";
import {GET_PLACE_DETAILS, GET_RECOMMENDATION} from "../type/RecommendationType";
import {detailPlaceUrl, placeUrl, recommendationUrl} from "./config";

export const getRecommendation = (data, navigate) => async (dispatch) => {
    try {
        dispatch({ type: `LOADING` });

        await axios({
            method: 'POST',
            url: recommendationUrl,
            data: {user_example: data},
        }).then((res) => {
            dispatch({
                type: GET_RECOMMENDATION,
                payload: res.data.data,
            });
            navigate('/hasil');
        });
    } catch (error) {
        dispatch({
            type: `ERROR`,
            error: error,
        });
    }
}

export const getRecommendationDetail = (data) => async (dispatch) => {
    try {
        dispatch({ type: `LOADING` });

        await axios({
            method: 'POST',
            url: detailPlaceUrl,
            data: {place_name: data},
        }).then((res) => {
            dispatch({
                type: GET_PLACE_DETAILS,
                payload: res.data.data,
            });
        });
    } catch (error) {
        dispatch({
            type: `ERROR`,
            error: error,
        });
    }
}