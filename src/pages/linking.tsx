import Footer from '@/components/Footer'
import Iluslink from '@/components/Iluslink'
import Navbar from '@/components/Navbar'
import Table from '@/components/Table'
import React from 'react'

const linking = () => {
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
                        <div className='AlphaToken'>
                            <button>Alpha Token</button>
                        </div>
                        <div className='LinkingToken'>
                            <button>V-LINKING TOKEN</button>
                        </div>
                    </div>
                    <div className='botonLink'>
                        <button>LINK NFT</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default linking
