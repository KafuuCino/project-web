"use client"

import { useCart } from "@/context/CartContext"
import CartList from "@/components/CartList"
import { useTranslation } from "react-i18next"
import Link from "next/link"
import { Icon } from "@iconify/react"

export default function CartPage() {
  const { cart, clearCart } = useCart()
  const { t } = useTranslation()

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition"
        >
          <Icon icon="lucide:arrow-left" className="text-xl" />
          {t("backToProducts")}
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-8 text-gray-900">{t("shoppingCart")}</h1>

      {cart.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <Icon icon="lucide:shopping-cart" className="mx-auto text-gray-400 text-6xl mb-4" />
          <h2 className="text-2xl font-medium text-gray-900 mb-4">{t("cartEmpty")}</h2>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition font-medium"
          >
            <Icon icon="lucide:shopping-bag" />
            {t("startShopping")}
          </Link>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4">
            <CartList items={cart} />
          </div>

          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Tổng đơn hàng</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Tạm tính:</span>
                  <span>{totalPrice.toLocaleString("vi-VN")}₫</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Phí vận chuyển:</span>
                  <span>Miễn phí</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between items-center text-lg font-bold text-gray-900">
                    <span>{t("total")}:</span>
                    <span className="text-blue-600">{totalPrice.toLocaleString("vi-VN")}₫</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition font-medium">
                  {t("checkout")}
                </button>
                <button
                  onClick={clearCart}
                  className="w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-50 transition font-medium"
                >
                  {t("clearCart")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

