import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
    return (
        <div className='justify-center'>
            <div className='flex justify-center  mt-4 mb-5'>
                <Link href="/">
                    <span className="linking-button text-button wp-button mr-1 hover:text-white" id="linking">HOME</span>
                </Link>
                /
                <Link href="/linking">
                    <span className="inventory-button text-button ml-1 mr-1 wp-button hover:text-white" id="inventory">LINKING</span>
                </Link>
                /
                <Link href="/inventory">
                    <span className="inventory-button text-button ml-1 mr-1 wp-button hover:text-white" id="inventory">INVENTORY</span>
                </Link>
            </div>
            <div className='logo flex justify-center'>
                <Image
                    src='/images/Isotipo_Negro.svg'
                    alt="logovets"
                    width={20}
                    height={20}
                    layout="fixed"
                    objectFit="cover"
                />
            </div>
            <div className='rights flex justify-center'> 2023 VETERANS. ALL RIGHTS RESERVED</div>
        </div>
    );
};

export default Footer;
