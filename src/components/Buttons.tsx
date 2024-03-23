import React from 'react'
import Link from 'next/link'

const Buttons = () => {
    return (
        <>
            <div className='texto'>
                <div className="title font-bold mt-10 text-center">
                    LINK YOUR EXPERIENCE
                </div>
                <div className="text-link mx-auto text-center mt-4">V-Links redefines interaction  with NFTs in Solana, allowing  access to 'vlinks'
                    through web  experiences3, which can be  linked to your favorite NFTs to
                    enhance their relevance and add reputation.</div>
            </div>
            <div className='buttons-top mt-6 mb-10'>
                <Link href="/V-LINKIG" passHref>
                    <div className="button-linkventory mr-2 w-32 font-bold" id="linking" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        V - LINKING
                    </div>
                </Link>
                <Link href="/INVENTORY" passHref>
                    <div className="button-linkventory mr-2 w-32 font-bold" id="inventory" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        INVENTORY
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Buttons
