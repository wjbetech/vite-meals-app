import React from 'react'
import "./Meal.css"
import { useState } from 'react'
import { Modal } from './Modal'

export const Meal = ({ meal }) => {

    const [openModal, setOpenModal] = useState(false);

    const handleClick = () => {
        setOpenModal(!openModal);
    }

    return (
        <div className="single-meal">
            <div 
                onClick={handleClick}
            >
                <img 
                    className='single-meal-img' 
                    src={meal.strMealThumb} 
                    alt={meal.strMealThumb}
                    />
                <h3>{meal.strMeal}</h3>
            </div>
            <div className="modal-container">
                {openModal && (
                    <Modal meal={meal} />
                )}
            </div>
        </div>
    )
}