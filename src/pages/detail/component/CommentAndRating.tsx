import React from "react"
import ProductRating from "../../../components/ProductRating"
import Pagination from "../../../components/pagination/Pagination"
import {
  useMutation,
  useQuery,
} from "react-query"
import { getPurchases } from "../../../services/profile"
import { useParams } from "react-router-dom"
import useModalCommon from "../../../hook/useModalCommon"
import RatingCommon from "../../../components/rating/RatingCommon"
import TextAreaWithOutline from "../../../components/input/css/TextAreaWithOutline"
import { postProductPreview } from "../../../services/review"
import {
  ToastContainer,
  toast,
} from "react-toastify"

export default function CommentAndRating() {
  const { id } = useParams()
  const {
    setOpen: setOpenModalWarning,
    renderModal: renderModalWarning,
  } = useModalCommon()

  const {
    setOpen: setOpenModalReview,
    renderModal: renderModalReview,
  } = useModalCommon()

  const [content, setContent] =
    React.useState<string>("")
  const [rating, setRating] =
    React.useState<number>(1)

  const { data } = useQuery({
    queryKey: ["get_purchase_for_review"],
    queryFn: getPurchases,
  })
  const {
    mutateAsync: postProductPreviewMutation,
  } = useMutation({
    mutationKey: ["product_preview"],
    mutationFn: postProductPreview,
  })
  const listProductUserPurchase: string[] =
    data?.data?.purchases
      ?.reduce((acc: string[], currItem: any) => {
        acc = [
          ...acc,
          ...(currItem?.products?.map(
            (product: any) => product.productId,
          ) || []),
        ]
        return acc
      }, [])
      ?.filter(
        (
          item: string,
          index: number,
          self: string[],
        ) =>
          index ===
          self.findIndex(
            (_self) => _self === item,
          ),
      )

  const isPurchase =
    listProductUserPurchase?.includes(id || "")

  const handleClickReview = () => {
    if (!isPurchase) {
      setOpenModalWarning(true)
      return
    }
    setOpenModalReview(true)
  }

  const handleReviewProduct = () => {
    if (!id) return

    postProductPreviewMutation({
      productId: id,
      content: content,
      rating: rating,
    })
      .then((res) => {
        toast.success(
          `Bạn đã đánh giá thành công, đánh giá của bạn sẽ được admin phê duyệt!`,
        )
      })
      .catch((e) => {
        toast.error(e.response.data.message)
      })
  }
  return (
    <div className="mt-8 bg-white p-8">
      <ToastContainer />
      {renderModalWarning({
        title: "Thông báo",
        content:
          "Bạn không thể nhận xét vì chưa mua sản phẩm này.",
        footer: "",
        okText: (
          <div
            className="cursor-pointer font-bold text-blue-400"
            onClick={() =>
              setOpenModalWarning(false)
            }
          >
            OK
          </div>
        ),
      })}
      {renderModalReview({
        title: (
          <div className="text-[18px]">
            Nhận xét sản phẩm
          </div>
        ),
        content: (
          <div className="flex flex-col items-center justify-center">
            <RatingCommon
              rating={rating}
              setRating={setRating}
            />
            <div className="h-4 w-full"></div>
            <TextAreaWithOutline
              content={content}
              setContent={setContent}
            />
          </div>
        ),
        footer: (
          <button
            className="flex w-full justify-center rounded-[10px] bg-primaryRed/90 py-2 text-white duration-150 hover:bg-primaryRed"
            onClick={handleReviewProduct}
          >
            Gửi nhận xét
          </button>
        ),
      })}
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
          <div
            className="my-2 flex w-[200px] cursor-pointer items-center justify-center rounded-[50px] bg-primaryRed px-4 py-2 font-bold text-primaryYellow duration-300 hover:bg-primaryYellow hover:text-primaryRed"
            onClick={handleClickReview}
          >
            VIẾT NHẬN XÉT
          </div>
        </div>
      </div>
      <div className="mx-2 mt-4 flex rounded-[10px] bg-[#fff3cd] p-4 text-[#664d03]">
        Chưa có đánh giá nào cho sản phẩm này.
      </div>
      <div className="my-8 h-[1px] w-full bg-gray-200" />
      {/* <div className="flex w-full justify-center">
        <Pagination total={3} />
      </div> */}
    </div>
  )
}
