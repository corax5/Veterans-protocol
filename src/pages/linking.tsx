import Footer from '@/components/Footer'
import Iluslink from '@/components/Iluslink'
import Navbar from '@/components/Navbar'
import Table from '@/components/Table'
import React, { useState } from 'react'

const linking = () => {

    // const [walletConnected, setwalletConnected] = useState(false);


    // Function to connect the wallet
    const connectWallet = () => {
        // Here you should have logic to connect the wallet
        // For example:
        // setWalletConnected(true);
    };


    return (
        <>
            <Navbar />
            <Iluslink />
            <Table />
            <div className='form'>
                <div className='titleForm'>
                    LINKTOKEN
                </div>
                <div className='container-form'>
                    <div className='tokens'>
                        <button className='AlphaToken' type='submit'>Alpha Token </button>
                    </div>
                    <button className='LinkingToken'>
                        V-LINKING TOKEN
                    </button>
                </div>
                <div className='botonLink'>
                    <button
                    >{/* Agrega la lógica para link to nft */}LINK NFT</button>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default linking
