import React, { useState } from 'react'

// componentes
import NavLinkHeader from './NavLinkHeader'

// imagenes
import logoSneakers from "@/assets/images/logo.svg"
import imgAvatar from "@/assets/images/image-avatar.png"

// Iconos
import MenuIcon from '@/components/icons/MenuIcon'
import CartIcon from '@/components/icons/CartIcon'
import CloseIcon from '@/components/icons/CloseIcon'

const MainHeader = () => {

    const [NavClas, setNavClass] = useState('hidden font-bold md:static md:mr-auto md:flex md:flex-row md:gap-4 md:p-0')

    const handleOpenMenu = () => {
        setNavClass('absolute top-0 left-0 flex h-full w-4/5 flex-col gap-y-5 bg-white p-8 font-bold md:static md:mr-auto md:flex md:flex-row md:gap-4 md:p-0')
    }
    const handleCloseMenu = () =>{
        setNavClass('hidden font-bold md:static md:mr-auto md:flex md:flex-row md:gap-4 md:p-0')
    }

  return (
    <>
    <header className='container flex items-center mx-auto gap-8 p-4 md:py-0'>

        <button className='md:hidden' onClick={handleOpenMenu}>
            <MenuIcon />
        </button>

        <img src={logoSneakers} alt="Logo sneakers" className='mr-auto mb-1 h-5 md:mr-0' />

            <nav className={NavClas}>

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
            <button>
                <CartIcon />
            </button>
            <img src={imgAvatar} alt="/" className='w-10' />
        </div>
    </header>
    <span className='hidden container mx-auto h-[3px] w-full bg-gray-600 md:block'></span>
    </>
  )
}

export default MainHeader