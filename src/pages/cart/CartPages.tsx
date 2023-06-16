import React from "react"
import { convertToVNPrice } from "../../utils/string"
import CartItem from "./component/CartItem"

export default function CartPages() {
  const [cartData, setCartData] = React.useState(
    [],
  )
  const price = 0
  return (
    <div className="px-16 pt-10">
      <div className="flex w-full justify-between text-primaryRed">
        <p className="font-serif text-[24px] font-semibold">
          Giỏ hàng
        </p>
        <p className="cursor-pointer">
          Xoá tất cả
        </p>
      </div>
      <div className="mb-8 mt-2 h-1 w-full bg-gray-200" />
      {cartData.length === 0 && (
        <div className="w-full rounded-[10px] bg-[#fff3cd] p-4 text-[#664d03]">
          Không có sản phẩm nào trong giỏ hàng của
          bạn.
        </div>
      )}
      {Array(10)
        .fill(0)
        .map((data) => (
          <CartItem />
        ))}
      <div className="h-[100px] w-full" />
      <div className="fixed bottom-0 flex w-[90%] justify-between bg-white p-4 shadow-xl">
        <span className="font-semibold text-primaryRed">
          Thành tiền :
          <span className="ml-4 text-[24px] font-bold ">
            {convertToVNPrice(0)}
          </span>
        </span>
        <span className="text-gray-500">
          Đã bao gồm VAT nếu có
        </span>
        <button className="rounded-[20px] bg-primaryRed px-8 py-2 font-bold text-primaryYellow duration-150 hover:bg-primaryYellow hover:text-primaryRed">
          THANH TOÁN
        </button>
      </div>
    </div>
  )
}
