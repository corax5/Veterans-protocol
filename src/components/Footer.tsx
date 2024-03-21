import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className="footer-copyright">
            <div className='links mr-1 '>
                <Link href="/">
                    <span className="home-button  mr-1 ml-1 hover:font-bold " id="linking">HOME /</span>
                </Link>
                <Link href="/linking">
                    <span className="inventory-button mr-1 hover:font-bold " id="inventory">  LINKING / </span>
                </Link>
                <Link href="/inventory">
                    <span className="inventory-button mr-1 hover:font-bold " id="inventory"> INVENTORY</span>
                </Link>
            </div>
            <div className="div-logo-footer   ">
                <Image src="/Isotipo_Negro.svg" alt="logo" width={20} height={20} />
            </div>
            <p className="copyright" id="copyright" >© 2023 Veterans. All
                rights reserved.</p>

        </div>
    );
};

export default Footer;
