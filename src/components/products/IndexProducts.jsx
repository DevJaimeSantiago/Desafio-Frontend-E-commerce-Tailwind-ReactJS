import React from 'react'

// components
import DetailsProduct from '@/components/products/details/DetailsProduct'
import GalleryProducts from '@/components/products/gallery/GalleryProducts.jsx'

// imagenes
import imgProduct1 from '@/assets/images/image-product-1.jpg'
import imgProduct2 from '@/assets/images/image-product-2.jpg'
import imgProduct3 from '@/assets/images/image-product-3.jpg'
import imgProduct4 from '@/assets/images/image-product-4.jpg'

import imgProduct1Small from '@/assets/images/image-product-1-thumbnail.jpg'
import imgProduct2Small from '@/assets/images/image-product-2-thumbnail.jpg'
import imgProduct3Small from '@/assets/images/image-product-3-thumbnail.jpg'
import imgProduct4Small from '@/assets/images/image-product-4-thumbnail.jpg'



const ARRAY_IMGS = [imgProduct1, imgProduct2, imgProduct3, imgProduct4, ];
const ARRAY_IMG_SMALL = [imgProduct1Small, imgProduct2Small, imgProduct3Small, imgProduct4Small]

const MainProducts = () => {
  return (
      <main className='grid grid-cols-1 items-center gap-8 md:container md:mx-auto md:min-h-[calc(100vh-88px-3px)] md:grid-cols-2'>
            <GalleryProducts
              ARRAY_IMGS={ARRAY_IMGS}
              ARRAY_IMG_SMALL={ARRAY_IMG_SMALL} />
            <DetailsProduct />
      </main>
  )
}

export default MainProducts