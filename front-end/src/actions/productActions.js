import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL
} from '../constants/productConstants'
import axios from 'axios'

// thunk allows us to make a fxn within a fxn
export const listProducts = () => async (dispatch) => {

    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })
        const { data } = await axios.get('/api/products')
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payloaad: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }


}
