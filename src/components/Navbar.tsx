import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface ActiveLinkProps {
    href: string;
    children: React.ReactNode;
}

const ActiveLink: React.FC<ActiveLinkProps> = ({ href, children }) => {
    const router = useRouter();

    const isActive = router.pathname === href;

    return (
        <Link legacyBehavior href={href}>
            <a className={`block py-2 px-4  rounded ${isActive ? 'text-decoration-line: underline ' : ' text-decoration-line: underline; hover:bg-gray-100'}  md:hover:bg-transparent md:border-0 md:hover:text-c6a05f md:p-0   ml-auto`}>
                {children}
            </a>
        </Link>

    );
};

const Navbar = () => {

    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <>
            <section className="section1 font-extrabold border-b-4  border-black text-center" id="section1">
                <div className="div-logo">
                    <Link href="/">
                        <Image src="/Isotipo_Negro.svg" alt="logo" width={30} height={30} priority />
                    </Link>
                </div>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-0 w-10 h-10 justify-center text-sm  rounded-lg md:hidden bg-gray-400 text-black border border-black mr-1  focus:outline-none focus:ring-2 "
                    aria-controls="navbar-default"
                    aria-expanded={menuVisible ? 'true' : 'false'}
                    onClick={toggleMenu}
                    style={{ borderRightWidth: '4px' }}
                >


                    <span className="sr-only">Open menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>


                </button>
                <div className={`w-start ml-0 md:w-${menuVisible ? 'full' : '80'} ${menuVisible ? '' : 'hidden md:block'}`} id="navbar-default">
                    <strong> |</strong> <Link className="linking-link hover:text-gray-500" id="wallet-connect" href="/linking" passHref>
                        <strong> LINKING</strong>
                    </Link>  <strong> |</strong>
                    <Link className="inventory-link hover:text-gray-500" id="wallet-connect" href="/inventory" passHref>
                        <strong>  INVENTORY </strong>
                    </Link> <strong> |</strong>
                </div>
                <div className="btn-nav">
                    <Link className="wallet-button text-button wp-button" id="wallet-connect" href="/" passHref>
                        WALLET
                    </Link></div>


            </section >
        </>
    );
};

export default Navbar;
