import React from "react"

//router
import {
  useRoutes,
  Outlet,
} from "react-router-dom"

//pages
import HomePages from "./pages/home/HomePages"
import MainHeader from "./components/header/MainHeader"
import IntroducePages from "./pages/introduce/IntroducePages"
import MainFooter from "./components/footer/MainFooter"
import { PathRouter } from "./constant/path.router"
import ProductPages from "./pages/product/ProductPages"
import HandbookPages from "./pages/handbook/HandbookPages"
import ProductDetail from "./pages/detail/ProductDetail"
//components

function ParentComponent() {
  return (
    <div>
      <MainHeader />
      <div className="mt-[130px]"></div>
      <Outlet />
      <MainFooter />
    </div>
  )
}

export default function useRoutersElement() {
  const routerElement = useRoutes([
    {
      path: "/",
      element: <ParentComponent />,
      children: [
        {
          path: PathRouter.HOME,
          element: <HomePages />,
        },
        {
          path: PathRouter.ABOUT,
          element: <IntroducePages />,
        },
        {
          path: PathRouter.PRODUCT,
          element: <ProductPages />,
        },
        {
          path: PathRouter.HANDBOOK,
          element: <HandbookPages />,
        },
        {
          path: PathRouter.DETAIL,
          element: <ProductDetail />,
        },
      ],
    },
  ])

  return routerElement
}
