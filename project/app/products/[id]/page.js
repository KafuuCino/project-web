"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { fetchProductById } from "@/lib/api"
import ProductDetail from "@/components/ProductDetail"
import { useTranslation } from "react-i18next"
import Link from "next/link"
import { Icon } from "@iconify/react"

export default function ProductPage() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const { t } = useTranslation()

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchProductById(id)
        setProduct(data)
      } catch (error) {
        console.error("Error fetching product:", error)
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      getProduct()
    }
  }, [id])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">{t("productNotFound")}</h2>
        <Link href="/" className="text-blue-500 hover:underline flex items-center justify-center gap-2">
          <Icon icon="lucide:arrow-left" />
          {t("backToProducts")}
        </Link>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-6">
        <Link href="/" className="text-blue-500 hover:underline flex items-center gap-2">
          <Icon icon="lucide:arrow-left" />
          {t("backToProducts")}
        </Link>
      </div>
      <ProductDetail product={product} />
    </div>
  )
}

