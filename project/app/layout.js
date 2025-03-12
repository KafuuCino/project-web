import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import { CartProvider } from "@/context/CartContext"
import { I18nextProvider } from "@/context/I18nContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "LaptopTech - Premium Laptops",
  description: "Find the best laptops for your needs",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <I18nextProvider>
          <CartProvider>
            <Navbar />
            <main className="container mx-auto px-4 py-8">{children}</main>
            <footer className="bg-gray-800 text-white py-6">
              <div className="container mx-auto px-4">
                <p className="text-center">© 2025 LaptopTech.</p>
              </div>
            </footer>
          </CartProvider>
        </I18nextProvider>
      </body>
    </html>
  )
}

