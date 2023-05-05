import React from "react";

//router
import {
  useRoutes,
  Outlet,
} from "react-router-dom";

//pages
import HomePages from "./pages/home/HomePages";
import MainHeader from "./components/header/MainHeader";
//components

function ParentComponent() {
  return (
    <div>
      <MainHeader />
      <Outlet />;
    </div>
  );
}

export default function useRoutersElement() {
  const routerElement = useRoutes([
    {
      path: "/",
      element: <ParentComponent />,
      children: [
        {
          path: "/",
          element: <HomePages />,
        },
      ],
    },
  ]);

  return routerElement;
}
