import './App.css'
import { useState } from 'react';
import { NavBar } from './components/NavBar'
import { MealsContainer } from './components/MealsContainer'
import { Meal } from './components/Meal';

function App() {

  // state
  const [meals, setMeals] = useState([]);

  // Functionality
  const handleMealsLoaded = (mealsData) => {
    setMeals(mealsData);
  };

  const handleMealClick = (mealData) => {
    setSelectedMeal(mealData);
  };

  const handleCloseModal = () => {
    setSelectedMeal(null);
  };



  return (
    <div>
      <NavBar 
        onMealsLoaded={handleMealsLoaded} meals={meals} />
      <MealsContainer>
        {meals.map((meal, index) => (
          <Meal key={index} meal={meal} />
        ))} 
      </MealsContainer>
    </div>
  )
}

export default App
