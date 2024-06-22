import { ProductType } from "../types"

export const ProductMocks: ProductType[] = Array(
  6,
)
  .fill(0)
  .map((item, index) => {
    return {
      id: index.toString(),
      name: "Yến Đẹp Dáng Bổ Thận",
      averageRate: 0,
      quantityRating: 0,
      price: 4000000,
      discount: 3000000,
      sale: 5,
      description:
        "Đây là những tổ yến thô được chọn lọc theo tỷ lệ kim cương (100 tổ chọn 1 tổ). Tổ hình tròn, dày, rất ít lông, thường có khoảng 2-4 vị trí có lông, không có bụng, nhiều sợi. Thời gian làm sạch giảm đến 50% so với yến thô thông thường. Tỷ lệ thất thoát khoảng 20% đối với những người không chuyên.",
      featuredImage:
        "https://ziiyen.com/wp-content/uploads/2022/10/yen-dao-thien-nhien-zii-yen-2.png",
      uses: "dungnguyen317",
      origin: "VietNam",
      maxQuantity: 100,
      createdAt: "2022-10-10",
      totalViews: 2,
    }
  })

/*
  id: string
  name: string
  featuredImage: string
  averageRate: number
  quantityRating: number
  price: number
  discount: number
  description: string
  uses: string
  origin: string
  maxQuantity: number
  createdAt: string
  totalViews: number
  */
