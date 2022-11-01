import { useContext, useState } from 'react'

// components
import { useCartDetails } from '@/context/useCartDetails'

// iconos
import CartIcon from '@/components/icons/CartIcon.jsx'


export default ({objectProduct}) => { 

    const { addCartProducts } = useContext(useCartDetails)
    const [count, setCount] = useState(0)
    
    const incrementCount = () => (
        setCount(count + 1)
    )
    const decrementCount = () => { 
        if (count === 0) return
        setCount(count - 1)
     }

     const handleAddToCart = () => 
        {addCartProducts({
            img: objectProduct.imagesSmall[0],
            id: objectProduct.id,
            discountPrice: (objectProduct.price * (1 - objectProduct.discount )).toFixed(2),
            subtitle:objectProduct.subtitle,
            title:objectProduct.title,
            quantity: count || 1,
        })

        setCount(0)
    }

    return (
        <section className="container mx-auto px-4 md:px-0">
            <p className="mb-3 text-orange-primary font-bold uppercase tracking-wide">
                {objectProduct.subtitle}
            </p>
            <h2 className='mb-4 font-bold text-3xl'>
                {objectProduct.title}
            </h2>

            <p className="text-dark-grayish-blue mb-5">
                {objectProduct.description}
            </p>
            <div className="mb-5 grid grid-cols-3 font-bold md:grid-cols-[1fr_3fr] items-center gap-4 md:gap-1">
                <span className="text-3xl">
                    ${(objectProduct.price * (1 - objectProduct.discount )).toFixed(2)}
                </span>
                <span className="bg-pale-orange rounded-md mr-auto py-1 px-2 text-orange-primary">
                    {objectProduct.discount * 100}%
                </span>
                <span className="line-through text-right text-grayish-blue text-lg md:cols-span-3 md:text-left">
                    ${objectProduct.price.toFixed(2)}
                </span>
            </div>
            <div className="grid grid-cols-3 gap-4 font-bold md:grid-cols-[1fr_1.7fr]">
                {/* contador */}
                <div className="col-span-3 bg-gray-200 flex items-baseline justify-between py-2 rounded-md px-5 pb-3 md:col-span-1">
                    <button className='text-3xl text-orange-primary' onClick={decrementCount}>-</button>
                    <span className='text-xl'> {count} </span>
                    <button className='text-3xl text-orange-primary' onClick={incrementCount}>+</button>
                </div>
                
                {/* boton agregar al carrito */}
                <button className="col-span-3 flex gap-x-3 items-center bg-orange-primary text-white py-3 rounded-md justify-center hover:bg-orange-700 transition-all md:col-span-1" onClick={handleAddToCart}
                    >
                    <CartIcon className='fill-white'/>
                    <span>Add to cart</span>
                </button>
            </div>
        </section>
    )
 }