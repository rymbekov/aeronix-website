import { AnimatePresence, motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { generateSrcSet, generateSizes, getMediumImage, getLargeImage } from '../utils/imageUtils';

const galleryImages = [
  '/products/gallery/DSC00677.webp',
  '/products/gallery/DSC00678.webp',
  '/products/gallery/DSC00679.webp',
  '/products/gallery/DSC00680.webp',
  '/products/gallery/DSC00681.webp',
  '/products/gallery/DSC00682.webp',
  '/products/gallery/DSC00683.webp',
  '/products/gallery/DSC00684.webp',
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeImage();
    };
    
    if (selectedImage !== null) {
      document.addEventListener('keydown', handleEsc);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [selectedImage]);

  const openImage = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square cursor-pointer overflow-hidden rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 group"
            onClick={() => openImage(index)}
          >
            <img
              src={getMediumImage(image)}
              srcSet={generateSrcSet(image)}
              sizes={generateSizes('gallery')}
              alt={`Галерея AERONIX ${index + 1}`}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = '/placeholder-product.png';
              }}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeImage}
            />

            {/* Modal */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-2 sm:p-3 rounded-full text-white transition-colors z-10"
                onClick={closeImage}
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Image Container */}
              <div className="relative w-full max-w-6xl max-h-[90vh] flex items-center justify-center">
                <img
                  key={selectedImage}
                  src={getLargeImage(galleryImages[selectedImage])}
                  srcSet={generateSrcSet(galleryImages[selectedImage])}
                  sizes={generateSizes('modal')}
                  alt={`Галерея AERONIX ${selectedImage + 1}`}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                />

                {/* Navigation Arrows */}
                <button
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all hover:scale-110 active:scale-95"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                </button>
                <button
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all hover:scale-110 active:scale-95"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">
                  {selectedImage + 1} / {galleryImages.length}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
