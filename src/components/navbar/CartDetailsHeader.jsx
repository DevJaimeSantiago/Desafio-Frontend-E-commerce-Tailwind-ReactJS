import { useContext } from "react"

// components
import {useCartDetails} from '@/context/useCartDetails.jsx'

// iconos
import DeleteIcon from '@/components/icons/DeleteIcon'


export default () => { 
    
    const { cartProducts, deleteCartProducts } = useContext(useCartDetails)

    return (
        <section className='absolute top-[125%] left-0 z-10 w-full md:max-w-md md:left-full md:-translate-x-full md:top-full'>
                <div className="mx-4 bg-white rounded-md shadow-2xl">
                    <h4 className='px-6 py-2 font-bold text-lg'>Cart</h4>
                    <hr />
                    {
                        cartProducts.length === 0 && <p className="py-16 text-center">Your cart is empty</p>
                    }
                    {
                        cartProducts.map(product => (

                            <article key={product.id} className='grid gap-6 grid-cols-[1fr_4fr_1fr] px-6 py-8 items-center'>
                                <img src={product.img} alt="" className='rounded-md' />
                                <div>
                                    <h6> {product.subtitle} </h6>
                                    <p>
                                        <span>${product.discountPrice} x {product.quantity} </span> <span className='font-bold'>${(product.discountPrice * product.quantity).toFixed(2)} </span>
                                    </p>
                                </div>
                                {/* Delete button */}
                                <button className='ml-auto' onClick={() => deleteCartProducts(product.id)}>
                                    <DeleteIcon className='hover:fill-orange-primary' />
                                </button>
                            </article>
                        ))
                    }

                    {
                        cartProducts.length !== 0 && (
                            // boton Checkout
                            <div className='px-6 pb-8'>
                                <button className='py-4 text-white w-full bg-orange-primary hover:bg-orange-700 transition-all rounded-md'>
                                    Checkout
                                </button>
                            </div>
                        )
                    }

                </div>
            </section>
    )
 }