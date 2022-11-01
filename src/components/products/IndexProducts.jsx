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

const objectProduct = {
  id: 1,
  title: "Fall Limited Edition Sneakers",
  description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  subtitle: "SNEAKER COMPANY",
  price: 250,
  discount: 0.5,
  imagesMain: ARRAY_IMGS,
  imagesSmall: ARRAY_IMG_SMALL,
}

const MainProducts = () => {
  return (
      <main className='grid grid-cols-1 items-center gap-8 md:container md:mx-auto md:min-h-[calc(100vh-88px-3px)] md:grid-cols-2 xl:max-w-[1100px] xl:mx-auto xl:min-h-[600px]' >
            <GalleryProducts
              ARRAY_IMGS={objectProduct.imagesMain}
              ARRAY_IMG_SMALL={objectProduct.imagesSmall} />
            <DetailsProduct objectProduct={objectProduct} />
      </main>
  )
}

export default MainProducts