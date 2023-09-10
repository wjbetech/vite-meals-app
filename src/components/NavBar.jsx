import React from 'react'
import logo from "../assets/wjbetech-logo-transparent.png"

export const NavBar = () => {
  return (
    <div className="navbar">
        <div className="left-container">
            <a href="">
                <img src={logo} alt="" />
            </a>
        </div>
        <div className="middle-container"></div>
        <div className="right-container"></div>
    </div>
  )
}
