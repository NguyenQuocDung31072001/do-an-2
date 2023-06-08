import ProductInfo from "./component/ProductInfo"
import DetailInfomation from "./component/DetailInfomation"
import CommentAndRating from "./component/CommentAndRating"
import React from "react"
import ProductList from "../../components/product/ProductList"
import { ProductMocks } from "../../mocks/product"
import Pagination from "../../components/pagination/Pagination"

export default function ProductDetail() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="bg-primaryRed px-16 py-8">
      <ProductInfo />
      <DetailInfomation />
      <CommentAndRating />
      <div className="my-8">
        <p className="font-serif text-[24px] font-bold text-primaryYellow">
          Sản phẩm liên quan
        </p>
        <div className="h-2 w-[50%] bg-primaryYellow" />
      </div>
      <div className="flex flex-wrap justify-between">
        {ProductMocks.map((product, index) => (
          <ProductList
            key={index}
            product={product}
          />
        ))}
      </div>
      <div className="flex w-full justify-center py-8">
        <Pagination total={8} />
      </div>
    </div>
  )
}
