import React from "react"
import { PRODUCT_CATEGORIES } from "../../../constant/product.category"
import {
  useMotionValueEvent,
  useScroll,
} from "framer-motion"

export default function CategoryShow() {
  const { scrollY } = useScroll()
  const [isPositionFixed, setIsPositionFixed] =
    React.useState<boolean>(false)

  useMotionValueEvent(
    scrollY,
    "change",
    (latest) => {
      if (latest > 690) {
        setIsPositionFixed(true)
        console.log({ latest, scrollY })
      } else {
        setIsPositionFixed(false)
      }
    },
  )

  return (
    <div
      className={`${
        isPositionFixed
          ? "fixed top-[40px] w-[calc(100%-128px)]"
          : ""
      } z-10 flex translate-y-[-5px] rounded-[10px] bg-white p-4`}
    >
      {PRODUCT_CATEGORIES.map((item) => {
        return (
          <div
            key={item.name}
            className="mx-2 cursor-pointer rounded-[30px] bg-gray-100 px-8 py-2 font-semibold"
          >
            {item.name}
          </div>
        )
      })}
    </div>
  )
}
