import CartIcon from '@/components/icons/CartIcon.jsx'

export default () => { 
    return (
        <section className="container mx-auto px-4 md:px-0">
            <p className="mb-3 text-orange-primary font-bold uppercase tracking-wide">
                Sneaker Company
            </p>
            <h2 className='mb-4 font-bold text-3xl'>
                Fall Limited Edition Sneakers
            </h2>

            <p className="text-dark-grayish-blue mb-5">
                These low-profile sneakers are your perfect casual wear companion. Featuring a 
                durable rubber outer sole, they’ll withstand everything the weather can offer.
            </p>
            <div className="mb-5 grid grid-cols-3 font-bold md:grid-cols-[1fr_3fr] items-center gap-4 md:gap-1">
                <span className="text-3xl">
                    $125.00
                </span>
                <span className="bg-pale-orange rounded-md mr-auto py-1 px-2 text-orange-primary">
                    50%
                </span>
                <span className="line-through text-right text-grayish-blue text-lg md:cols-span-3 md:text-left">
                    $250.00
                </span>
            </div>
            <div className="grid grid-cols-3 gap-4 font-bold md:grid-cols-[1fr_1.7fr]">
                <div className="col-span-3 bg-gray-200 flex items-baseline justify-between py-2 rounded-md px-5 pb-3 md:col-span-1">
                    <button className='text-3xl text-orange-primary'>-</button>
                    <span className='text-xl'>0</span>
                    <button className='text-3xl text-orange-primary'>+</button>
                </div>
                <button className="col-span-3 flex gap-x-3 items-center bg-orange-primary text-white py-3 rounded-md justify-center hover:bg-orange-700 transition-all md:col-span-1">
                    <CartIcon className='fill-white'/>
                    <span>Add to cart</span>
                </button>
            </div>
        </section>
    )
 }