import { useEffect, useRef, useState } from 'react'

// iconos
import PreviousIcon from '@/components/icons/PreviousIcon.jsx'
import NextIcon from '@/components/icons/NextIcon.jsx'

export default ({ARRAY_IMGS = [], ARRAY_IMG_SMALL = [],isOpenModal = false,handleCloseModal = null,handleOpenModal = () => {}, ...props}) => { 
    const btnSlider = useRef(null)
    const [index, setIndex] = useState(0)

    useEffect(() => {
      isOpenModal && btnSlider.current.classList.remove('md:hidden')
    }, [isOpenModal])

    const handleClickNext = () => { 
        ( index === ARRAY_IMGS.length - 1 ) 
        ? setIndex(0) 
        : setIndex(index + 1)
     }
    const handleClickPrev = () => { 
        (index === 0) 
        ? setIndex(ARRAY_IMGS.length - 1)
        : setIndex(index - 1 )
    }

    return(
        <section {...props}>
          {
            isOpenModal && <button
                            onClick={handleCloseModal}
                            className="md:col-span-4 text-right">
                              cerrar
                            </button>
          }
            <div className='relative col-span-4 '>
                <img
                  src={ARRAY_IMGS[index]}
                  alt=""
                  className='aspect-[16/13] w-full md:aspect-[16/16] md:rounded-md md:cursor-pointer'
                  onClick={handleOpenModal}
                />

                <div ref={btnSlider} className='absolute top-1/2 left-0 -translate-y-1/2 w-full flex justify-between px-4 md:hidden'>
                    <button className='grid place-items-center bg-white w-10 h-10 rounded-full' onClick={handleClickPrev}>
                        <PreviousIcon /> 
                    </button>
                    <button className='grid place-items-center bg-white w-10 h-10 rounded-full' onClick={handleClickNext}> 
                        <NextIcon /> 
                    </button>
                </div>
            </div>
            {
              ARRAY_IMG_SMALL.map((smallImg, i) => (
                <div
                  key={smallImg}
                  onClick={() => {
                    setIndex(i)
                  }}
                  className='relative cursor-pointer rounded-md overflow-hidden'>

                  <img
                    src={smallImg}
                    alt="/"
                    className='hidden md:block md:rounded-md' 
                  /> 
                  <span className= {`absolute top-0 h-full w-full hover:bg-[rgba(255,255,255,0.5)] ${i === index && `bg-[rgba(255,255,255,0.5)]` }`}></span>
                </div>
              ))
            }
        </section>
    )
 }