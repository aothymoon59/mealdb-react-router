import React from "react";
import { useLoaderData } from "react-router-dom";
import Food from "../Food/Food";

const Foods = () => {
  const foods = useLoaderData();
  return (
    <div className="w-full p-5">
      <div className="grid md:grid-cols-4 gap-5">
        {foods.drinks.map((food) => (
          <Food food={food} key={food.idDrink}></Food>
        ))}
      </div>
    </div>
  );
};

export default Foods;
