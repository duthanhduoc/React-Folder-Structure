import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ProductRoutes from './ProductRoutes'
import LoginRoutes from './LoginRoutes'
import HomeRoutes from './HomeRoutes'

export default function Routes() {
  return (
    <BrowserRouter>
      <HomeRoutes />
      <ProductRoutes />
      <LoginRoutes />
    </BrowserRouter>
  )
}
