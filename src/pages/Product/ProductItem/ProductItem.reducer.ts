import * as types from './ProductItem.constants'
import produce from 'immer'

const initialState = {
  loading: false,
  productItem: null as Product | null
}

export const productItemReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.GET_PRODUCT_ITEM_REQUESTED:
        draft.loading = true
        draft.productItem = null
        break
      case types.GET_PRODUCT_ITEM_SUCCESS:
        draft.loading = false
        draft.productItem = action.payload.data.product
        break
      case types.GET_PRODUCT_ITEM_FAILED:
        draft.loading = false
        break
      default:
        return state
    }
  })
