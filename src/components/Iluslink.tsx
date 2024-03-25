import React from 'react'
import Image from 'next/image'

const Iluslink = () => {
    return (
        <>
            <div className="ilustracion-container">
                <div className="ilustracion hidden sm:block">
                    <Image className='ilustlink' src="/ilustracion-link.png" alt="viñetalink" width="1080" height="1083" />
                </div>
            </div>
        </>
    )
}

export default Iluslink
