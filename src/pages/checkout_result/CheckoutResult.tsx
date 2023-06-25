import React from "react"
import useStepForm from "../../hook/useStepForm"
import { useNavigate } from "react-router-dom"
import { PathRouter } from "../../constant/path.router"

const listTitleData = [
  "Chọn sản phẩm",
  "Thông tin giao hàng",
  "Thanh toán",
]

export default function CheckoutResult() {
  const {
    gotoStep,
    renderStepForm,
    listTitle,
    setListTitle,
  } = useStepForm()

  const navigate = useNavigate()

  React.useEffect(() => {
    setListTitle(listTitleData)
  }, [])

  React.useEffect(() => {
    gotoStep(3)
  }, [listTitle])

  return (
    <div className="h-[100vh] bg-white">
      <div className="px-32">
        {renderStepForm}
      </div>
      <div className="my-8 h-[1px] w-full bg-gray-200" />
      <div className="px-64">
        <div className="flex flex-col items-center rounded-lg border-[1px] border-gray-100 px-8 py-4 shadow-lg">
          <i className="far fa-check-circle my-8 text-[64px] text-primaryRed"></i>

          <p className="mb-4 text-[24px] font-medium">
            Đặt hàng thành công
          </p>
          <p className="text-gray-500">
            Đơn hàng của quý khách sẽ được xử lí
            trong 1 - 3 ngày.
          </p>
          <p className="text-gray-500">
            Vui lòng đợi chúng tôi liên hệ xác
            nhận đơn hàng.
          </p>
          <button
            className="my-4 flex justify-center rounded-[20px] bg-primaryRed py-2 px-8 font-bold text-primaryYellow duration-300 hover:bg-primaryYellow hover:text-primaryRed"
            onClick={() =>
              navigate(PathRouter.CHECKOUT_RESULT)
            }
          >
            Xem đơn hàng
          </button>
        </div>
      </div>
    </div>
  )
}
