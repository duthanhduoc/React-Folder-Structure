import React, { useEffect } from "react"
import MainLayout from "src/layouts/MainLayout"
import { connect, ConnectedProps } from "react-redux"
import { getProductItem } from "./ProductItem.thunks"
import { useParams } from "react-router-dom"
import { handlePrice } from "src/helpers/string"

const mapStateToProps = (state: AppState) => ({
  productItem: state.productItem.productItem
})

const mapDispatchToProps = {
  getProductItem
}

const connector = connect(mapStateToProps, mapDispatchToProps)

interface Props extends ConnectedProps<typeof connector> {}

function ProductItem(props: Props) {
  const { productItem, getProductItem } = props
  const params: { idProduct: string } = useParams()
  useEffect(() => {
    const { idProduct } = params
    getProductItem(idProduct)
  }, [params, getProductItem])
  return (
    <MainLayout>
      {productItem && (
        <>
          <h2>{productItem.name}</h2>
          <p>Price: {handlePrice(productItem.price)}</p>
          <p>Quantity: {productItem.quantity}</p>
        </>
      )}
    </MainLayout>
  )
}

export default connector(ProductItem)
