import axios from "axios";
import { GET_TRANASACTIONS } from "./types";
const baseURL = "http://localhost:8080";

export const getTransGetAll = () => {
    return async(dispatch) => {
        await axios.get(baseURL + "/Transactions")
            .then((resp) => {
                dispatch({
                    type: GET_TRANASACTIONS,
                    payload: resp.data.data,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }
};

