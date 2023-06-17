import axios from "axios";
import {placeUrl} from "./config";
import {GET_ALL_PLACE} from "../type/PlaceType";

export const getAllPlace = () => async (dispatch) => {
    try {
        dispatch({ type: `LOADING` });

        await axios({
            method: 'GET',
            url: placeUrl,
        }).then((res) => {
            dispatch({
                type: GET_ALL_PLACE,
                payload: res.data.data,
            });

            // console.log(res.data.data, "ini semua data place")
        });
    } catch (error) {
        dispatch({
            type: `ERROR`,
            error: error,
        });
    }
}