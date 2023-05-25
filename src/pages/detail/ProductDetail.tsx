import React from "react"
import ProductImage from "../../assets/intro-1.jpg"
import { convertToVNPrice } from "../../utils/string"
import { ProductMocks } from "../../mocks/product"
import ProductRating from "../../components/ProductRating"
import ProductInfo from "./component/ProductInfo"

export default function ProductDetail() {
  const product = ProductMocks[1]
  return (
    <div className="bg-primaryRed px-16 py-8">
      <ProductInfo />
    </div>
  )
}
