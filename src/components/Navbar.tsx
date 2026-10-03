"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, X, Plus, Minus, Phone, Menu } from "lucide-react";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export function Navbar() {
  const { cart, updateQuantity, removeFromCart, cartTotal, cartCount, isCartOpen, setIsCartOpen, checkoutWhatsApp } = useCart();
  const [isMenuHovered, setIsMenuHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full z-40 bg-[#F4F1EA] border-b-4 border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Mobile Menu Button & Logo */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden p-2 text-[#1A1A1A] hover:text-[#E31837]"
              >
                <Menu className="w-7 h-7 stroke-[3]" />
              </button>
              
              <Link href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#FFC72C] border-2 border-[#1A1A1A] shadow-[2px_2px_0px_#1A1A1A] rounded flex items-center justify-center font-black text-2xl text-[#1A1A1A] -rotate-3 hover:rotate-3 transition-transform cursor-pointer">
                  A
                </div>
                <span className="font-black text-2xl md:text-3xl tracking-tight text-[#1A1A1A] hidden sm:block">
                  Abbasy<span className="text-[#E31837]">.</span>
                </span>
              </Link>
            </div>
            
            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-8 font-black text-lg relative text-[#1A1A1A]">
              <Link href="/#promos" className="hover:text-[#E31837] hover:-translate-y-1 transition-transform">Promos</Link>
              
              <div 
                className="relative py-4 group"
                onMouseEnter={() => setIsMenuHovered(true)}
                onMouseLeave={() => setIsMenuHovered(false)}
              >
                <Link href="/#menu" className="hover:text-[#E31837] hover:-translate-y-1 transition-transform flex items-center gap-1">
                  Menu
                </Link>
                
                {/* Dropdown Menu Catalog */}
                <AnimatePresence>
                  {isMenuHovered && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 bg-[#F4F1EA] border-4 border-[#1A1A1A] shadow-[4px_4px_0px_#1A1A1A] w-48 flex flex-col z-50 overflow-hidden"
                    >
                      <Link href="/menu/ayam" className="px-4 py-3 border-b-4 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#FFC72C] hover:text-[#E31837] transition-colors">Ayam</Link>
                      <Link href="/menu/minuman" className="px-4 py-3 border-b-4 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#FFC72C] hover:text-[#E31837] transition-colors">Minuman</Link>
                      <Link href="/menu/camilan" className="px-4 py-3 border-b-4 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#FFC72C] hover:text-[#E31837] transition-colors">Camilan</Link>
                      <Link href="/menu/paket-keluarga" className="px-4 py-3 text-[#1A1A1A] hover:bg-[#FFC72C] hover:text-[#E31837] transition-colors">Paket Keluarga</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/#about" className="hover:text-[#E31837] hover:-translate-y-1 transition-transform">About</Link>
            </div>

            {/* Cart & Order Button */}
            <div className="flex items-center gap-3 md:gap-4">
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-[#1A1A1A] hover:text-[#E31837] transition-colors"
              >
                <ShoppingBag className="w-6 h-6 md:w-7 md:h-7 stroke-[2.5]" />
                {cartCount > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    key={cartCount}
                    className="absolute -top-1 -right-1 md:-right-2 w-5 h-5 md:w-6 md:h-6 bg-[#FFC72C] border-2 border-[#1A1A1A] text-[#1A1A1A] text-xs font-black rounded-full flex items-center justify-center"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </button>
              <Link 
                href="/#menu"
                className="hidden md:flex bg-[#E31837] text-white px-6 py-2 border-2 border-[#1A1A1A] shadow-[4px_4px_0px_#1A1A1A] font-black text-lg hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#1A1A1A] transition-all"
              >
                ORDER NOW
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-[#F4F1EA] flex flex-col"
          >
            <div className="p-4 border-b-4 border-[#1A1A1A] flex justify-between items-center h-20 bg-[#FFC72C]">
              <span className="font-black text-2xl tracking-tight text-[#1A1A1A]">
                Abbasy<span className="text-[#E31837]">.</span>
              </span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-white border-2 border-[#1A1A1A] shadow-[2px_2px_0px_#1A1A1A]">
                <X className="w-6 h-6 stroke-[3]" />
              </button>
            </div>
            <div className="flex flex-col p-6 font-black text-3xl gap-6 uppercase text-[#1A1A1A]">
              <Link onClick={() => setIsMobileMenuOpen(false)} href="/#promos" className="border-b-4 border-[#1A1A1A] pb-4 hover:text-[#E31837] transition-colors">Promos</Link>
              <div className="flex flex-col gap-4 border-b-4 border-[#1A1A1A] pb-4">
                <span className="text-[#E31837]">Categories</span>
                <Link onClick={() => setIsMobileMenuOpen(false)} href="/menu/ayam" className="text-xl pl-4 hover:text-[#E31837] transition-colors">Ayam</Link>
                <Link onClick={() => setIsMobileMenuOpen(false)} href="/menu/minuman" className="text-xl pl-4 hover:text-[#E31837] transition-colors">Minuman</Link>
                <Link onClick={() => setIsMobileMenuOpen(false)} href="/menu/camilan" className="text-xl pl-4 hover:text-[#E31837] transition-colors">Camilan</Link>
                <Link onClick={() => setIsMobileMenuOpen(false)} href="/menu/paket-keluarga" className="text-xl pl-4 hover:text-[#E31837] transition-colors">Paket Keluarga</Link>
              </div>
              <Link onClick={() => setIsMobileMenuOpen(false)} href="/#about" className="border-b-4 border-[#1A1A1A] pb-4 hover:text-[#E31837] transition-colors">About</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/50 z-[100] backdrop-blur-sm"
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-[#F4F1EA] z-[101] border-l-4 md:border-l-4 border-l-0 border-[#1A1A1A] flex flex-col shadow-2xl"
            >
              <div className="p-4 md:p-6 border-b-4 border-[#1A1A1A] flex justify-between items-center bg-[#FFC72C]">
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#1A1A1A]">Your Order</h2>
                <button onClick={() => setIsCartOpen(false)} className="p-2 bg-white border-2 border-[#1A1A1A] hover:bg-[#E31837] hover:text-white transition-colors shadow-[2px_2px_0px_#1A1A1A] text-[#1A1A1A]">
                  <X className="w-6 h-6 stroke-[3]" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 md:space-y-6">
                {cart.length === 0 ? (
                  <div className="text-center text-neutral-500 font-bold mt-20">
                    <div className="text-6xl mb-4 grayscale opacity-50">🍔</div>
                    <p>Your cart is empty.</p>
                    <p>Let&apos;s grab some crunch!</p>
                  </div>
                ) : (
                  cart.map(item => (
                    <div key={item.id} className="flex gap-3 md:gap-4 bg-white p-3 border-4 border-[#1A1A1A] shadow-[4px_4px_0px_#1A1A1A]">
                      <div className={`w-16 h-16 md:w-20 md:h-20 ${item.color} border-2 border-[#1A1A1A] flex items-center justify-center text-2xl md:text-3xl overflow-hidden shrink-0`}>
                        {item.isImage ? <img src={item.image} alt={item.name} className="w-full h-full object-cover" /> : item.image}
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="font-black leading-tight text-base md:text-lg text-[#1A1A1A]">{item.name}</h4>
                          <p className="text-[#E31837] font-black text-sm md:text-base">Rp {item.price.toLocaleString('id-ID')}</p>
                        </div>
                        <div className="flex items-center justify-between mt-2 text-[#1A1A1A]">
                          <div className="flex items-center gap-2 md:gap-3 bg-[#F4F1EA] border-2 border-[#1A1A1A] px-2 py-1">
                            <button onClick={() => updateQuantity(item.id, -1)}><Minus className="w-3 h-3 md:w-4 md:h-4 stroke-[3]" /></button>
                            <span className="font-black w-4 text-center text-sm md:text-base">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, 1)}><Plus className="w-3 h-3 md:w-4 md:h-4 stroke-[3]" /></button>
                          </div>
                          <button onClick={() => removeFromCart(item.id)} className="text-neutral-400 hover:text-[#E31837] font-bold text-xs md:text-sm underline decoration-2">
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="p-4 md:p-6 border-t-4 border-[#1A1A1A] bg-white">
                <div className="flex justify-between items-center mb-4 md:mb-6 font-black text-xl md:text-2xl text-[#1A1A1A]">
                  <span>TOTAL:</span>
                  <span className="text-[#E31837]">Rp {cartTotal.toLocaleString('id-ID')}</span>
                </div>
                <button 
                  onClick={checkoutWhatsApp}
                  disabled={cart.length === 0}
                  className="w-full bg-[#25D366] text-white py-3 md:py-4 border-4 border-[#1A1A1A] shadow-[4px_4px_0px_#1A1A1A] md:shadow-[6px_6px_0px_#1A1A1A] font-black text-lg md:text-xl hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_#1A1A1A] transition-all flex items-center justify-center gap-2 md:gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Phone className="w-5 h-5 md:w-6 md:h-6 fill-current" />
                  CHECKOUT VIA WA
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
