import React from 'react'
import "./Main.css"
import { Link } from "react-router-dom";


const Main = () => {
  return (

    <div className="main-page">

      <div className="text-container">
        <p className='italic-text'>fırsatı kaçırma</p>
        <p className="text">KOD ACIKTIRIR,</p>
        <p className="text">PİZZA DOYURUR!</p>
      </div>

      <br />

      <div className="button-container">
        <button id="order-pizza">
          <Link to="/pizza"> ACIKTIM </Link>
        </button>
      </div>

    </div>

  )
}

export default Main