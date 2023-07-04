import React from "react"
import InputWithOutline from "../../components/input/InputWithOutline"

export default function ProfileChangePasswordPages() {
  const [currentPass, setCurrentPass] =
    React.useState<string>("")
  const [newPass, setNewPass] =
    React.useState<string>("")
  const [confirmPass, setConfirmPass] =
    React.useState<string>("")

  return (
    <div>
      <p className="font-serif text-[24px] font-bold text-primaryRed">
        Cập nhật thông tin
      </p>
      <div className="h-1 w-[50%] bg-primaryYellow" />
      <div className="my-2">
        <InputWithOutline
          type="password"
          name="Mật khẩu hiện tại"
          value={currentPass}
          setValue={setCurrentPass}
        />
      </div>
      <div className="my-2">
        <InputWithOutline
          type="password"
          name="Mật khẩu mới"
          value={newPass}
          setValue={setNewPass}
        />
      </div>
      <div className="my-2">
        <InputWithOutline
          type="password"
          name="Nhập lại mật khẩu mới"
          value={confirmPass}
          setValue={setConfirmPass}
        />
      </div>
      <button className="flex w-full justify-center rounded-[10px] bg-primaryRed/90 py-2 text-white duration-300 hover:bg-primaryRed">
        Đổi mật khẩu
      </button>
    </div>
  )
}
