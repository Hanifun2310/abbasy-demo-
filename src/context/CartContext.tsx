"use client";

import { createContext, useContext, useState, useMemo, ReactNode } from "react";

export type MenuItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  tag?: string;
  color: string;
  isImage?: boolean;
  category: string;
};

export type CartItem = MenuItem & { quantity: number };

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: MenuItem) => void;
  updateQuantity: (id: number, delta: number) => void;
  removeFromCart: (id: number) => void;
  cartTotal: number;
  cartCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  checkoutWhatsApp: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const menuItemsData: MenuItem[] = [
  // Paket Keluarga
  { id: 1, name: "Ayam Utuh PuasMAX", price: 106000, image: "/dummy/img2.jpg", tag: "Best Seller", color: "bg-white", isImage: true, category: "paket-keluarga" },
  { id: 11, name: "Family Feast Combo", price: 150000, image: "/dummy/img2.jpg", tag: "Value", color: "bg-white", isImage: true, category: "paket-keluarga" },
  
  // Ayam
  { id: 2, name: "Nasi Ayam Terasi Wangi", price: 25000, image: "/dummy/img2.jpg", tag: "Spicy", color: "bg-white", isImage: true, category: "ayam" },
  { id: 21, name: "Signature Crispy Chicken", price: 20000, image: "/dummy/img2.jpg", tag: "Crunchy", color: "bg-[#F4F1EA]", isImage: true, category: "ayam" },
  { id: 22, name: "Spicy Volcano Wings", price: 30000, image: "/dummy/img2.jpg", tag: "Hot", color: "bg-[#E31837]", isImage: true, category: "ayam" },
  
  // Camilan
  { id: 3, name: "Classic Beef Burger", price: 45000, image: "/dummy/img2.jpg", tag: "New", color: "bg-[#FFC72C]", isImage: true, category: "camilan" },
  { id: 31, name: "Golden French Fries", price: 18000, image: "/dummy/img2.jpg", color: "bg-[#FFC72C]", isImage: true, category: "camilan" },
  { id: 32, name: "Crispy Onion Rings", price: 15000, image: "/dummy/img2.jpg", color: "bg-white", isImage: true, category: "camilan" },
  
  // Minuman
  { id: 4, name: "Ice Cold Cola", price: 15000, image: "/dummy/img1.jpg", tag: "Drink", color: "bg-white", isImage: true, category: "minuman" },
  { id: 41, name: "Lemon Tea Refresh", price: 12000, image: "/dummy/img1.jpg", color: "bg-white", isImage: true, category: "minuman" },
  { id: 42, name: "Iced Milk Coffee", price: 22000, image: "/dummy/img1.jpg", tag: "New", color: "bg-white", isImage: true, category: "minuman" },
];

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartTotal = useMemo(() => cart.reduce((total, item) => total + item.price * item.quantity, 0), [cart]);
  const cartCount = useMemo(() => cart.reduce((count, item) => count + item.quantity, 0), [cart]);

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQ = item.quantity + delta;
        return newQ > 0 ? { ...item, quantity: newQ } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const checkoutWhatsApp = () => {
    if (cart.length === 0) return;
    
    let text = "Halo Abbasy, saya ingin memesan:\n\n";
    cart.forEach(item => {
      text += `- ${item.name} (${item.quantity}x) = Rp ${(item.price * item.quantity).toLocaleString('id-ID')}\n`;
    });
    text += `\n*Total: Rp ${cartTotal.toLocaleString('id-ID')}*`;
    text += "\n\nMohon info untuk proses selanjutnya. Terima kasih!";

    const encodedText = encodeURIComponent(text);
    const waNumber = "6281545497913"; // Using the Tanjung area number from the poster
    window.open(`https://wa.me/${waNumber}?text=${encodedText}`, "_blank");
  };

  return (
    <CartContext.Provider value={{
      cart, addToCart, updateQuantity, removeFromCart,
      cartTotal, cartCount, isCartOpen, setIsCartOpen, checkoutWhatsApp
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
