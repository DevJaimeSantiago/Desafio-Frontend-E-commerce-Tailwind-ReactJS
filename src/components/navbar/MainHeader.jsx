import React, { useState } from 'react'

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
    <header className='container flex items-center mx-auto gap-8 px-4 bg-gray-200 py-8'>

        <button className='md:hidden' onClick={handleOpenMenu}>
            <MenuIcon />
        </button>

        <img src={logoSneakers} alt="Logo sneakers" className='mr-auto mb-1 h-5 md:mr-0' />

            <nav className={NavClas}>

                <button className='mb-12 mt-4 ml-4 md:hidden' onClick={handleCloseMenu}>
                    <CloseIcon />
                </button>

                <a href="#">Collections</a>
                <a href="#">Men</a>
                <a href="#">Women</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>
        <div className='flex gap-4'>
            <button>
                <CartIcon />
            </button>
            <img src={imgAvatar} alt="/" className='w-10' />
        </div>
    </header>
  )
}

export default MainHeader