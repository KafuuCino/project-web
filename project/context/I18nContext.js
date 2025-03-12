"use client"
import i18n from "i18next"
import { initReactI18next } from "react-i18next"

// Initialize i18next
i18n.use(initReactI18next).init({
  resources: {
    vi: {
      translation: {
        cart: "Giỏ hàng",
        addToCart: "Thêm vào giỏ",
        viewDetails: "Xem chi tiết",
        description: "Mô tả",
        specifications: "Thông số kỹ thuật",
        quantity: "Số lượng",
        shoppingCart: "Giỏ hàng của bạn",
        cartEmpty: "Giỏ hàng của bạn đang trống",
        startShopping: "Bắt đầu mua sắm",
        total: "Tổng cộng",
        clearCart: "Xóa giỏ hàng",
        checkout: "Thanh toán",
        backToProducts: "Quay lại danh sách sản phẩm",
        productNotFound: "Không tìm thấy sản phẩm",
        reviews: "đánh giá",
      },
    },
  },
  lng: "vi",
  fallbackLng: "vi",
  interpolation: {
    escapeValue: false,
  },
})

export function I18nextProvider({ children }) {
  return children
}

