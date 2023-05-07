import React from "react"
import FeatureImage from "../../assets/handbook/featured-image.jpg"

export default function HandbookPages() {
  const ref = React.useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <div className="z-10 flex w-full">
        <div className="z-10 h-[600px] w-[50%] bg-[#841206] bg-pattern bg-cover bg-center px-16 py-36">
          <p className="font-serif text-[48px] font-bold text-[#d4aa5f]">
            Cẩm nang
          </p>
          <div className="h-[8px] w-[100px] bg-[#d4aa5f]"></div>
          <p className="py-8 text-white/50 ">
            Chia sẻ cách sống khỏe giúp các bạn có
            thể tham khảo và nắm bắt rõ hơn để có
            một sức khỏe tuyệt vời
          </p>
          <div
            className="flex w-[250px] cursor-pointer items-center justify-center rounded-[50px] bg-[#d4aa5f] p-4 font-bold text-[#841206] duration-200 hover:bg-white/90 hover:text-[#d4aa5f]"
            onClick={() =>
              ref?.current?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            KHÁM PHÁ NGAY
          </div>
        </div>
        <div className="z-10 h-[600px] w-[50%] bg-handbook-hero bg-cover bg-center"></div>
      </div>
      <div
        ref={ref}
        className="flex flex-wrap items-center justify-between bg-gray-100 px-16 py-8"
      >
        {Array(6)
          .fill(0)
          .map((item, index) => {
            return (
              <div
                key={index}
                className="my-4 w-[420px] overflow-hidden rounded-[10px] bg-white"
              >
                <div className="overflow-hidden">
                  <img
                    src={FeatureImage}
                    alt=""
                    className="cursor-pointer object-cover duration-200 hover:scale-110"
                  />
                </div>
                <p className="mt-4 px-2 font-bold">
                  Cách ăn yến sào tốt cho sức khỏe{" "}
                </p>
                <p className="mb-4 px-2 text-[14px] text-black/80 line-clamp-3">
                  Những tác dụng của yến sào có
                  thể khiến bạn cảm thấy món ăn
                  đắt đỏ này cũng đáng giá vì “sức
                  khỏe là vàng”. Tuy nhiên, nếu
                  không hiểu rõ ăn yến sào có tác
                  dụng gì hoặc không biết ăn yến
                  sào đúng cách thì bạn sẽ có nguy
                  cơ bị dị ứng, phản tác dụng và
                  phí tiền vô ích.
                </p>
              </div>
            )
          })}
      </div>
    </div>
  )
}
