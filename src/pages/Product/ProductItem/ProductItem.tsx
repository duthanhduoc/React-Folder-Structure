import React, { useEffect } from 'react'
import MainLayout from 'src/layouts/MainLayout'
import { connect } from 'react-redux'
import { getProductItem } from './ProductItem.thunk'
import { useParams } from 'react-router-dom'
import { handlePrice } from 'src/helpers/string'

interface ReduxProps {
  productItem: Product
  getProductItem(id: string): Promise<ResGetProductItem>
}
interface Props extends ReduxProps {}
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

const mapStateToProps = state => ({
  productItem: state.productItem.productItem
})

const mapDispatchToProps = {
  getProductItem
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem)
