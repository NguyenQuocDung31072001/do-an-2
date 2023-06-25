import React from "react"
import useClickOutside from "../../../hook/useClickOutside"

export default function UserIcon() {
  const [open, setOpen] =
    React.useState<boolean>(false)

  const { element } = useClickOutside({
    element: (
      <div className="relative">
        <i
          className="fas fa-user-alt mx-1 cursor-pointer rounded-[50%] bg-primaryYellow p-3 text-[16px] font-bold text-primaryRed duration-500  hover:bg-primaryRed hover:text-primaryYellow"
          onClick={() => setOpen(!open)}
        ></i>
        {open && (
          <ul className="absolute z-50 w-[160px] rounded-[10px] border-[1px] border-gray-200 bg-white py-2 text-gray-600">
            <li className="cursor-pointer px-2 duration-200 hover:bg-gray-100">
              Quản lý tài khoản
            </li>
            <li className="cursor-pointer px-2 duration-200 hover:bg-gray-100">
              Đăng xuất
            </li>
          </ul>
        )}
      </div>
    ),
    onClick: () => {
      setOpen(false)
    },
  })

  return element
}
