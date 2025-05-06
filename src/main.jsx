import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Query from "./Query.jsx";
import Success from "./status-pages/Success.jsx";
import Why from "./Why.jsx";
import USP from "./USP.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/query",
    element: <Query />,
  },
  {
    path: "/success",
    element: <Success />,
  },
  {
    path: "/why",
    element: <Why />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
