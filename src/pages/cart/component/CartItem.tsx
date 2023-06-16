import React from "react"
import { convertToVNPrice } from "../../../utils/string"
import MinusIcon from "../../../icon/MinusIcon"
import PlusIcon from "../../../icon/PlusIcon"

export default function CartItem() {
  return (
    <div className="my-4 grid h-[200px] w-full grid-cols-12 overflow-hidden rounded-[10px] bg-white shadow-lg">
      <div className="col-span-3">
        <img
          src="https://product.hstatic.net/1000303672/product/en_baby_thien_nhien__1.5g__hop__mau_saka__yumsea__1001143__-_00001-min_3111505f7ec845c2b1b2b4dafd405c24.jpg"
          alt=""
          className="h-[200px] w-[300px] object-cover"
        />
      </div>
      <div className="col-span-7 flex flex-col justify-between py-12">
        <p className="cursor-pointer text-[20px] font-bold">
          Yến Đẹp Dáng Bổ Thận
        </p>
        <p className="font-bold text-primaryRed">
          {convertToVNPrice(5300000)}
        </p>
        <p className="cursor-pointer text-gray-500">
          Xoá sản phẩm
        </p>
      </div>
      <div className="col-span-2 flex items-center">
        <MinusIcon className="h-7 w-7 cursor-pointer rounded-[50%] bg-gray-200 px-1" />
        <p className="mx-6">1</p>
        <PlusIcon className="h-7 w-7 cursor-pointer rounded-[50%] bg-gray-200 px-1" />
      </div>
    </div>
  )
}
