import Footer from '@/components/Footer'
import Iluslink from '@/components/Iluslink'
import Navbar from '@/components/Navbar'
import Table from '@/components/Table'
import React, { useState } from 'react'
import Image from 'next/image'
import Modallink from '@/components/Modallink'


const Linking = () => {

    const [WalletConnected, setWalletConnected] = useState(false);


    // Function to connect the wallet
    const connectWallet = () => {
        // Here you should have logic to connect the wallet

    };
    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpen1, setmodalOpen1] = useState(false);


    return (
        <>
            <Navbar />
            <Table />


            <div className='form'>
                <div className='titleForm'>
                    LINKTOKEN
                </div>
                {modalOpen && <Modallink setOpenModal={setModalOpen} />}
                <div className='container-form'>
                    <div className='tokens'>
                        <button className='AlphaToken' type='submit'
                            onClick={() => {
                                setModalOpen(true);
                            }}>
                            <p className='alpha'>Alpha Token</p>
                            <div className='arrow-alpha'>
                                <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.353553" y1="0.621422" x2="5.38297" y2="5.65084" stroke="black"></line><line x1="4.69753" y1="5.67004" x2="9.74641" y2="0.660154" stroke="black"></line></svg>
                            </div>
                        </button>
                        {modalOpen && <Modallink setOpenModal={setModalOpen} />}
                    </div>
                    <div className='cadena'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="border border-black ml-4">
                            <path d="M12 20.1C10.29 20.1 8.9 18.71 8.9 17V13H7L7 17C7 19.76 9.24 22 12 22C14.76 22 17 19.76 17 17V13H15.1V17C15.1 18.71 13.71 20.1 12 20.1ZM13 16V8H11V16H13ZM7 7V11H8.9V7C8.9 5.29 10.29 3.9 12 3.9C13.71 3.9 15.1 5.29 15.1 7L15.1 11H17V7C17 4.24 14.76 2 12 2C9.24 2 7 4.24 7 7Z" fill="black"></path>
                        </svg>
                    </div>

                    <button
                        className='LinkingToken'
                        onClick={() => {
                            setModalOpen(true);
                        }}>

                        <p className='vlinking'>V-LINKING TOKEN</p>

                        <div className='arrow-link'>
                            <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.353553" y1="0.621422" x2="5.38297" y2="5.65084" stroke="black"></line><line x1="4.69753" y1="5.67004" x2="9.74641" y2="0.660154" stroke="black"></line></svg>
                        </div>


                    </button>
                </div>
                <div className='botonLink'>
                    <button
                    >{/* Agrega la lógica para link el nft */}LINK NFT</button>
                </div>
            </div >
            <Iluslink />
            <Footer />
        </>
    )
}

export default Linking
