import React from 'react'
import Image from 'next/image'

const Bubble1 = () => {
    return (
        <>
            <div className='bubble-complete'>
                <Image className='bubble1' src="/Vector 6.png" alt="bubble1" width="821" height="234" priority />
                <p
                    className='text-bubble1'>The V-Links protocol represents a significant advance in NFT technology at Solana, as it enables permanent,
                    tamper-proof linkage between any NFT and a V-Link. This innovative approach addresses the challenge of
                    secondary collections diluting the value of the primary collection, allowing them to instead add value and
                    uniqueness to each primary NFT. Using V-Links, each connection increases the value of the alpha NFT,
                    regardless of the rarity of its features.</p>
            </div>
        </>
    )
}

export default Bubble1
