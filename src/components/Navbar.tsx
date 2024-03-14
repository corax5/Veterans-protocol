import React from 'react'



const Navbar = () => {
    return (
        <>
            <section className='section1'>
                <div className='div-logo mt-2 ml-4 grid grid-cols-3 gap-80'>
                    <img
                        src={'/images/Isotipo_Negro.svg'}
                        alt="logovets"
                        className="w-8 h-8" />
                    <div className='linkInventory'>
                        |<a className="linking-button text-button wp-button hover:text-white" id="linking" target="_blank" href="">  Linking </a> |
                        <a className="inventory-button text-button wp-button hover:text-white" id="inventory" target="_blank" href="">  Inventory </a> |
                    </div>
                    <div className='wallet-button'>
                        <button>wallet</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar
