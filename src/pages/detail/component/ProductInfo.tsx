import ProductImage from "../../../assets/intro-1.jpg"
import ProductDetailInfo from "./ProductDetailInfo"

export default function ProductInfo() {
  return (
    <div className=" flex items-center justify-between">
      <div className="w-[50%] overflow-hidden">
        <img
          src={ProductImage}
          alt=""
          className="cursor-pointer object-cover duration-200 hover:scale-110"
        />
      </div>
      <div className="h-[460px] w-[50%] bg-white p-8">
        <ProductDetailInfo />
      </div>
    </div>
  )
}
