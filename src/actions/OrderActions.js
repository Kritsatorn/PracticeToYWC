import Axios from 'axios';
import {ORDERS_FETCH} from './types';

export const orderFetch = () => {

  return dispatch  => {
    Axios.get(process.env.REACT_APP_API_URL + "/orders").then(
      res => {
        dispatch({ type: ORDERS_FETCH, payload : res.data});
      }
    )
  }
}

export const orderDelete = id => {
  return dispatch => {
    Axios.delete(process.env.REACT_APP_API_URL + "/orders"+ id).then(
      res => {
        Axios.get(process.env.REACT_APP_API_URL + "/orders").then(
          res => {
            dispatch({ type: ORDERS_FETCH, payload : res.data});
          }
        )
      }
    )
  }
}
