import { CategoryType } from "../types"

export const MockCategory: CategoryType[] = Array(
  10,
)
  .fill(0)
  .map((item, index) => {
    return {
      id: index.toString(),
      name: `Yến Sào Thất Sơn ${index}`,
    }
  })
