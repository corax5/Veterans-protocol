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

    const [isOpen, setIsOpen] = useState(false);





    return (
        <>
            <section className="section1 font-extrabold border-b-4  border-black text-center" id="section1">
                <div className="div-logo">
                    <Link href="/">
                        <Image src="/Isotipo_Negro.svg" alt="logo" width={37} height={31} priority />
                    </Link>
                </div>

                <div className={`w-start ml-14 md:w-${menuVisible ? 'full' : '80'} ${menuVisible ? '' : 'hidden md:block'}`} id="navbar-default">
                    <strong> |</strong> <Link className="linking-link hover:text-gray-300" id="wallet-connect" href="/linking" passHref>
                        <strong> LINKING</strong>
                    </Link>  <strong> |</strong>
                    <Link className="inventory-link hover:text-gray-300" id="wallet-connect" href="/inventory" passHref>
                        <strong>  INVENTORY </strong>
                    </Link> <strong> |</strong>
                </div>
                <div className="btn-nav">
                    <button className="wallet-button text-button wp-button" onClick={() => setIsOpen(!isOpen)}>
                        USER WALLET
                    </button>
                    <div className={`options ${isOpen ? 'open' : 'closed'}`}>
                        <div className="option hover:bg-black  hover:text-white">
                            <Link className="inventory-link  hover:text-white hover: bg" id="wallet-connect" href="/linking" passHref>
                                V-LINKING
                            </Link>
                        </div>
                        <div className="option hover:bg-black  hover:text-white">
                            <Link className="inventory-link hover:text-white" id="wallet-connect" href="/inventory" passHref>
                                INVENTORY
                            </Link>
                        </div>
                        <div className="option hover:bg-black  hover:text-white">DISCONECT</div>
                    </div>
                </div>


            </section >
        </>
    );
};

export default Navbar;
