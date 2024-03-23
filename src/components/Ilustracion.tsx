import React from 'react'
import Image from 'next/image'

const Ilustracion = () => {
    return (
        <div>
            <Image src="/ilustración.png" alt="viñeta1" width={1218} height={624} className="ilustracion" priority={true} />
        </div>
    )
}

export default Ilustracion
