import React from "react"
import ProductRating from "../../../components/ProductRating"
import Pagination from "../../../components/pagination/Pagination"

export default function CommentAndRating() {
  return (
    <div className="mt-8 bg-white p-8">
      <p className="mb-2 font-serif text-[24px] font-bold text-primaryRed">
        Khách hàng nhận xét
      </p>
      <div className="h-2 w-[50%] bg-primaryRed" />
      <div className="mt-8 flex items-center justify-between">
        <div className="mx-2 flex h-[200px] w-full flex-col items-center justify-center rounded-[10px] bg-gray-100/60 py-4">
          <p className="font-semibold">
            Đánh giá trung bình
          </p>
          <p className="text-[30px] font-bold text-primaryRed">
            0.0/5
          </p>
          <ProductRating
            rating={5}
            activeClassname="h-5 w-5 fill-gray-200"
            nonActiveClassname="h-5 w-5 fill-current text-gray-100"
          />
          <p className="text-gray-500">
            0 nhận xét
          </p>
        </div>
        <div className="mx-2 flex h-[200px] w-full flex-col items-center justify-center rounded-[10px] bg-gray-100/60 py-4">
          {Array(5)
            .fill(0)
            .map((data, index) => (
              <div
                key={index}
                className="my-1 flex w-full items-center justify-between px-2"
              >
                <div className="mr-4 flex items-center">
                  <p>{index}</p>
                  <svg
                    enableBackground="new 0 0 15 15"
                    viewBox="0 0 15 15"
                    x={0}
                    y={0}
                    className="h-5 w-5 fill-gray-300"
                  >
                    <polygon
                      points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit={10}
                    />
                  </svg>
                </div>
                <div className="h-2 w-full rounded-[10px] bg-gray-200" />
                <div className="ml-4 rounded-[5px] bg-gray-200  px-2 text-[14px] text-gray-500">
                  0%
                </div>
              </div>
            ))}
        </div>
        <div className="mx-2 flex h-[200px] w-full flex-col items-center justify-center rounded-[10px] bg-gray-100/60 py-4">
          <p className="font-semibold text-black">
            Nhận xét sản phẩm
          </p>
          <div className="my-2 flex w-[200px] cursor-pointer items-center justify-center rounded-[50px] bg-primaryRed px-4 py-2 font-bold text-primaryYellow duration-300 hover:bg-primaryYellow hover:text-primaryRed">
            VIẾT NHẬN XÉT{" "}
          </div>
        </div>
      </div>
      <div className="mx-2 mt-4 flex rounded-[10px] bg-[#fff3cd] p-4 text-[#664d03]">
        Chưa có đánh giá nào cho sản phẩm này.
      </div>
      <div className="my-8 h-[1px] w-full bg-gray-200" />
      <div className="flex w-full justify-center">
        <Pagination total={1} />
      </div>
    </div>
  )
}
