import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <>
            <section className="section1 " id="section1">
                <div className="div-logo font-extrabold ">
                    <Image src="/Isotipo_Negro.svg" alt="logo" width={30} height={30} priority />
                    <div className='link-home mt-3  '>
                        <strong> |</strong> <Link className="linking-link hover:text-gray-700" id="wallet-connect" href="/" passHref>
                            <strong> LINKING</strong>
                        </Link>  <strong> |</strong>
                        <Link className="inventory-link hover:text-gray-700" id="wallet-connect" href="/" passHref>
                            <strong>  INVENTORY </strong>
                        </Link> <strong> |</strong>
                    </div>
                    <div className="btn-nav">
                        <Link className="wallet-button text-button wp-button" id="wallet-connect" href="/" passHref>
                            WALLET
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Navbar;
