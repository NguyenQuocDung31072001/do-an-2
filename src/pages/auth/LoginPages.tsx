import React from "react"
import InputWithOutline from "../../components/input/InputWithOutline"
import DefaultCheckbox from "../../components/checkbox/DefaultCheckbox"
import { Link } from "react-router-dom"
import { PathRouter } from "../../constant/path.router"

export default function LoginPages() {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] =
    React.useState<string>("")

  const handleLogin = () => {
    window.localStorage.setItem("user", "user")
    window.location.href = PathRouter.HOME
  }
  return (
    <div className="flex w-full items-center justify-center bg-gray-100">
      <div className="my-16 flex w-[50%] flex-col items-center justify-center rounded-[2px] bg-white p-8 shadow-sm">
        <div className="w-full ">
          <p className="font-serif text-[24px] font-bold text-primaryRed">
            Đăng nhập
          </p>
          <div className="mb-4 h-1 w-[50%] bg-primaryYellow"></div>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <InputWithOutline
            type="text"
            name="Email"
            value={email}
            setValue={setEmail}
          />
          <div className="w-full py-2" />
          <InputWithOutline
            type="password"
            name="Mật khẩu"
            value={password}
            setValue={setPassword}
          />
          <div className="mt-4 mb-2 flex w-full items-center justify-between">
            <DefaultCheckbox />
            <Link to={PathRouter.RESET_PASSWORD}>
              <span className="text-primaryRed">
                Quên mật khẩu?
              </span>
            </Link>
          </div>
          <button
            className="mb-4 w-full rounded-[10px] bg-primaryRed/90 py-2 text-white duration-300 hover:bg-primaryRed"
            onClick={handleLogin}
          >
            Đăng nhập
          </button>
          <span className="font-normal">
            Bạn chưa có tài khoản?
            <Link to={PathRouter.REGISTER}>
              <span className="text-primaryRed">
                Đăng ký ngay
              </span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}
