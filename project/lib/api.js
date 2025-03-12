const mockLaptops = [
  {
    id: 1,
    name: 'MacBook Pro 16"',
    description: "Apple M2 Pro chip, 16GB RAM, 512GB SSD, 16-inch Liquid Retina XDR display",
    price: 59990000,
    image: "https://product.hstatic.net/200000722513/product/ava_1f67af2844144c318ed0dc9ec9d65ee6_1024x1024.png",
    rating: 4.8,
    reviews: 245,
    processor: "Apple M2 Pro",
    ram: "16GB",
    storage: "512GB SSD",
    display: '16" Liquid Retina XDR',
  },
  {
    id: 2,
    name: "Dell XPS 15",
    description: "Intel Core i7, 16GB RAM, 1TB SSD, 15.6-inch 4K UHD+ display, NVIDIA GeForce RTX 3050 Ti",
    price: 45990000,
    image: "https://product.hstatic.net/200000722513/product/ava_1f67af2844144c318ed0dc9ec9d65ee6_1024x1024.png",
    rating: 4.6,
    reviews: 189,
    processor: "Intel Core i7-12700H",
    ram: "16GB",
    storage: "1TB SSD",
    display: '15.6" 4K UHD+',
  },
  {
    id: 3,
    name: "Lenovo ThinkPad X1 Carbon",
    description: "Intel Core i5, 16GB RAM, 512GB SSD, 14-inch FHD+ display, Windows 11 Pro",
    price: 35990000,
    image: "https://product.hstatic.net/200000722513/product/ava_1f67af2844144c318ed0dc9ec9d65ee6_1024x1024.png",
    rating: 4.5,
    reviews: 156,
    processor: "Intel Core i5-1240P",
    ram: "16GB",
    storage: "512GB SSD",
    display: '14" FHD+',
  },
  {
    id: 4,
    name: "HP Spectre x360",
    description: "Intel Core i7, 16GB RAM, 1TB SSD, 13.5-inch 3K2K OLED display, 2-in-1 convertible",
    price: 40990000,
    image: "https://product.hstatic.net/200000722513/product/ava_1f67af2844144c318ed0dc9ec9d65ee6_1024x1024.png",
    rating: 4.7,
    reviews: 132,
    processor: "Intel Core i7-1255U",
    ram: "16GB",
    storage: "1TB SSD",
    display: '13.5" 3K2K OLED',
  },
  {
    id: 5,
    name: "ASUS ROG Zephyrus G14",
    description: "AMD Ryzen 9, 32GB RAM, 1TB SSD, 14-inch QHD display, NVIDIA GeForce RTX 4060",
    price: 42990000,
    image: "https://product.hstatic.net/200000722513/product/ava_1f67af2844144c318ed0dc9ec9d65ee6_1024x1024.png",
    rating: 4.9,
    reviews: 210,
    processor: "AMD Ryzen 9 7940HS",
    ram: "32GB",
    storage: "1TB SSD",
    display: '14" QHD 165Hz',
  },
  {
    id: 6,
    name: "Acer Swift 5",
    description: "Intel Core i7, 16GB RAM, 512GB SSD, 14-inch FHD IPS touch display, ultra-lightweight",
    price: 30990000,
    image: "https://product.hstatic.net/200000722513/product/ava_1f67af2844144c318ed0dc9ec9d65ee6_1024x1024.png",
    rating: 4.3,
    reviews: 98,
    processor: "Intel Core i7-1260P",
    ram: "16GB",
    storage: "512GB SSD",
    display: '14" FHD IPS Touch',
  },
  {
    id: 7,
    name: "Microsoft Surface Laptop 5",
    description: "Intel Core i5, 8GB RAM, 256GB SSD, 13.5-inch PixelSense display, Windows 11",
    price: 23990000,
    image: "https://product.hstatic.net/200000722513/product/ava_1f67af2844144c318ed0dc9ec9d65ee6_1024x1024.png",
    rating: 4.4,
    reviews: 87,
    processor: "Intel Core i5-1235U",
    ram: "8GB",
    storage: "256GB SSD",
    display: '13.5" PixelSense',
  },
  {
    id: 8,
    name: "Razer Blade 15",
    description: "Intel Core i9, 32GB RAM, 1TB SSD, 15.6-inch QHD 240Hz display, NVIDIA GeForce RTX 4070",
    price: 59990000,
    image: "https://product.hstatic.net/200000722513/product/ava_1f67af2844144c318ed0dc9ec9d65ee6_1024x1024.png",
    rating: 4.6,
    reviews: 76,
    processor: "Intel Core i9-13900H",
    ram: "32GB",
    storage: "1TB SSD",
    display: '15.6" QHD 240Hz',
  },
]

// API functions
export const fetchProducts = async () => {
  try {
    // For development, return mock data
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockLaptops), 500)
    })
  } catch (error) {
    console.error("Error fetching products:", error)
    throw error
  }
}

export const fetchProductById = async (id) => {
  try {
    // For development, return mock data
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const product = mockLaptops.find((p) => p.id === Number.parseInt(id))
        if (product) {
          resolve(product)
        } else {
          reject(new Error("Product not found"))
        }
      }, 500)
    })
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error)
    throw error
  }
}

