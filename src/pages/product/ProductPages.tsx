import React from "react"
import CategoryShow from "./component/CategoryShow"
import { ProductMocks } from "../../mocks/product"
import ProductList from "../../components/product/ProductList"
import Pagination from "../../components/pagination/Pagination"

export default function ProductPages() {
  const ref = React.useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <div className="z-10 flex w-full">
        <div className="z-10 h-[600px] w-[50%] bg-[#841206] bg-pattern bg-cover bg-center px-16 py-36">
          <p className="font-serif text-[48px] font-bold text-[#d4aa5f]">
            Yến Sào Thất Sơn
          </p>
          <div className="h-[8px] w-[200px] bg-[#d4aa5f]"></div>
          <p className="py-8 text-white/50 ">
            Yến Sào Sạch & Chất Lượng Cao
          </p>
          <div
            className="flex w-[250px] cursor-pointer items-center justify-center rounded-[50px] bg-[#d4aa5f] p-4 font-bold text-[#841206] duration-200 hover:bg-white/90 hover:text-[#d4aa5f]"
            onClick={() =>
              ref?.current?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            XEM SẢN PHẨM
          </div>
        </div>
        <div className="z-10 h-[600px] w-[50%] bg-product-hero bg-cover bg-center"></div>
      </div>
      <div
        ref={ref}
        className="z-0 bg-gray-100 px-16"
      >
        <div className="h-[100px] w-full">
          <CategoryShow />
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
          <Pagination total={15} />
        </div>
      </div>
    </div>
  )
}
