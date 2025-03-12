"use client"

import Link from "next/link"
import { useCart } from "@/context/CartContext"
import { useTranslation } from "react-i18next"
import { Icon } from "@iconify/react"
import { useState } from "react"

export default function Navbar() {
  const { cart } = useCart()
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav className="bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold flex items-center gap-2 hover:text-blue-400 transition-colors">
            <Icon icon="lucide:laptop" className="text-2xl text-blue-400" />
            <span className="bg-gradient-to-r from-blue-400 to-blue-200 text-transparent bg-clip-text">LaptopTech</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/cart" className="relative hover:text-blue-400 transition-colors">
              <Icon icon="lucide:shopping-cart" className="text-2xl" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          <button
            className="md:hidden hover:text-blue-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon icon={isMenuOpen ? "lucide:x" : "lucide:menu"} className="text-2xl" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <Link href="/cart" className="flex items-center gap-2 py-2 hover:text-blue-400 transition-colors">
              <Icon icon="lucide:shopping-cart" className="text-xl" />
              {t("cart")}
              {totalItems > 0 && (
                <span className="bg-blue-500 text-white text-xs rounded-full px-2 py-1 font-medium">{totalItems}</span>
              )}
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

