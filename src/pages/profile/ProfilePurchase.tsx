import React from "react"
import { convertToVNPrice } from "../../utils/string"

const fakeData = [
  {
    time: "06/05/2023,16:58",
    product: [
      {
        name: "Yến Tăng Chiều Cao Thông Minh",
        link: "",
        quantity: 1,
        price: "4100000",
      },
    ],
    status: "Pending",
  },
  {
    time: "16/06/2023,16:03",
    product: [
      {
        name: "Yến Khoẻ Mạnh Bổ Thận",
        link: "",
        quantity: 2,
        price: "600000",
      },
    ],
    status: "Pending",
  },

  {
    time: "20/06/2023,11:10",
    product: [
      {
        name: "Yến Đẹp Dáng Bổ Thận",
        link: "",
        quantity: 3,
        price: "600000",
      },
      {
        name: "Yến Đẹp Dáng Số 1",
        link: "",
        quantity: 1,
        price: "250000",
      },
      {
        name: "Yến Sáng Tạo Sáng Mắt",
        link: "",
        quantity: 1,
        price: "350000",
      },
    ],
    status: "Pending",
  },
  {
    time: "25/06/2023,15:37",
    product: [
      {
        name: "Yến Khoẻ Mạnh Bổ Thận",
        link: "",
        quantity: 1,
        price: "300000",
      },
    ],
    status: "Pending",
  },
]
export default function ProfilePurchase() {
  return (
    <div>
      <table className="w-full table-auto">
        <thead className="bg-gray-200/70">
          <tr className="">
            <th scope="col" className="px-4 py-2">
              TT
            </th>
            <th scope="col" className="px-4 py-2">
              Đơn hàng
            </th>
            <th scope="col" className="px-4 py-2">
              Thành tiền
            </th>
            <th scope="col" className="px-4 py-2">
              Trạng thái
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-200/10">
          {fakeData.map((data, index) => {
            const totalPrice =
              data.product.reduce((acc, curr) => {
                acc =
                  acc +
                  Number(curr.price) *
                    curr.quantity
                return acc
              }, 0)
            return (
              <tr
                key={index}
                className="my-2 hover:bg-gray-100"
              >
                <td className="px-4 py-2">
                  {index + 1}
                </td>
                <td className="px-4 py-2">
                  <p>Đặt ngày {data.time}</p>
                  <ul>
                    {data.product.map(
                      (productItem, index) => {
                        return (
                          <li
                            key={index + 1909}
                            className="my-1 list-inside list-disc"
                          >
                            <span className="mr-2 font-semibold text-black">
                              {
                                productItem.quantity
                              }
                              x
                            </span>
                            <span className="cursor-pointer font-medium text-primaryRed">
                              {productItem.name}
                            </span>
                          </li>
                        )
                      },
                    )}
                  </ul>
                </td>
                <td className="px-4 py-2">
                  {convertToVNPrice(totalPrice)}
                </td>
                <td className="px-4 py-2">
                  {data.status}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
