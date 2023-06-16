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
import HandbookView from "./pages/handbookView/HandbookView"
import LoginPages from "./pages/auth/LoginPages"
import RegisterPages from "./pages/auth/RegisterPages"
import ResetPasswordPages from "./pages/auth/ResetPassword"
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
          path: PathRouter.HANDBOOK_VIEW,
          element: <HandbookView />,
        },
        {
          path: PathRouter.DETAIL,
          element: <ProductDetail />,
        },
        {
          path: PathRouter.LOGIN,
          element: <LoginPages />,
        },
        {
          path: PathRouter.REGISTER,
          element: <RegisterPages />,
        },
        {
          path: PathRouter.RESET_PASSWORD,
          element: <ResetPasswordPages />,
        },
      ],
    },
  ])

  return routerElement
}
