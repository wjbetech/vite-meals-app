import React from 'react'
import "./Meal.css"
import { useState } from 'react'

export const Meal = ({ meal, onClick }) => {

    return (
        <div className="single-meal">
            <div 
                onClick={onClick}
            >
                <img 
                    className='single-meal-img' 
                    src={meal.strMealThumb} 
                    alt={meal.strMealThumb}
                    />
                <h3>{meal.strMeal}</h3>
            </div>
        </div>
    )
}