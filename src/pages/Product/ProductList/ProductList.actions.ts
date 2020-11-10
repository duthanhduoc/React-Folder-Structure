import * as types from "./ProductList.constants"

export const getProductListRequested = () => ({
  type: types.GET_PRODUCT_LIST_REQUESTED
})

export const getProductListSuccess = payload => {
  return {
    type: types.GET_PRODUCT_LIST_SUCCESS,
    payload
  }
}

export const getProductListFailed = payload => ({
  type: types.GET_PRODUCT_LIST_FAILED,
  payload
})
