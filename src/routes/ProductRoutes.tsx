import React, { lazy, Suspense } from "react"
import { Switch } from "react-router-dom"
import AuthenticatedGuard from "../guards/AuthenticatedGuard"
import { PATH } from "src/constants/paths"
import Loading from "src/components/Loading/Loading"
const ProductList = lazy(
  () => import("src/pages/Product/ProductList/ProductList")
)
const ProductItem = lazy(
  () => import("src/pages/Product/ProductItem/ProductItem")
)
export default function ProductRoutes() {
  return (
    <Switch>
      <AuthenticatedGuard
        exact
        path={PATH.PRODUCT}
        component={() => (
          <Suspense fallback={<Loading />}>
            <ProductList />
          </Suspense>
        )}
      />
      <AuthenticatedGuard
        exact
        path={PATH.PRODUCT + "/:idProduct"}
        component={() => (
          <Suspense fallback={<Loading />}>
            <ProductItem />
          </Suspense>
        )}
      />
    </Switch>
  )
}
