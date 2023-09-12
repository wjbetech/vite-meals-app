import React from 'react'
import "./Meal.css"

export const Meal = ({ meal, onClick }) => {

    function capitalizeWords(word) {
        let words = word.split(" ")
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }
        return words.join(" ");
    };

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
                <h3>{capitalizeWords(meal.strMeal)}</h3>
            </div>
        </div>
    )
}