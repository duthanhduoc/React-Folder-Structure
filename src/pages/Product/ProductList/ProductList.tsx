import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import MainLayout from 'src/layouts/MainLayout'
import { getProductList } from './ProductList.thunk'
import { Link } from 'react-router-dom'
import { PATH } from 'src/constants/paths'
import { handlePrice } from 'src/helpers/string'

interface ReduxProps {
  productList: Product[]
  getProductList(): Promise<ResGetProduct>
}
interface Props extends ReduxProps {}
const ProductList = (props: Props) => {
  const { getProductList, productList } = props

  useEffect(() => {
    getProductList()
  }, [getProductList])

  return (
    <MainLayout>
      <h2>Product List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product, index) => (
            <tr key={product.id}>
              <th>{index + 1}</th>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>{handlePrice(product.price)}</td>
              <td>
                <Link
                  className="btn btn-primary"
                  to={PATH.PRODUCT + `/${product.id}`}
                >
                  Detail
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </MainLayout>
  )
}

const mapStateToProps = state => ({
  productList: state.productList.productList
})

const mapDispatchToProps = {
  getProductList
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
