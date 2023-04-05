import React from "react";
import { Link } from "react-router-dom";

const Food = ({ food }) => {
  return (
    <div className="bg-blue-100 rounded-lg mx-auto w-[80%] md:w-full">
      <div className="w-full">
        <img className="w-full rounded-t-lg" src={food.strDrinkThumb} alt="" />
      </div>
      <div className="px-4">
        <h3 className="font-bold text-xl mt-3">{food.strDrink}</h3>
        <p className="text-lg font-semibold">Category: {food.strCategory}</p>
        <div>
          <Link
            className="font-semibold text-lg bg-blue-900 hover:bg-blue-600 text-white px-6 py-2 rounded-lg"
            to={`/food/${food.idDrink}`}
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Food;
