import React from "react"
import InputWithOutline from "../../components/input/InputWithOutline"

export default function ProfileInfoPages() {
  const [name, setName] =
    React.useState<string>("")
  const [email, setEmail] =
    React.useState<string>("")
  const [phone, setPhone] =
    React.useState<string>("")
  const [address, setAddress] =
    React.useState<string>("")
  return (
    <div>
      <p className="font-serif text-[24px] font-bold text-primaryRed">
        Cập nhật thông tin
      </p>
      <div className="h-1 w-[50%] bg-primaryYellow" />
      <div className="my-2">
        <InputWithOutline
          type="text"
          name="Email"
          value={email}
          setValue={setEmail}
        />
      </div>
      <div className="my-2">
        <InputWithOutline
          type="text"
          name="Họ tên"
          value={name}
          setValue={setName}
        />
      </div>
      <div className="my-2">
        <InputWithOutline
          type="text"
          name="Điện thoại"
          value={phone}
          setValue={setPhone}
        />
      </div>
      <div className="my-2">
        <InputWithOutline
          type="text"
          name="Địa chỉ"
          value={address}
          setValue={setAddress}
        />
      </div>
      <button className="flex w-full justify-center rounded-[10px] bg-primaryRed/90 py-2 text-white duration-300 hover:bg-primaryRed">
        Cập nhật
      </button>
    </div>
  )
}
