"use client"

import { useState } from "react"
import Image from "next/image"
import { useCart } from "@/context/CartContext"
import { useTranslation } from "react-i18next"
import { Icon } from "@iconify/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function ProductDetail({ product }) {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()
  const { t } = useTranslation()

  const handleAddToCart = () => {
    addToCart(product, quantity)
  }

  const images = product.images || [product.image || "/placeholder.svg?height=600&width=600"]

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} className="h-[400px]">
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center h-full w-full bg-white p-4">
                <Image
                  src={image || "/placeholder.svg?height=600&width=600"}
                  alt={`${product.name} - image ${index + 1}`}
                  width={300}
                  height={300}
                  className="object-contain max-h-[300px]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">{product.name}</h1>

        <div className="flex items-center gap-1 text-yellow-500 mb-4">
          {[...Array(5)].map((_, i) => (
            <Icon
              key={i}
              icon="lucide:star"
              className={i < Math.floor(product.rating) ? "fill-yellow-500" : "text-gray-300"}
            />
          ))}
          <span className="text-gray-700 text-sm ml-2">
            {product.rating.toFixed(1)} ({product.reviews || 0} {t("reviews")})
          </span>
        </div>

        <div className="text-3xl font-bold mb-6 text-blue-600">{product.price.toLocaleString("vi-VN")}₫</div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-gray-900">{t("description")}</h3>
          <p className="text-gray-700 leading-relaxed">{product.description}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-gray-900">{t("specifications")}</h3>
          <ul className="space-y-2 text-gray-700">
            {product.specs?.map((spec, index) => (
              <li key={index} className="flex items-center">
                <Icon icon="lucide:check" className="text-green-500 mr-2" />
                {spec}
              </li>
            )) || (
              <>
                <li className="flex items-center">
                  <Icon icon="lucide:cpu" className="text-gray-500 mr-2" />
                  <span className="font-medium">Processor:</span>
                  <span className="ml-2">{product.processor || "Intel Core i5"}</span>
                </li>
                <li className="flex items-center">
                  <Icon icon="lucide:database" className="text-gray-500 mr-2" />
                  <span className="font-medium">RAM:</span>
                  <span className="ml-2">{product.ram || "8GB"}</span>
                </li>
                <li className="flex items-center">
                  <Icon icon="lucide:hard-drive" className="text-gray-500 mr-2" />
                  <span className="font-medium">Storage:</span>
                  <span className="ml-2">{product.storage || "512GB SSD"}</span>
                </li>
                <li className="flex items-center">
                  <Icon icon="lucide:monitor" className="text-gray-500 mr-2" />
                  <span className="font-medium">Display:</span>
                  <span className="ml-2">{product.display || '15.6" FHD'}</span>
                </li>
              </>
            )}
          </ul>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <span className="font-semibold text-gray-900">{t("quantity")}:</span>
          <div className="flex items-center">
            <button
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-l-md transition"
            >
              -
            </button>
            <span className="bg-white px-6 py-2 border-t border-b text-gray-700">{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-r-md transition"
            >
              +
            </button>
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition flex items-center justify-center gap-2 font-semibold"
        >
          <Icon icon="lucide:shopping-cart" />
          {t("addToCart")}
        </button>
      </div>
    </div>
  )
}

