import ProductInfo from "./component/ProductInfo"
import DetailInfomation from "./component/DetailInfomation"
import CommentAndRating from "./component/CommentAndRating"
import React from "react"

export default function ProductDetail() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="bg-primaryRed px-16 py-8">
      <ProductInfo />
      <DetailInfomation />
      <CommentAndRating />
    </div>
  )
}
