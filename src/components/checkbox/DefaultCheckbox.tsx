import React from "react"

export default function DefaultCheckbox() {
  const [checked, setChecked] =
    React.useState<boolean>(false)
  return (
    <div className="mb-4 flex items-center">
      {checked && (
        <i
          onClick={() => setChecked(!checked)}
          className="fa-solid fa-square-check text-primaryRed "
        ></i>
      )}
      {!checked && (
        <i
          onClick={() => setChecked(!checked)}
          className="fa-regular fa-square"
        ></i>
      )}
      <span
        onClick={() => setChecked(!checked)}
        className="ml-2  text-gray-900 dark:text-gray-300"
      >
        Lưu tài khoản
      </span>
    </div>
  )
}
