import React from "react"
import { ProductMocks } from "../../../mocks/product"
import ProductRating from "../../../components/ProductRating"
import { convertToVNPrice } from "../../../utils/string"
import QuantityProductManegement from "../../../components/quantity/QuantityProductManegement"
import CartIconFilled from "../../../icon/CartIconFilled"
import { ProductType } from "../../../types"
import { IPropsProductInfo } from "./ProductInfo"
import { useNavigate } from "react-router-dom"
import { PathRouter } from "../../../constant/path.router"

export default function ProductDetailInfo({
  product,
}: IPropsProductInfo) {
  const navigate = useNavigate()

  if (!product)
    return <div>Product không tồn tại</div>
  return (
    <div>
      <p className="font-serif text-[36px] font-bold">
        {product.name}
      </p>
      <div className="flex p-2">
        <ProductRating
          rating={product.averageRate}
          activeClassname="'h-5 w-5 fill-yellow-300 text-yellow-300"
          nonActiveClassname="h-5 w-5 fill-current text-gray-100"
        />
        {product.quantityRating === 0 ? (
          <p className="pl-2 text-[18px] text-gray-300">
            Chưa có đánh giá
          </p>
        ) : (
          <div className="flex pl-2">
            <p className="pr-2">
              {product.averageRate}
            </p>
            <p className="text-gray-300">{`(${product.quantityRating} đánh giá)`}</p>
          </div>
        )}
      </div>
      <div className="flex px-2">
        <p className="text-[24px] font-bold text-primaryRed">
          {convertToVNPrice(
            product.price - product.discount,
          )}
        </p>
        <p className="pl-4 text-[24px] text-gray-500">{`-${
          (product.discount / product.price) * 100
        }%`}</p>
      </div>
      <p className="px-2 text-[18px] text-gray-400 line-through">
        {convertToVNPrice(product.price)}
      </p>
      <p className="mb-4 px-2 text-[16px] text-black line-clamp-3">
        {product.description}
      </p>
      <QuantityProductManegement />
      <div
        onClick={() => {
          navigate(`${PathRouter.CART}`)
        }}
        className="my-8 flex w-full cursor-pointer items-center justify-center rounded-[50px] bg-primaryRed py-2 font-bold text-primaryYellow duration-300 hover:bg-primaryYellow hover:text-primaryRed"
      >
        <CartIconFilled className="mr-2 h-6 w-6" />
        THÊM VÀO GIỎ HÀNG
      </div>
    </div>
  )
}
