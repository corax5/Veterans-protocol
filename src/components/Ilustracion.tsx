import React from 'react'
import Image from 'next/image'

const Ilustracion = () => {
    return (
        <>
            <div className="ilustracion-container">
                <div className="ilustracion hidden sm:block">
                    <Image className='ilust' src="/ilustración.png" alt="viñeta1" width="1250" height="2489" />
                </div>
            </div>
        </>
    )
}

export default Ilustracion
