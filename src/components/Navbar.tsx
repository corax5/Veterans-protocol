import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <>
            <section className='section1'>
                <div className='div-logo mt-2 mb-2 ml-4 grid grid-cols-3 gap-80'>
                    <Image
                        src='/images/Isotipo_Negro.svg'
                        alt="logovets"
                        width={32}
                        height={32}
                        layout="fixed"
                        objectFit="cover"
                    />
                    <div className='linkInventory flex justify-center'>|
                        <Link href="/linking">
                            <span className="inventory-button text-button ml-1 mr-1 wp-button hover:text-white" id="inventory">LINKING</span>
                        </Link>
                        |
                        <Link href="/inventory">
                            <span className="inventory-button text-button ml-1 mr-1 wp-button hover:text-white" id="inventory">INVENTORY</span>
                        </Link>
                        |
                    </div>
                    <div className='wallet-button'>
                        <button>wallet</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar
