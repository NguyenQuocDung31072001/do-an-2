import React from "react"
//assets
import Logo from "../../assets/logo-with-text.svg"
//component

//framer-motion
import {
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion"

//mocks
import { MainHeaderContextProvider } from "../../context/MainHeaderContext"
import { useNavigate } from "react-router-dom"
import { PathRouter } from "../../constant/path.router"
import ElementNavigation from "./component/ElementNavigation"

export default function MainHeader() {
  //useState
  const [positionHeader, setPositionHeader] =
    React.useState("0px")
  //hook
  const navigate = useNavigate()

  const { scrollY } = useScroll()
  useMotionValueEvent(
    scrollY,
    "change",
    (latest) => {
      if (latest > 200) {
        setPositionHeader("-80px")
      } else {
        setPositionHeader("0px")
      }
    },
  )

  return (
    <MainHeaderContextProvider>
      <motion.div
        animate={{ translateY: positionHeader }}
        transition={{ duration: 0.2 }}
        className="fixed top-0 z-50 flex w-full flex-col items-center justify-center bg-white"
      >
        <div
          className="py-4"
          onClick={() =>
            navigate(PathRouter.HOME)
          }
        >
          <img
            src={Logo}
            className="h-[50px] cursor-pointer object-cover"
          />
        </div>
        <div className="flex h-[50px] w-full items-center justify-between px-44">
          <ElementNavigation
            title="TRANG CHỦ"
            path={PathRouter.HOME}
          />
          <ElementNavigation
            title="GIỚI THIỆU"
            path={PathRouter.ABOUT}
          />
          <ElementNavigation
            title="SẢN PHẨM"
            path={PathRouter.PRODUCT}
          />
          <ElementNavigation
            title="CẨM NANG"
            path={PathRouter.HANDBOOK}
          />
        </div>
      </motion.div>
    </MainHeaderContextProvider>
  )
}
