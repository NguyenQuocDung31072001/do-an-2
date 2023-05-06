import React from "react"
import { ProductMocks } from "../../mocks/product"
import ProductImage from "../../assets/intro-1.jpg"
import ProductRating from "../ProductRating"
import { convertToVNPrice } from "../../utils/string"

interface IProps {
  product: any
}
export default function ProductList({
  product,
}: IProps) {
  return (
    <div className="w-[420px] overflow-hidden rounded-[10px] bg-white">
      <div className="overflow-hidden">
        <img
          src={ProductImage}
          alt=""
          className="cursor-pointer object-cover duration-200 hover:scale-110"
        />
      </div>
      <p className="mt-4 px-2 font-bold">
        {product.name}
      </p>
      <div className="flex p-2">
        <ProductRating
          rating={product.averageRate}
        />
        {product.quantityRating === 0 ? (
          <p className="pl-2 text-gray-300">
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
        <p className="text-[16px] font-bold text-[#841206]">
          {convertToVNPrice(
            (product.price *
              (100 - product.sale)) /
              100,
          )}
        </p>
        <p className="pl-4 text-[16px] text-gray-500">{`-${product.sale}%`}</p>
      </div>
      <p className="px-2 text-[14px] text-gray-300 line-through">
        {convertToVNPrice(product.price)}
      </p>
      <p className="mb-4 px-2 text-[14px] text-black/80 line-clamp-3">
        {product.description}
      </p>
    </div>
  )
}
