export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Smartphone XYZ",
    price: 2999000,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=2042&auto=format&fit=crop",
    category: "Elektronik",
    description: "Smartphone terbaru dengan kamera 108MP dan baterai 5000mAh."
  },
  {
    id: 2,
    name: "Laptop Ultra",
    price: 12500000,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop",
    category: "Elektronik",
    description: "Laptop tipis dan ringan dengan performa tinggi untuk produktivitas."
  },
  {
    id: 3,
    name: "Sepatu Olahraga",
    price: 899000,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop",
    category: "Fashion",
    description: "Sepatu olahraga nyaman dengan teknologi bantalan udara."
  },
  {
    id: 4,
    name: "Tas Ransel",
    price: 450000,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1974&auto=format&fit=crop",
    category: "Fashion",
    description: "Tas ransel tahan air dengan banyak kompartemen."
  },
  {
    id: 5,
    name: "Headphone Wireless",
    price: 1200000,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
    category: "Elektronik",
    description: "Headphone wireless dengan noise cancelling dan kualitas suara premium."
  },
  {
    id: 6,
    name: "Jam Tangan Pintar",
    price: 1800000,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop",
    category: "Aksesoris",
    description: "Jam tangan pintar dengan fitur pemantauan kesehatan dan notifikasi."
  },
  {
    id: 7,
    name: "Kamera Mirrorless",
    price: 8500000,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1964&auto=format&fit=crop",
    category: "Elektronik",
    description: "Kamera mirrorless dengan sensor full-frame dan kemampuan video 4K."
  },
  {
    id: 8,
    name: "Blender Multifungsi",
    price: 750000,
    image: "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?q=80&w=2070&auto=format&fit=crop",
    category: "Peralatan Rumah",
    description: "Blender multifungsi untuk membuat smoothie, jus, dan menghaluskan bahan makanan."
  }
];