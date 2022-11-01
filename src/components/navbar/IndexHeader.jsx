import React, { useContext, useState } from 'react'
import {useCartDetails} from '@/context/useCartDetails'

// componentes
import NavLinkHeader from '@/components/navbar/NavLinkHeader.jsx'
import CartDetailsHeader from '@/components/navbar/CartDetailsHeader.jsx'

// imagenes
import logoSneakers from "@/assets/images/logo.svg"
import imgAvatar from "@/assets/images/image-avatar.png"


// Iconos
import MenuIcon from '@/components/icons/MenuIcon'
import CartIcon from '@/components/icons/CartIcon'
import CloseIcon from '@/components/icons/CloseIcon'


const MainHeader = () => {

    const { totalQuantityProducts } = useContext(useCartDetails)
 
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const [isOpenCart, setIsOpenCart] = useState(false)

    const handleOpenMenu = () => {
        setIsOpenMenu(true)
    }
    const handleCloseMenu = () =>{
        setIsOpenMenu(false)
    }

  return (
    <>
    <header className='container relative flex items-center mx-auto gap-8 p-4 md:py-0'>

        <button className='md:hidden' onClick={handleOpenMenu}>
            <MenuIcon />
        </button>

        <img
          src={logoSneakers}
          alt="Logo sneakers"
          className='mr-auto mb-1 h-5 md:mr-0' 
        />

            <nav className={`md:static font-bold md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0 ${isOpenMenu ? `absolute top-0 left-0 flex h-full w-4/5 flex-col gap-y-5 bg-white p-8 z-10` : `hidden` }`}>

                <button className='mb-12 md:hidden' onClick={handleCloseMenu}>
                    <CloseIcon />
                </button>

                <NavLinkHeader text="Collections"/>
                <NavLinkHeader text="Men"/>
                <NavLinkHeader text="Women"/>
                <NavLinkHeader text="About"/>
                <NavLinkHeader text="Contact"/>
            </nav>
        <div className='flex gap-4'>
            <button onClick={() => setIsOpenCart(!isOpenCart)} className='relative'>
                <CartIcon />
                <span className='absolute top-0 rigth-o translate-x-1 bg-orange-primary px-2 text-xs text-white rounded-full font-bold'> {totalQuantityProducts} </span>
            </button>
            <img src={imgAvatar} alt="/" className='w-10' />

            {
                isOpenCart && <CartDetailsHeader />
            }
            
        </div>
    </header>
    <span className='hidden container mx-auto h-[3px] w-full bg-gray-600 md:block'></span>
    </>
  )
}

export default MainHeader