"use client"

import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/context/CartContext"
import { Icon } from "@iconify/react"

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart()

  const handleQuantityChange = (newQuantity) => {
    updateQuantity(item.id, newQuantity)
  }

  const handleRemove = () => {
    removeFromCart(item.id)
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 flex flex-col sm:flex-row gap-4">
        <div className="relative w-full sm:w-40 h-40 bg-white rounded-md border flex items-center justify-center">
          <Image
            src={item.image || "/placeholder.svg?height=200&width=200"}
            alt={item.name}
            width={120}
            height={120}
            className="object-contain max-h-full"
          />
        </div>

        <div className="flex-1 min-w-0">
          <Link
            href={`/products/${item.id}`}
            className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition line-clamp-2"
          >
            {item.name}
          </Link>
          <p className="text-gray-600 mt-2 text-sm line-clamp-2">{item.description}</p>
          <div className="mt-4 text-2xl font-bold text-blue-600">{item.price.toLocaleString("vi-VN")}₫</div>
        </div>

        <div className="flex flex-row sm:flex-col items-center sm:items-end gap-4">
          <div className="flex items-center shadow-sm">
            <button
              onClick={() => handleQuantityChange(Math.max(1, item.quantity - 1))}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-l-md transition"
            >
              -
            </button>
            <span className="bg-white px-6 py-2 border-t border-b text-gray-700 min-w-[3rem] text-center">
              {item.quantity}
            </span>
            <button
              onClick={() => handleQuantityChange(item.quantity + 1)}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-r-md transition"
            >
              +
            </button>
          </div>

          <button
            onClick={handleRemove}
            className="text-red-500 hover:text-red-700 transition p-2 rounded-full hover:bg-red-50"
          >
            <Icon icon="lucide:trash-2" className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  )
}

