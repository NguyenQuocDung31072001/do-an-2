import { axiosInstance } from "../config/axiosInstance"

interface IPropsLoginService {
  email: string
  password: string
}
export const loginServices = async (
  data: IPropsLoginService,
) => {
  const res = await axiosInstance.post(
    "auth/login",
    {
      email: "phuchoang2411@gmail.com",
      password: "1234567",
    },
  )
  return res
}

export const logoutServices = async () => {
  const res = await axiosInstance.get(
    "auth/logout",
  )
  return res
}
