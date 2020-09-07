import { combineReducers } from 'redux'
import { AppReducer } from 'src/App/App.reducers'
import { loginReducer } from 'src/pages/Login/Login.reducer'
import { ProductListReducer } from 'src/pages/Product/ProductList/ProductList.reducer'
import { productItemReducer } from 'src/pages/Product/ProductItem/ProductItem.reducer'

export default combineReducers({
  app: AppReducer,
  login: loginReducer,
  productList: ProductListReducer,
  productItem: productItemReducer
})
