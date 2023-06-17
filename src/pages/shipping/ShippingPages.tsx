import React from "react"
import useStepForm from "../../hook/useStepForm"
const listTitle = [
  "Chọn sản phẩm",
  "Thông tin giao hàng",
  "Thanh toán",
]
export default function ShippingPages() {
  const {
    current,
    gotoStep,
    renderStepForm,
    setListTitle,
  } = useStepForm()

  React.useEffect(() => {
    setListTitle(listTitle)
    gotoStep(1)
  }, [])

  return (
    <div className="h-[100vh] bg-white px-32">
      {renderStepForm}
    </div>
  )
}
