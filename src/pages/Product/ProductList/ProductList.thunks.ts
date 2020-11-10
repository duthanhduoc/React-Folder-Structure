import * as actions from "./ProductList.actions"
import { getProductListApi } from "src/apis/product.api"

export const getProductList = () => dispatch => {
  dispatch(actions.getProductListRequested())
  return getProductListApi()
    .then(res => dispatch(actions.getProductListSuccess(res)))
    .catch(err => Promise.reject(dispatch(actions.getProductListFailed(err))))
}
