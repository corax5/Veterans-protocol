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
            <a className={`block py-2 px-4 rounded ${isActive ? 'text-decoration-line: underline ' : 'text-decoration-line: underline; hover:bg-gray-100'} md:hover:bg-transparent md:border-0 md:hover:text-c6a05f md:p-0 ml-auto`}>
                {children}
            </a>
        </Link>
    );
};

const Navbar = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isConnect, setIsConnect] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleConnectClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <section className="section1 font-extrabold border-b-4 border-black text-center" id="section1">
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
                        <strong> INVENTORY </strong>
                    </Link> <strong> |</strong>
                </div>
                <div className="btn-nav">
                    <button className="wallet-button text-button wp-button" onClick={() => setIsOpen(!isOpen)}>
                        USER WALLET
                    </button>
                    <div className={`options ${isOpen ? 'open' : 'closed'}`}>
                        <div className="option hover:bg-black hover:text-white">
                            <Link className="inventory-link hover:text-white hover:bg" id="wallet-connect" href="/linking" passHref>
                                V-LINKING
                            </Link>
                        </div>
                        <div className="option hover:bg-black hover:text-white">
                            <Link className="inventory-link hover:text-white" id="wallet-connect" href="/inventory" passHref>
                                INVENTORY
                            </Link>
                        </div>
                        <button className="option hover:bg-black hover:text-white" onClick={isConnect ? () => setIsConnect(false) : handleConnectClick}>
                            {isConnect ? (
                                <span className="disconnect-button">DISCONNECT</span>
                            ) : (
                                <span className="connect-button">CONNECT WALLET</span>
                            )}
                        </button>
                    </div>
                </div>
            </section>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-yellow-500 border-4 border-black p-6 rounded-lg shadow-lg flex flex-col items-baseline justify-center  sm:w-autosm:text-xs">
                        <h2 className="text-l ml-2 sm:text-2xl mb-4">
                            Connect Your Wallet
                            <button
                                className="text-black p-1 ml-16 text-xl mb-2"
                                onClick={handleCloseModal}
                            >
                                X
                            </button>
                        </h2>

                        <button className="bg-purple-300 text-white p-3 rounded w-80 ml-4 hover:bg-white sm:w-96">
                            <span className='flex items-center ml-4 text-white hover:text-black group'>
                                Phantom
                                <span className='ml-20'>
                                    <svg width="150" height="50" viewBox="0 0 1632 700" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="fill-current group-hover:text-black">
                                        <path d="M713.594 461C747.666 461 773.271 431.414 788.552 408.034C786.694 413.207 785.661 418.379 785.661 423.345C785.661 437 793.508 446.724 808.995 446.724C830.265 446.724 852.979 428.103 864.749 408.034C863.923 410.931 863.51 413.621 863.51 416.103C863.51 425.621 868.879 431.621 879.824 431.621C914.309 431.621 949 370.586 949 317.207C949 275.621 927.937 239 875.074 239C782.151 239 682 352.379 682 425.621C682 454.379 697.487 461 713.594 461ZM843.067 312.655C843.067 302.31 848.849 295.069 857.316 295.069C865.575 295.069 871.357 302.31 871.357 312.655C871.357 323 865.575 330.448 857.316 330.448C848.849 330.448 843.067 323 843.067 312.655ZM887.258 312.655C887.258 302.31 893.039 295.069 901.506 295.069C909.766 295.069 915.548 302.31 915.548 312.655C915.548 323 909.766 330.448 901.506 330.448C893.039 330.448 887.258 323 887.258 312.655Z" fill="currentColor"></path>
                                    </svg>
                                </span>
                            </span>


                        </button>
                    </div>
                </div>

            )}

        </>
    );
};

export default Navbar;
