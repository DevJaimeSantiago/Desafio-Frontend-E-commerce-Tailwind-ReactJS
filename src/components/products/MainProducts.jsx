import React from 'react'

// components
import DetailsProduct from '@/components/products/DetailsProduct'
import SlideProduct from '@/components/products/SlideProduct'

const MainProducts = () => {
  return (
        <main className='grid grid-cols-1 gap-8 md:grid-cols-2 '>
            <SlideProduct />
            <DetailsProduct />
      </main>
  )
}

export default MainProducts