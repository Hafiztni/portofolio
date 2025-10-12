// src/components/PortfolioGallery.jsx
import React, { useEffect, useState } from "react";
import { showcases } from "../data.js";

export default function PortfolioGallery({ className = "" }) {
  const [selectedShowcase, setSelectedShowcase] = useState(showcases[0]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false); // 👈 tambahan

  const images = selectedShowcase.images;

  // ✅ Deteksi apakah layar sedang mobile (misal di HP vertikal)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // ukuran gambar menyesuaikan orientasi
  const imageWidth = isMobile
    ? selectedShowcase.width * 0.5 // kecilkan 30%
    : selectedShowcase.width;
  const imageHeight = isMobile
    ? selectedShowcase.height * 0.5
    : selectedShowcase.height;

  // lightbox handler
  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  };

  const prev = (e) => {
    e?.stopPropagation();
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  };

  const next = (e) => {
    e?.stopPropagation();
    setCurrentIndex((i) => (i + 1) % images.length);
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedShowcase]);

  useEffect(() => {
    const onKey = (e) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, images.length]);

  return (
    <section className={`portfolio-gallery ${className}`}>
      {/* header */}
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold mb-2">Portfolio</h2>
        <p className="text-sm text-gray-400 mb-4">Click image to open preview</p>

        <div className="flex justify-center gap-3 flex-wrap">
          {showcases.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelectedShowcase(s)}
              className={`px-4 py-2 text-sm rounded-full transition-all ${
                selectedShowcase.id === s.id
                  ? "bg-violet-600 text-white shadow-lg"
                  : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>
      </div>

      {/* grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden rounded-xl cursor-pointer group"
            style={{
              height: imageHeight,
              width: "100%",
            }}
            onClick={() => openLightbox(idx)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
              width={imageWidth}
              height={imageHeight}
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
          </div>
        ))}
      </div>

      {/* lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            className="absolute top-6 right-6 text-white text-2xl p-2 rounded-full hover:bg-white/10"
            aria-label="Close"
          >
            ✕
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prev(e);
            }}
            className="absolute left-6 text-white text-3xl p-3 rounded-full hover:bg-white/10"
            aria-label="Previous"
          >
            ‹
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              next(e);
            }}
            className="absolute right-6 text-white text-3xl p-3 rounded-full hover:bg-white/10"
            aria-label="Next"
          >
            ›
          </button>

          <div
            className="flex items-center justify-center max-w-[95%] max-h-[95%]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="max-w-full max-h-full rounded-lg shadow-lg"
            />
          </div>

          <div className="absolute bottom-6 text-center text-sm text-gray-200">
            {selectedShowcase.title} — {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
}
