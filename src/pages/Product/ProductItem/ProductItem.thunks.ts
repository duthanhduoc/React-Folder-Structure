import * as actions from "./ProductItem.actions"
import { getProductItemApi } from "src/apis/product.api"

export const getProductItem = (id: string) => dispatch => {
  dispatch(actions.getProductItemRequested())
  return getProductItemApi(id)
    .then(res => dispatch(actions.getProductItemSuccess(res)))
    .catch(err => Promise.reject(dispatch(actions.getProductItemFailed(err))))
}
