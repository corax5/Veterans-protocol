import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Footer = () => {


    const handleRedirect = (url: string) => {
        const newWindow = window.open(url, '_blank');
        if (newWindow) newWindow.opener = null;
    };

    return (
        <>
            <Image
                src="/Vector 9.png"
                className='vector'
                alt="logo"
                width={5000} height={5000}
                priority />
            <div className="footer-copyright">

                <ul className='social-media z-0'>
                    <li
                        className="social-button mr-2"
                        id="social-buttons"
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}
                        onClick={() => handleRedirect('https://twitter.com/veterans_crew')}
                    >
                        <span> <Image src='/Icono_X.svg' alt="Icono X" width={22} height={22} /></span>
                    </li>

                    <li
                        className="social-button mr-2"
                        id="social-buttons"
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}
                        onClick={() => handleRedirect('https://discord.com/invite/veterans')}
                    >
                        <span><Image src='/Icono_Discor.svg' alt="Icono Discord" width={30} height={30} />
                        </span>
                    </li>

                    <li
                        className="social-button mr-2"
                        id="social-buttons"
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}
                        onClick={() => handleRedirect('https://exchange.art/veterans/nfts')}
                    >
                        <span><Image src='/Icono_Exchange Art.svg' alt="Icono Exchange" width={19} height={20} />
                        </span>   </li>

                    <li
                        className="social-button mr-2"
                        id="social-buttons"
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}
                        onClick={() => handleRedirect('https://atlas3.io/project/veterans')}
                    >
                        <span> <Image src='/Icono_Atlas.svg' alt="Icono Atlas" width={25} height={24} />
                        </span>  </li>
                </ul>
                <div className='links mr-1 z-10 '>
                    <Link href="/">
                        <span className="home-button  mr-1 ml-1 z-10   hover:text-gray-700 " id="linking">HOME /</span>
                    </Link>
                    <Link href="/linking">
                        <span className="inventory-button mr-1 z-10 hover:text-gray-700" id="inventory">  LINKING / </span>
                    </Link>
                    <Link href="/inventory">
                        <span className="inventory-button mr-1 z-10  hover:text-gray-700" id="inventory"> INVENTORY</span>
                    </Link>
                </div>
                <div className="div-logo-footer  ">
                    <Image src="/Isotipo_Negro.svg" alt="logo" width={20} height={20} priority />
                </div>
                <p className="copyright" id="copyright" >© 2023 Veterans. All
                    rights reserved.</p>
            </div>
        </>
    );
};

export default Footer;
