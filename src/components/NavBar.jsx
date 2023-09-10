import React from 'react'
import logo from "../assets/wjbetech-logo-transparent.png"
import "./navbar.css"

export const NavBar = () => {
  return (
    <div className="navbar">
        <div className="nav-left-container">
            <a href="https://github.com/wjbetech">
                <img src={logo} alt="developer logo" />
            </a>
        </div>
        <div className="nav-middle-container">
            <form>
                <input 
                    type="text" 
                    id="meal-search" 
                    cd="meal-search" 
                />
                <button>
                    <i class='bx bx-search-alt'></i>
                </button>
            </form>
        </div>
        <div className="nav-right-container">
            <a href="https://github.com/wjbetech">
                <i class='bx bxl-github' ></i>
            </a>
            <a href="https://www.linkedin.com/in/william-east-653535211/">
                <i class='bx bxl-linkedin-square' ></i>
            </a>
        </div>
    </div>
  )
}
