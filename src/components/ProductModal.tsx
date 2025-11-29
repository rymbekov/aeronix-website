import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Package, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { Product } from '../data/products';
import { generateSrcSet, generateSizes, getLargeImage, getSmallImage } from '../utils/imageUtils';
import WhatsAppIcon from './WhatsAppIcon';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const { t, i18n } = useTranslation();

  const getProductPriceMessage = (productName: string) => {
    if (i18n.language === 'kk') {
      return `Сәлеметсіз бе! ${productName} клапанына бағасын білгім келеді.\n\nСаны: \nҚала: \nБайланыс тұлғасы: \nТелефон: `;
    }
    return `Здравствуйте! Хочу узнать цену на клапан ${productName}.\n\nКоличество: \nГород: \nКонтактное лицо: \nТелефон: `;
  };
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
      setSelectedImageIndex(0); // Reset to first image
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!product) return null;

  const isWarm = product.category === 'warm';
  const images = product.images || [];
  const hasImages = images.length > 0;

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
          >
            <motion.div
              className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-4xl w-full my-8 relative max-h-[90vh] overflow-hidden flex flex-col"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className={`relative p-4 sm:p-6 md:p-8 rounded-t-2xl sm:rounded-t-3xl ${
                isWarm 
                  ? 'bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700' 
                  : 'bg-gradient-to-br from-aeronix-blue via-blue-600 to-blue-700'
              }`}>
                {/* Close Button */}
                <button
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/20 hover:bg-white/30 p-1.5 sm:p-2 rounded-full text-white transition-colors z-10"
                  onClick={onClose}
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                <div className="text-white">
                  <div>
                    <span className="text-white/80 text-xs sm:text-sm font-medium">
                      {isWarm ? t('products.modal.warmCategory') : t('products.modal.coldCategory')}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-1 sm:mt-2 mb-2 sm:mb-3">
                    {product.fullName}
                  </h2>
                  <p className="text-white/90 text-sm sm:text-base md:text-lg">
                    {t(product.descriptionKey)}
                  </p>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto flex-1">
                {/* Image Gallery */}
                {hasImages && (
                  <div className="relative bg-gray-100 py-4 sm:py-6 md:py-8">
                    <div className="max-w-4xl mx-auto px-3 sm:px-6 md:px-8">
                      {/* Main Image */}
                      <div className="relative aspect-video bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-xl mb-3 sm:mb-4">
                        <img
                          key={selectedImageIndex}
                          src={getLargeImage(images[selectedImageIndex])}
                          srcSet={generateSrcSet(images[selectedImageIndex])}
                          sizes={generateSizes('modal')}
                          alt={`${product.fullName} - фото ${selectedImageIndex + 1}`}
                          className="w-full h-full object-contain"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.src = '/placeholder-product.png';
                          }}
                        />

                        {/* Navigation Arrows */}
                        {images.length > 1 && (
                          <>
                            <button
                              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all hover:scale-110 active:scale-95"
                              onClick={prevImage}
                            >
                              <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-gray-700" />
                            </button>
                            <button
                              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all hover:scale-110 active:scale-95"
                              onClick={nextImage}
                            >
                              <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-700" />
                            </button>
                          </>
                        )}

                        {/* Image Counter */}
                        <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-black/60 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                          {selectedImageIndex + 1} / {images.length}
                        </div>
                      </div>

                      {/* Thumbnails */}
                      {images.length > 1 && (
                        <div className="flex gap-2 sm:gap-3 justify-center overflow-x-auto pb-2">
                          {images.map((image, idx) => (
                            <button
                              key={idx}
                              className={`relative flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-md sm:rounded-lg overflow-hidden border-2 transition-all hover:scale-105 active:scale-95 ${
                                idx === selectedImageIndex
                                  ? (isWarm ? 'border-orange-500' : 'border-blue-500') + ' shadow-lg'
                                  : 'border-gray-300 hover:border-gray-400'
                              }`}
                              onClick={() => setSelectedImageIndex(idx)}
                            >
                              <img
                                src={getSmallImage(image)}
                                srcSet={`${getSmallImage(image)} 1x, ${generateSrcSet(image).split(',')[0].trim()} 2x`}
                                alt={`${product.fullName} thumbnail ${idx + 1}`}
                                className="w-full h-full object-cover"
                                loading="lazy"
                                onError={(e) => {
                                  e.currentTarget.src = '/placeholder-product.png';
                                }}
                              />
                              {idx === selectedImageIndex && (
                                <div className={`absolute inset-0 ${isWarm ? 'bg-orange-500/20' : 'bg-blue-500/20'}`}></div>
                              )}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Product Details */}
                <div className="p-4 sm:p-6 md:p-8">
                  {/* Specifications */}
                  <section className="mb-6 sm:mb-8">
                    <div className="flex items-center gap-2 mb-3 sm:mb-4">
                      <Shield className={`w-5 h-5 sm:w-6 sm:h-6 ${isWarm ? 'text-orange-600' : 'text-blue-600'}`} />
                      <h3 className="text-xl sm:text-2xl font-bold text-aeronix-navy">{t('products.modal.specifications')}</h3>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                      <div className="grid gap-2 sm:gap-3">
                        {product.specifications.map((spec, idx) => (
                          <div
                            key={idx}
                            className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-2 py-2 sm:py-3 border-b border-gray-200 last:border-0"
                          >
                            <span className="text-gray-600 font-medium text-sm sm:text-base">{t(spec.labelKey)}</span>
                            <span className="font-bold text-aeronix-navy text-sm sm:text-base">{t(spec.valueKey)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* Equipment */}
                  <section className="mb-6 sm:mb-8">
                    <div className="flex items-center gap-2 mb-3 sm:mb-4">
                      <Package className={`w-5 h-5 sm:w-6 sm:h-6 ${isWarm ? 'text-orange-600' : 'text-blue-600'}`} />
                      <h3 className="text-xl sm:text-2xl font-bold text-aeronix-navy">{t('products.modal.equipment')}</h3>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                      <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                        {product.equipment.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 sm:gap-3"
                          >
                            <CheckCircle className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 ${
                              isWarm ? 'text-orange-500' : 'text-blue-500'
                            }`} />
                            <div>
                              <p className="font-semibold text-aeronix-navy text-sm sm:text-base">{t(item.itemKey)}</p>
                              <p className="text-xs sm:text-sm text-gray-600">{t(item.quantityKey)}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* Features */}
                  <section className="mb-4 sm:mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-aeronix-navy mb-3 sm:mb-4">{t('products.modal.advantages')}</h3>
                    <div className="grid sm:grid-cols-2 gap-2 sm:gap-3">
                      {product.featureKeys.map((featureKey, idx) => (
                        <div
                          key={idx}
                          className={`flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl ${
                            isWarm ? 'bg-orange-50' : 'bg-blue-50'
                          }`}
                        >
                          <CheckCircle className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 ${
                            isWarm ? 'text-orange-600' : 'text-blue-600'
                          }`} />
                          <span className="text-gray-700 text-sm sm:text-base">{t(featureKey)}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="p-4 sm:p-6 md:p-8 border-t border-gray-200 bg-gray-50 rounded-b-2xl sm:rounded-b-3xl">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href={`https://wa.me/77780808404?text=${encodeURIComponent(
                      getProductPriceMessage(product.fullName)
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 ${
                      isWarm 
                        ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700' 
                        : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700'
                    } text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg active:scale-95`}
                  >
                    <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>{t('products.modal.requestPrice')}</span>
                  </a>
                  <button
                    className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:bg-gray-100 transition-all active:scale-95"
                    onClick={onClose}
                  >
                    {t('products.modal.close')}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
