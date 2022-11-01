import React from 'react'

// components
import IndexHeader from '@/components/navbar/IndexHeader'
import IndexProducts from '@/components/products/IndexProducts'

import CartDetailsProvider from '@/context/useCartDetails.jsx'

const App = () => {
  return (
    <CartDetailsProvider>
      <IndexHeader />
      <IndexProducts />
    </CartDetailsProvider>
  )
}

export default App