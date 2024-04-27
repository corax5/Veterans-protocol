import React from 'react'

interface SetOpenModal {
  (isOpen: boolean): void; // Function takes a boolean argument and returns nothing (void)
}

const Modallink = ({ setOpenModal }: { setOpenModal: SetOpenModal }) => {
  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button className='closebutton'
              onClick={() => {
                setOpenModal(false);
              }}
            >
              <svg id="icono" xmlns="http://www.w3.org/2000/svg" width="26" height="20" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>

            </button>
          </div>
          <div className="title">
            <h4 style={{ fontSize: '20px' }}>
              Select token to link

            </h4>
          </div>
          <div className="bodymodal">

          </div>

        </div>
      </div >

    </>
  )
}

export default Modallink
