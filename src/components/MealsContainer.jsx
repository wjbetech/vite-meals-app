import React from 'react'
import "./MealsContainer.css"

export const MealsContainer = ({ children }) => {
  return (
    <div className="container">
        <div className="container-title">
            <h1>Recipes & Meals</h1>
            <p>Search TheMealDB API for hundreds of meals based on ingredients</p>
        </div>
        <div className="meals-container">
            {children}
        </div>
    </div>
  )
}
