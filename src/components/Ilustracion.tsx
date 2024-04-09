import React from 'react'
import Image from 'next/image'

const Ilustracion = () => {
    return (
        <>
            <div className="ilustracion-container">
                <div className="ilustracion hidden sm:block">
                    <Image className='ilust' src="/Ilustracion.png" alt="viñeta1" width="1800" height="1080" priority />
                </div>
            </div>
        </>
    )
}

export default Ilustracion
