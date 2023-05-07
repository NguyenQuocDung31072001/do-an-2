import React from "react"
import ProductImage from "../../assets/intro-1.jpg"
import { convertToVNPrice } from "../../utils/string"
import { ProductMocks } from "../../mocks/product"
import ProductRating from "../../components/ProductRating"

export default function ProductDetail() {
  const product = ProductMocks[1]
  return (
    <div className="bg-primaryRed px-16 py-8">
      <div className=" flex items-center justify-between">
        <div className="w-[50%] overflow-hidden">
          <img
            src={ProductImage}
            alt=""
            className="cursor-pointer object-cover duration-200 hover:scale-110"
          />
        </div>
        <div className="h-[400px] w-[50%] bg-white p-8">
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
                (product.price *
                  (100 - product.sale)) /
                  100,
              )}
            </p>
            <p className="pl-4 text-[24px] text-gray-500">{`-${product.sale}%`}</p>
          </div>
          <p className="px-2 text-[18px] text-gray-400 line-through">
            {convertToVNPrice(product.price)}
          </p>
          <p className="mb-4 px-2 text-[16px] text-black line-clamp-3">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  )
}
