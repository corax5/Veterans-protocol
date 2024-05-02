import React from 'react'
import Image from 'next/image'

const Ilustracion = () => {
    return (
        <>

            <Image className='ilust hidden sm:block' src="/Ilustracion.png" alt="viñeta1" width="1509" height="2489" priority />

        </>
    )
}

export default Ilustracion
