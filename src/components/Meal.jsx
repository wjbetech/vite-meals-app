import React from 'react'
import "./Meal.css"

export const Meal = ({ meal }) => {

    return (
        <div className="single-meal">
            <img 
                className='single-meal-img' 
                src={meal.strMealThumb} 
                alt={meal.strMealThumb} />
            <h3>{meal.strMeal}</h3>
        </div>
    )
}