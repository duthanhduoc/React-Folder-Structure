import * as types from './ProductItem.constants'

export const getProductItemRequested = () => ({
  type: types.GET_PRODUCT_ITEM_REQUESTED
})

export const getProductItemSuccess = (payload: ResGetProductItemApi) => ({
  type: types.GET_PRODUCT_ITEM_SUCCESS,
  payload
})

export const getProductItemFailed = payload => ({
  type: types.GET_PRODUCT_ITEM_FAILED,
  payload
})
