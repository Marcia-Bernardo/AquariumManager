import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavWrapper from "./components/structure/NavWrapper";
import ManagerPage from "./pages/ManagerPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavWrapper />,
    children: [
      {
        index: true,
        element: <ManagerPage showPage="aquarium" />,
      },
      {
        path: "/addFish",
        element: <ManagerPage showPage="addFish" />,
      },
      {
        path: "/listRace",
        element: <ManagerPage showPage="listRace" />,
      },
      {
        path: "/listFish",
        element: <ManagerPage showPage="listFish" />,
      },
      {
        path: "/showFish/:id",
        element: <ManagerPage showPage="showFish" />,
      },
      {
        path: "/fishDetails/:id",
        element: <ManagerPage showPage="fishDetails" />,
      },
      {
        path: "/addMeasurement",
        element: <ManagerPage showPage="addMeasurement" />,
      },
      {
        path: "/listMeasurement",
        element: <ManagerPage showPage="listMeasurement" />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>{/* <NavBar /> */}</RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
