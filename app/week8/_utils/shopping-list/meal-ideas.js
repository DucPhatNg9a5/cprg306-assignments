"use client";
import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [mealID, setMealID] = useState(null);
  const [details, setDetails] = useState([]);

  async function fetchMealIdeas() {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      setMeals(data.meals);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    if (ingredient) {
      fetchMealIdeas();
    }
  }, [ingredient]);

  async function fetchMealDetails() {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
      );
      const data = await response.json();
      let i = 0;
      let newDetails = [];
      while (i < 30) {
        i++;
        if (data.meals[0][`strIngredient${i}`] === "") {
          i = 30;
        } else {
          newDetails = [...newDetails, data.meals[0][`strIngredient${i}`]];
        }
      }
      setDetails(newDetails);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    if (mealID) {
      fetchMealDetails();
    }
  }, [mealID]);

  return (
    <div>
      <h2>Meal Ideas</h2>

      {ingredient ? (
        <p>Meal ideas for {ingredient}:</p>
      ) : (
        <p>No ingredient selected</p>
      )}

      {meals ? (
        <ul>
          {meals.map((meal) => (
            <li
              className="p-2 m-4 bg-slate-900 max-w-sm hover:bg-cyan-600"
              onClick={() => setMealID(meal.idMeal)}
              key={meal.idMeal}
            >
              {meal.strMeal}
              {details && mealID === meal.idMeal && (
                <ul>
                  <p>Ingredients:</p>
                  <p>{details.join(", ")}</p>
                </ul>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No meal ideas found for {ingredient}</p>
      )}
    </div>
  );
}
