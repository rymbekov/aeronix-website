import { Wind } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { Product } from '../data/products';
import { getMediumImage } from '../utils/imageUtils';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
  index: number;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const { t } = useTranslation();

  const cardImage = product.images && product.images.length > 0 ? product.images[0] : product.image;

  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300"
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        {cardImage ? (
          <img 
            src={getMediumImage(cardImage)}
            alt={product.fullName}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const fallback = e.currentTarget.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'flex';
            }}
          />
        ) : null}
        
        {/* Fallback Icon */}
        <div 
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200"
          style={{ display: cardImage ? 'none' : 'flex' }}
        >
          <Wind className="w-16 h-16 text-gray-400" strokeWidth={1.5} />
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className={`inline-block px-3 py-1.5 rounded-lg text-xs font-semibold text-white ${
            product.category === 'warm' ? 'bg-orange-500' : 'bg-blue-600'
          }`}>
            {product.category === 'warm' ? t('products.filters.warm') : t('products.filters.cold')}
          </span>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
          <button className="w-full bg-white text-gray-900 py-3 px-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors text-sm">
            {t('products.viewDetails')}
          </button>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-1.5 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-sm text-gray-500 line-clamp-2 mb-3">
          {t(product.descriptionKey).split('.')[0]}
        </p>

        {/* Specs */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-gray-600">
          {product.specifications.slice(0, 3).map((spec, idx) => (
            <span key={idx} className="flex items-center gap-1">
              {idx > 0 && <span className="text-gray-300">|</span>}
              <span>{t(spec.valueKey)}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
