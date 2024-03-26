import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <>
            <section className="section1 font-extrabold border-b-4  border-black text-center  " id="section1">
                <div className="div-logo ">
                    <Link href="/">
                        <Image src="/Isotipo_Negro.svg" alt="logo" width={30} height={30} priority />
                    </Link>
                    <div className='link-home mt-3  '>
                        <strong> |</strong> <Link className="linking-link hover:text-gray-700" id="wallet-connect" href="/linking" passHref>
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
