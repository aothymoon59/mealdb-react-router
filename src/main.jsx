import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Foods from "./components/Foods/Foods";
import FoodDetail from "./components/FoodDetail/FoodDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/foods",
        element: <Foods></Foods>,
        loader: () =>
          fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"),
      },
      {
        path: "/food/:foodId",
        element: <FoodDetail></FoodDetail>,
        loader: ({ params }) =>
          fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.foodId}`
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
