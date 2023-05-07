import React from "react"
import ProductImage from "../../assets/intro-1.jpg"
import ProductRating from "../ProductRating"
import { convertToVNPrice } from "../../utils/string"
import { useNavigate } from "react-router-dom"
import { PathRouter } from "../../constant/path.router"

interface IProps {
  product: any
}
export default function ProductList({
  product,
}: IProps) {
  const navigate = useNavigate()

  return (
    <div className="w-[420px] overflow-hidden rounded-[10px] bg-white">
      <div
        className="overflow-hidden"
        onClick={() =>
          navigate(PathRouter.DETAIL)
        }
      >
        <img
          src={ProductImage}
          alt=""
          className="cursor-pointer object-cover duration-200 hover:scale-110"
        />
      </div>
      <p
        className="mt-4 cursor-pointer px-2 font-bold"
        onClick={() =>
          navigate(PathRouter.DETAIL)
        }
      >
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
        <p className="text-[16px] font-bold text-primaryRed">
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
