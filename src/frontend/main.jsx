import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Success from "./status-pages/Success.jsx";
import Why from "./sections/Why.jsx";
import Who from "./sections/Who.jsx";
import NotFound from "./status-pages/NotFound.jsx";
import Layout from "./Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "why",
        element: <Why />,
      },
      {
        path: "meet-your-coach",
        element: <Who />,
      },
      {
        path: "success",
        element: <Success />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
