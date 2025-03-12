"use client"

import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/context/CartContext"
import { Icon } from "@iconify/react"

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product)
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="relative h-48 bg-white p-2 flex items-center justify-center">
        <Image
          src={product.image || "/placeholder.svg?height=300&width=300"}
          alt={product.name}
          width={150}
          height={150}
          className="object-contain max-h-full"
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
        <div className="flex items-center gap-1 text-yellow-500 mb-2">
          {[...Array(5)].map((_, i) => (
            <Icon
              key={i}
              icon={i < Math.floor(product.rating) ? "lucide:star" : "lucide:star"}
              className={i < Math.floor(product.rating) ? "fill-yellow-500" : "text-gray-300"}
            />
          ))}
          <span className="text-gray-600 text-sm ml-1">({product.reviews || 0})</span>
        </div>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>

        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">{product.price.toLocaleString("vi-VN")}₫</span>
          <div className="flex gap-2">
            <Link href={`/products/${product.id}`} className="text-blue-500 hover:text-blue-700 transition">
              <Icon icon="lucide:eye" className="text-xl" />
            </Link>
            <button onClick={handleAddToCart} className="text-blue-500 hover:text-blue-700 transition">
              <Icon icon="lucide:shopping-cart" className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

