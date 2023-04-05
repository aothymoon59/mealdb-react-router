import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const FoodDetail = () => {
  const singleFood = useLoaderData();
  const food = singleFood.drinks[0];
  console.log(food);

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="w-full mx-auto md:w-[600px] bg-blue-100 my-5 p-5 md:rounded-lg">
      <h2 className="font-bold text-2xl text-center rounded-lg">
        {food.strDrink} detail here
      </h2>
      <div className="md:w-[300px] mx-auto h-[200px] mt-5">
        <img
          className="w-full h-full rounded-lg"
          src={food.strDrinkThumb}
          alt=""
        />
      </div>
      <h3 className="font-bold text-xl my-5">{food.strDrink}</h3>
      <p className="text-lg font-semibold">Category: {food.strCategory}</p>
      <p className="font-semibold text-lg">
        Date Of Manufacture: {food.dateModified}
      </p>
      <p>
        <span className="text-lg font-semibold">Instructions:</span>{" "}
        {food.strInstructions}
      </p>
      <button
        onClick={handleBack}
        className="font-semibold text-lg bg-blue-900 hover:bg-blue-600 text-white px-6 py-2 mt-3 rounded-lg"
      >
        Go Back
      </button>
    </div>
  );
};

export default FoodDetail;
