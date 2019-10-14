import Axios from 'axios';
import {PRODUCTS_FETCH ,PRODUCT_FETCH, PRODUCT_CREATE, PRODUCT_UPDATE} from './types';

export const productFetch = id => {
  return dispatch  => {
    Axios.get(process.env.REACT_APP_API_URL + "/products" + id).then(
      res => {
        dispatch({ type: PRODUCT_FETCH, payload : res.data});
      }
    )
  }
}

export const productsFetch = () => {
  return dispatch  => {
    Axios.get(process.env.REACT_APP_API_URL + "/products").then(
      res => {
        dispatch({ type: PRODUCTS_FETCH, payload : res.data});
      }
    )
  }
}

export const productDelete = id => {
  return dispatch => {
    Axios.delete(process.env.REACT_APP_API_URL + "/products" + id).then(
      res => {
        Axios.get(process.env.REACT_APP_API_URL + "/products").then(
          res => {
            dispatch({ type: PRODUCTS_FETCH, payload : res.data});
          }
        )
      }
    )
  }
}

export const productCreate = values => {
  return dispatch => {
    Axios.post(process.env.REACT_APP_API_URL + "/products", values).then(
      res => {
        dispatch({ type: PRODUCT_CREATE});
      }
    )
  }
}

export const productUpdate = (id, values) => {
  return dispatch => {
    Axios.push(process.env.REACT_APP_API_URL + "/products" + id).then(
      res => {
        Axios.get(process.env.REACT_APP_API_URL + "/products").then(
          res => {
            dispatch({ type: PRODUCT_UPDATE, payload : res.data});
          }
        )
      }
    )
  }
}