const mockProducts = [
  {
    id: '1',
    name: 'Iphone',
    quantity: 100,
    price: 27000000
  },
  {
    id: '2',
    name: 'Samsung',
    quantity: 28,
    price: 22000000
  },
  {
    id: '3',
    name: 'Nokia',
    quantity: 10,
    price: 15000000
  },
  {
    id: '4',
    name: 'Sony',
    quantity: 44,
    price: 25000000
  }
]

export const getProductListApi = (): Promise<ResGetProductApi> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: {
          products: mockProducts
        },
        message: 'Lấy sản phẩm thành công'
      })
    }, 100)
  })

export const getProductItemApi = (id: string): Promise<ResGetProductItemApi> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = mockProducts.find(product => product.id === id)
      if (product) {
        resolve({
          data: {
            product
          },
          message: 'Lấy sản phẩm thành công'
        })
      } else {
        reject(new Error('Không tìm thấy sản phẩm'))
      }
    }, 100)
  })
