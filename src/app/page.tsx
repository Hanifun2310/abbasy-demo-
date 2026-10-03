"use client";

import { motion } from "framer-motion";
import { ShoppingBag, ArrowRight, Flame, Sparkles, Tag, Phone, ChevronRight } from "lucide-react";
import { useCart, menuItemsData } from "@/context/CartContext";
import { useRef, useState } from "react";

export default function Home() {
  const { addToCart } = useCart();
  
  // For mouse drag scroll
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Get some specific items for the banners
  const puasMax = menuItemsData.find(item => item.id === 1)!;
  const terasiWangi = menuItemsData.find(item => item.id === 2)!;
  const featuredMenu = menuItemsData.slice(0, 4);

  return (
    <div className="bg-[#F4F1EA] text-[#1A1A1A] font-sans selection:bg-[#E31837] selection:text-white overflow-x-hidden">
      
      {/* Top Full-width Hero Banner */}
      <section className="w-full bg-[#E31837] relative overflow-hidden border-b-4 border-[#1A1A1A] py-16 md:py-24 lg:py-32">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-3/4 md:w-1/2 h-full bg-[#FFC72C] transform skew-x-12 translate-x-20 border-l-8 border-[#1A1A1A]"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-[#1A1A1A] rounded-full opacity-10"></div>
        <div className="absolute top-20 left-1/4 w-12 h-12 bg-white rounded-full opacity-20"></div>
        <div className="absolute top-1/4 right-1/4 text-6xl opacity-50 z-10 animate-bounce">✨</div>
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-start text-white">
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[#1A1A1A] text-[#FFC72C] font-black uppercase px-4 py-2 text-sm md:text-base border-2 border-white shadow-[4px_4px_0px_#FFC72C] mb-6 transform -rotate-2"
            >
              Selamat Datang di
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[130px] font-black leading-[0.85] tracking-tighter uppercase drop-shadow-[5px_5px_0px_#1A1A1A] mb-6"
            >
              ABBASY<br/><span className="text-[#FFC72C]">YAM!</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-3xl font-bold max-w-lg mb-8 drop-shadow-md text-white"
            >
              Jagonya Ayam Goreng Super Krispi & Sambal yang Bikin Nagih.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a href="#menu" className="bg-white text-[#1A1A1A] px-8 py-4 border-4 border-[#1A1A1A] font-black text-xl md:text-2xl uppercase shadow-[6px_6px_0px_#1A1A1A] hover:translate-y-[4px] hover:translate-x-[4px] hover:shadow-[2px_2px_0px_#1A1A1A] transition-all flex items-center gap-3 group">
                Order Sekarang 
                <ArrowRight className="w-6 h-6 stroke-[3] group-hover:translate-x-2 transition-transform" />
              </a>
            </motion.div>
          </div>
          
          {/* Floating Image Component */}
          <div className="w-full md:w-1/2 relative flex justify-center md:justify-end mt-10 md:mt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
              className="relative w-full max-w-[400px] lg:max-w-[500px] aspect-square z-20"
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="w-full h-full relative"
              >
                {/* 3D-like container */}
                <div className="absolute inset-0 bg-[#1A1A1A] rounded-full transform translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6"></div>
                <div className="absolute inset-0 border-8 border-white rounded-full overflow-hidden bg-[#FFC72C]">
                  <img src="/dummy/img1.jpg" alt="Ayam Krispi Abbasy" className="w-full h-full object-cover scale-110" />
                </div>
                
                {/* Highlight/Gloss effect for 3D feel */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none"></div>

                {/* Floating Badge */}
                <motion.div 
                  animate={{ rotate: [0, 10, 0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                  className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 bg-[#FFC72C] text-[#1A1A1A] rounded-full w-28 h-28 md:w-36 md:h-36 flex items-center justify-center border-4 border-[#1A1A1A] shadow-[4px_4px_0px_#1A1A1A] z-30"
                >
                  <div className="font-black text-lg md:text-2xl uppercase text-center leading-tight">
                    100%<br/>HALAL
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          
        </div>
      </section>

      {/* Main Promo Banners (Previously Hero) */}
      <section className="pt-8 md:pt-12 pb-12 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 h-auto lg:h-[75vh]">
          
          {/* Main Huge Banner (Left) - PuasMAX */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 bg-[#1A1A1A] rounded-3xl border-4 border-[#1A1A1A] shadow-[8px_8px_0px_#E31837] md:shadow-[12px_12px_0px_#E31837] overflow-hidden relative group cursor-pointer min-h-[400px]"
          >
            <img src="/dummy/img1.jpg" alt="Ayam Utuh PuasMAX" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            
            <div className="relative z-10 p-6 md:p-8 lg:p-12 h-full flex flex-col justify-end">
              <div className="inline-block bg-[#E31837] text-white font-black text-sm md:text-base px-3 py-1 md:px-4 md:py-1 -rotate-2 mb-2 md:mb-4 border-2 border-dashed border-white self-start">
                AYAM UTUH
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[100px] font-black leading-[0.85] tracking-tighter text-white uppercase drop-shadow-[2px_2px_0px_#E31837] md:drop-shadow-[4px_4px_0px_#E31837]">
                PUAS<span className="text-[#FFC72C]">MAX</span>
              </h1>
              <p className="mt-2 md:mt-4 text-lg md:text-2xl font-bold text-white/90 max-w-md drop-shadow-md">
                Ayam utuh paling PUAS se-Berau. Nikmatin bareng orang tersayang!
              </p>
              
              <button 
                onClick={() => addToCart(puasMax)}
                className="mt-6 md:mt-8 bg-[#FFC72C] text-[#1A1A1A] px-6 py-3 md:px-8 md:py-4 border-4 border-[#1A1A1A] shadow-[4px_4px_0px_#1A1A1A] md:shadow-[6px_6px_0px_#1A1A1A] font-black text-lg md:text-xl hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_#1A1A1A] transition-all flex items-center gap-2 md:gap-3 w-fit"
              >
                ORDER SEKARANG <ShoppingBag className="w-5 h-5 md:w-6 md:h-6 stroke-[3]" />
              </button>
            </div>
          </motion.div>

          {/* Side Banners (Right) */}
          <div className="w-full lg:w-[450px] flex flex-col gap-6">
            
            {/* Terasi Wangi Banner */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-[1.5] bg-[#FFC72C] rounded-3xl border-4 border-[#1A1A1A] shadow-[8px_8px_0px_#1A1A1A] relative overflow-hidden group cursor-pointer min-h-[250px]"
            >
              <img src="/dummy/img1.jpg" alt="Nasi Ayam Terasi Wangi" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

              <div className="relative z-10 p-6 flex flex-col justify-between h-full">
                <div className="flex justify-end items-start">
                  <div className="bg-white p-2 rounded-full border-2 border-[#1A1A1A]">
                    <Flame className="w-5 h-5 md:w-6 md:h-6 text-[#E31837]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-black text-3xl md:text-4xl uppercase leading-none drop-shadow-[2px_2px_0px_#E31837]">
                    Terasi<br/><span className="text-[#FFC72C]">Wangi</span>
                  </h3>
                  <p className="text-white font-bold mt-1 md:mt-2 text-sm md:text-base">Dengan nasi daun jeruk!</p>
                  <button 
                    onClick={() => addToCart(terasiWangi)}
                    className="mt-3 md:mt-4 bg-[#E31837] text-white px-4 py-2 md:px-6 md:py-2 border-2 border-[#1A1A1A] shadow-[3px_3px_0px_#1A1A1A] md:shadow-[4px_4px_0px_#1A1A1A] font-black text-sm md:text-base hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#1A1A1A] transition-all"
                  >
                    CUMA 25RB
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex-1 bg-[#1A1A1A] rounded-3xl border-4 border-[#1A1A1A] shadow-[8px_8px_0px_#FFC72C] p-6 relative overflow-hidden group cursor-pointer min-h-[200px]"
            >
              <div className="absolute inset-0 bg-[#E31837] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
              
              <div className="relative z-10 flex flex-col justify-between h-full text-white">
                <div className="flex justify-between items-start">
                  <h3 className="font-black text-2xl md:text-3xl uppercase leading-none z-20">Sweet<br/>Treats</h3>
                  <Sparkles className="w-5 h-5 md:w-6 md:h-6 z-20" />
                </div>
                <div className="w-24 h-24 md:w-32 md:h-32 self-end transform rotate-12 group-hover:rotate-0 transition-transform mt-auto z-20 relative">
                  <img src="/dummy/img2.jpg" alt="Sweet Treats" className="absolute inset-0 w-full h-full object-cover rounded-full border-4 border-white shadow-[4px_4px_0px_#1A1A1A]" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wild Marquee Banner */}
      <div className="w-full bg-[#E31837] border-y-4 border-[#1A1A1A] py-2 md:py-3 overflow-hidden whitespace-nowrap flex shadow-[0px_4px_0px_#1A1A1A] relative z-10">
        <motion.div 
          animate={{ x: [0, -1000] }} 
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="flex gap-4 md:gap-8 font-black text-white text-lg md:text-2xl uppercase tracking-widest items-center"
        >
          {Array(10).fill("ABBASY YAM! • HALAL INDONESIA • NO. 1 KELUARGA • ").map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </motion.div>
      </div>

      {/* Promos Section */}
      <section id="promos" className="py-16 md:py-24 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <Tag className="w-8 h-8 md:w-10 md:h-10 text-[#E31837]" />
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-[#1A1A1A]">Hot Deals</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Promo 1 */}
          <div className="rounded-2xl border-4 border-[#1A1A1A] shadow-[8px_8px_0px_#1A1A1A] flex items-center justify-between group hover:-translate-y-2 transition-transform cursor-pointer overflow-hidden relative min-h-[200px] md:min-h-[280px]">
            <img src="/dummy/img1.jpg" alt="Paket Keluarga" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#4FA2E0] via-[#4FA2E0]/80 to-transparent"></div>
            
            <div className="relative z-10 p-6 md:p-8 w-full md:w-3/4 flex flex-col justify-center h-full">
              <h3 className="font-black text-4xl md:text-5xl text-white uppercase drop-shadow-[2px_2px_0px_#1A1A1A] leading-none mb-3">Paket<br/>Keluarga</h3>
              <p className="font-bold text-[#1A1A1A] bg-[#FFC72C] inline-block px-3 py-1 border-2 border-[#1A1A1A] shadow-[2px_2px_0px_#1A1A1A] -rotate-2 w-fit">Diskon 20% khusus Weekend</p>
              <button className="mt-6 bg-[#E31837] text-white px-6 py-2 border-2 border-[#1A1A1A] font-black text-sm md:text-base uppercase shadow-[3px_3px_0px_#1A1A1A] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_#1A1A1A] transition-all flex items-center gap-2 w-fit">
                Klaim Promo <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          {/* Promo 2 */}
          <div className="rounded-2xl border-4 border-[#1A1A1A] shadow-[8px_8px_0px_#1A1A1A] flex items-center justify-between group hover:-translate-y-2 transition-transform cursor-pointer overflow-hidden relative min-h-[200px] md:min-h-[280px]">
            <img src="/dummy/img2.jpg" alt="Makan Siang" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF9B42] via-[#FF9B42]/80 to-transparent"></div>
            
            <div className="relative z-10 p-6 md:p-8 w-full md:w-3/4 flex flex-col justify-center h-full">
              <h3 className="font-black text-4xl md:text-5xl text-white uppercase drop-shadow-[2px_2px_0px_#1A1A1A] leading-none mb-3">Makan<br/>Siang</h3>
              <p className="font-bold text-[#1A1A1A] bg-white inline-block px-3 py-1 border-2 border-[#1A1A1A] shadow-[2px_2px_0px_#1A1A1A] rotate-2 w-fit">Gratis Es Kopi Susu</p>
              <button className="mt-6 bg-[#E31837] text-white px-6 py-2 border-2 border-[#1A1A1A] font-black text-sm md:text-base uppercase shadow-[3px_3px_0px_#1A1A1A] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_#1A1A1A] transition-all flex items-center gap-2 w-fit">
                Klaim Promo <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Menu / Ordering Section - Graphic Style */}
      <section id="menu" className="py-16 md:py-24 bg-[#1A1A1A] text-white border-y-4 border-[#1A1A1A]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-4 md:gap-6">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight text-[#FFC72C] drop-shadow-[2px_2px_0px_#E31837] md:drop-shadow-[4px_4px_0px_#E31837]">Menu Favorit</h2>
              <p className="text-lg md:text-xl font-bold mt-2 md:mt-4 max-w-2xl text-white/80">Pilih menu andalan Abbasy Yam dan pesan langsung via WhatsApp!</p>
              
              <div className="flex sm:hidden items-center gap-2 mt-4 text-[#FFC72C] bg-[#1A1A1A] border-2 border-[#FFC72C] px-3 py-1.5 w-fit rounded-full text-sm font-bold shadow-[2px_2px_0px_#FFC72C] animate-pulse">
                <ChevronRight className="w-4 h-4" />
                <span>Geser untuk melihat menu lainnya</span>
              </div>
            </div>
          </div>
          
          <div 
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex overflow-x-auto overscroll-x-none pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:place-items-stretch [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing"
          >
            {featuredMenu.map((item, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                key={item.id} 
                className="bg-[#F4F1EA] rounded-xl border-4 border-[#1A1A1A] shadow-[6px_6px_0px_#FFC72C] md:shadow-[8px_8px_0px_#FFC72C] p-4 md:p-5 group flex flex-col shrink-0 w-[280px] sm:w-full"
              >
                <div className={`${item.color} w-full h-56 md:h-48 border-4 border-[#1A1A1A] rounded-lg flex items-center justify-center text-6xl md:text-7xl mb-4 relative overflow-hidden group-hover:bg-[#FFC72C] transition-colors`}>
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
      </section>

      {/* Loud Footer */}
      <footer id="about" className="bg-[#E31837] border-t-4 border-[#1A1A1A] pt-12 md:pt-20 pb-8 md:pb-10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16 text-[#1A1A1A]">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#1A1A1A] rounded flex items-center justify-center font-black text-2xl md:text-3xl text-[#FFC72C] rotate-6">
                  A
                </div>
                <span className="font-black text-3xl md:text-4xl tracking-tight text-[#1A1A1A]">Abbasy Yam!</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black uppercase leading-[0.9] text-white drop-shadow-[2px_2px_0px_#1A1A1A] md:drop-shadow-[3px_3px_0px_#1A1A1A] mb-4 md:mb-6">
                No.1 Ayam Goreng<br/>Keluarga Indonesia.
              </h2>
              <p className="text-lg md:text-xl font-bold max-w-md bg-white p-3 md:p-4 border-4 border-[#1A1A1A] shadow-[4px_4px_0px_#1A1A1A] md:shadow-[6px_6px_0px_#1A1A1A]">
                Pesan dari mana saja, kami antar. Lebih Murah & Praktis! Tersedia di area Tanjung dan Sambaliung.
              </p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <h4 className="font-black text-xl md:text-2xl uppercase mb-4 md:mb-6 text-white drop-shadow-[2px_2px_0px_#1A1A1A]">Pemesanan</h4>
              <ul className="space-y-3 md:space-y-4 font-bold text-lg md:text-xl text-white">
                <li className="flex items-center gap-2"><Phone className="w-4 h-4 md:w-5 md:h-5"/> Area Tanjung</li>
                <li className="flex items-center gap-2"><Phone className="w-4 h-4 md:w-5 md:h-5"/> Luar Tanjung</li>
                <li className="flex items-center gap-2"><Phone className="w-4 h-4 md:w-5 md:h-5"/> Sambaliung</li>
              </ul>
            </div>
            
            <div className="mt-4 md:mt-0">
              <h4 className="font-black text-xl md:text-2xl uppercase mb-4 md:mb-6 text-white drop-shadow-[2px_2px_0px_#1A1A1A]">Sertifikasi</h4>
              <div className="bg-white p-3 md:p-4 border-4 border-[#1A1A1A] shadow-[4px_4px_0px_#1A1A1A] inline-block -rotate-2">
                <h3 className="font-black text-xl md:text-2xl text-[#1A1A1A]">HALAL</h3>
                <p className="font-bold text-[#E31837] text-sm md:text-base">INDONESIA</p>
              </div>
            </div>
          </div>
          
          <div className="border-t-4 border-[#1A1A1A] pt-6 md:pt-8 flex flex-col-reverse md:flex-row justify-between items-center gap-4 font-bold text-sm md:text-lg text-[#1A1A1A] text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} ABBASY YAM. ALL RIGHTS RESERVED.</p>
            <p className="bg-white px-3 py-1 md:px-4 border-2 border-[#1A1A1A] -rotate-2">LEBIH MURAH & PRAKTIS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
