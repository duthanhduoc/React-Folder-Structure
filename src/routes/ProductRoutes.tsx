import React from 'react'
import AuthenticatedGuard from '../guards/AuthenticatedGuard'
import ProductList from '../pages/Product/ProductList/ProductList'
import { Switch } from 'react-router-dom'
import { PATH } from 'src/constants/paths'
import ProductItem from 'src/pages/Product/ProductItem/ProductItem'

export default function ProductRoutes() {
  return (
    <Switch>
      <AuthenticatedGuard exact path={PATH.PRODUCT} component={ProductList} />
      <AuthenticatedGuard
        exact
        path={PATH.PRODUCT + '/:idProduct'}
        component={ProductItem}
      />
    </Switch>
  )
}
