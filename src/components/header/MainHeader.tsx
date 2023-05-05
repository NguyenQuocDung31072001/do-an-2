import React from "react";
//assets
import Logo from "../../assets/logo-with-text.svg";
//component

//framer-motion
import {
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

//hook
import useCheckScrollDirection, {
  EnumDirection,
} from "../../hook/useCheckScrollDirection";

//mocks
import { MainHeaderContextProvider } from "../../context/MainHeaderContext";
import { useNavigate } from "react-router-dom";
import { PathRouter } from "../../constant/path.router";
import ElementNavigation from "./component/ElementNavigation";

export default function MainHeader() {
  //useState
  const [positionHeader, setPositionHeader] =
    React.useState("0px");
  //hook
  const navigate = useNavigate();

  const { scrollY } = useScroll();
  const { direction } = useCheckScrollDirection();

  useMotionValueEvent(
    scrollY,
    "change",
    (latest) => {
      if (latest > 500) {
        if (direction === EnumDirection.UP) {
          setPositionHeader("0px");
        } else {
          setPositionHeader("-200px");
        }
      } else {
        setPositionHeader("0px");
      }
    },
  );

  return (
    <MainHeaderContextProvider>
      <motion.div
        animate={{ translateY: positionHeader }}
        transition={{ duration: 0.2 }}
        className="fixed top-0 z-50 flex w-full flex-col items-center justify-center bg-white"
      >
        <div className="py-4">
          <img
            src={Logo}
            className="h-[50px] cursor-pointer object-cover"
          />
        </div>
        <div className="flex h-[50px] w-full items-center justify-between px-44">
          <ElementNavigation title="TRANG CHỦ" />
          <ElementNavigation title="GIỚI THIỆU" />
          <ElementNavigation title="SẢN PHẨM" />
          <ElementNavigation title="CẨM NANG" />
        </div>
      </motion.div>
    </MainHeaderContextProvider>
  );
}
