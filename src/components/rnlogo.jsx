import React from 'react'
import Modal from './Modal/modal'
import './rnlogo.css'

const rnlogo = () => {
  return (
    <div className="main_page">
      <img className="img" src="./src/assets/rnlogo.jpg"></img>
      <div className="main_about">
        <div className="heading">
          RADIO NITROZ
        </div>
        <div>
          <Modal />
        </div>
      </div>
    </div>
  )
}

export default rnlogo
