"use client";

import { motion } from "framer-motion";
import { useCart, menuItemsData } from "@/context/CartContext";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CategoryMenu() {
  const { addToCart } = useCart();
  const params = useParams();
  
  const categoryParam = params.category as string;
  
  const categoryItems = menuItemsData.filter(item => item.category === categoryParam);
  
  const title = categoryParam
    ? categoryParam.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : "Menu";

  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#1A1A1A] font-sans selection:bg-[#E31837] selection:text-white pt-10 pb-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <Link href="/" className="inline-flex items-center gap-2 font-bold text-sm md:text-base text-[#1A1A1A] hover:text-[#E31837] transition-colors mb-4 md:mb-6">
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" /> Kembali ke Home
          </Link>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-6">
            <div>
              <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tight text-[#1A1A1A] drop-shadow-[2px_2px_0px_#FFC72C] md:drop-shadow-[4px_4px_0px_#FFC72C]">
                {title}
              </h1>
              <p className="text-lg md:text-xl font-bold mt-2 md:mt-4 max-w-2xl text-neutral-600">
                Pilih menu terbaik dari kategori {title} dan pesan sekarang.
              </p>
            </div>
          </div>
        </div>

        {/* Empty State */}
        {categoryItems.length === 0 && (
          <div className="py-12 md:py-20 text-center">
            <div className="text-[80px] md:text-[100px] grayscale opacity-50 mb-4 md:mb-6">🤷‍♂️</div>
            <h3 className="text-2xl md:text-3xl font-black uppercase text-[#1A1A1A]">Belum Ada Menu</h3>
            <p className="text-sm md:text-base text-neutral-500 font-bold mt-2">Kategori ini sedang kosong atau belum tersedia.</p>
          </div>
        )}

        {/* Menu Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
          {categoryItems.map((item, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              key={item.id} 
              className="bg-white rounded-xl border-4 border-[#1A1A1A] shadow-[4px_4px_0px_#1A1A1A] md:shadow-[8px_8px_0px_#1A1A1A] p-3 md:p-5 group flex flex-col hover:-translate-y-2 hover:shadow-[6px_6px_0px_#1A1A1A] md:hover:shadow-[12px_12px_0px_#1A1A1A] transition-all w-full"
            >
              <div className={`${item.color} w-full h-56 border-4 border-[#1A1A1A] rounded-lg flex items-center justify-center text-6xl md:text-7xl mb-4 relative overflow-hidden group-hover:bg-[#FFC72C] transition-colors`}>
                {item.isImage ? (
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                ) : (
                  <motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="drop-shadow-[4px_4px_0px_rgba(26,26,26,0.3)] md:drop-shadow-[6px_6px_0px_rgba(26,26,26,0.3)]">
                    {item.image}
                  </motion.div>
                )}
                {item.tag && (
                  <span className="absolute top-2 right-2 bg-[#E31837] text-white border-2 border-[#1A1A1A] text-[10px] md:text-xs font-black uppercase px-2 py-1 md:px-3 md:py-1 shadow-[2px_2px_0px_#1A1A1A] rotate-3">
                    {item.tag}
                  </span>
                )}
              </div>
              <h3 className="font-black text-xl md:text-2xl mb-1 text-[#1A1A1A] uppercase leading-tight">{item.name}</h3>
              
              <div className="flex items-center justify-between mt-auto pt-4 md:pt-6">
                <div className="font-black text-xl md:text-2xl text-[#E31837]">
                  Rp {item.price.toLocaleString('id-ID')}
                </div>
                <button 
                  onClick={() => addToCart(item)}
                  className="w-10 h-10 md:w-12 md:h-12 bg-[#FFC72C] border-2 md:border-4 border-[#1A1A1A] text-[#1A1A1A] rounded-sm flex items-center justify-center shadow-[2px_2px_0px_#1A1A1A] md:shadow-[4px_4px_0px_#1A1A1A] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[1px_1px_0px_#1A1A1A] transition-all"
                >
                  <span className="font-black text-xl md:text-2xl">+</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
