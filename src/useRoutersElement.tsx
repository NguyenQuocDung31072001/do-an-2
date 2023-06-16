//router
import {
  useRoutes,
  Outlet,
} from "react-router-dom"

//pages
import HomePages from "./pages/home/HomePages"
import IntroducePages from "./pages/introduce/IntroducePages"
import ProductPages from "./pages/product/ProductPages"
import HandbookPages from "./pages/handbook/HandbookPages"
import ProductDetail from "./pages/detail/ProductDetail"
import HandbookView from "./pages/handbookView/HandbookView"
import LoginPages from "./pages/auth/LoginPages"
import RegisterPages from "./pages/auth/RegisterPages"
import ResetPasswordPages from "./pages/auth/ResetPassword"
import CartPages from "./pages/cart/CartPages"

//component
import MainHeader from "./components/header/MainHeader"
import MainFooter from "./components/footer/MainFooter"

//constant
import { PathRouter } from "./constant/path.router"

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

function AuthLayout() {
  return (
    <div className=" h-[calc(100vh-130px)] bg-gray-100">
      <MainHeader />
      <div className="mt-[130px]"></div>
      <Outlet />
    </div>
  )
}
function CartLayout() {
  return (
    <div className=" bg-gray-50">
      <MainHeader />
      <div className="mt-[130px]"></div>
      <Outlet />
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
      ],
    },
    {
      path: "/",
      element: <AuthLayout />,
      children: [
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
    {
      path: "/",
      element: <CartLayout />,
      children: [
        {
          path: PathRouter.CART,
          element: <CartPages />,
        },
      ],
    },
  ])

  return routerElement
}
