import React from 'react'
import logo from "../assets/wjbetech-logo-transparent.png"
import "./navbar.css"
import { useState } from 'react'
import axios from 'axios'

export const NavBar = ({ onMealsLoaded, meals }) => {

    // state
    const [search, setSearch] = useState("");

    // functionaltiy
    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    const handleClick = () => {
        console.log(search)
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`)
        .then((result) => {
            const mealsData = result.data.meals;
            // update parent component App
            onMealsLoaded(mealsData)
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
        console.log(meals)
    }

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
                    placeholder="Search an ingredient.."
                    value={search}
                    onChange={handleChange}
                />
                <button
                    type="button"
                    onClick={handleClick}
                >
                    <i className='bx bx-search-alt'></i>
                </button>
            </form>
        </div>
        <div className="nav-right-container">
            <a href="https://github.com/wjbetech">
                <i className='bx bxl-github' ></i>
            </a>
            <a href="https://www.linkedin.com/in/william-east-653535211/">
                <i className='bx bxl-linkedin-square' ></i>
            </a>
        </div>
    </div>
  )
}
