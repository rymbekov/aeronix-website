import { useTranslation } from 'react-i18next';
import { useState, useMemo } from 'react';
import { Package, Home, Snowflake } from 'lucide-react';
import SEO from '../components/SEO';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import { products, getProductsByCategory, type Product } from '../data/products';

type FilterType = 'all' | 'warm' | 'cold';

export default function ProductsPage() {
  const { t } = useTranslation();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredProducts = useMemo(() => {
    if (activeFilter === 'all') return products;
    return getProductsByCategory(activeFilter);
  }, [activeFilter]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  return (
    <>
      <SEO 
        title={t('seo.products.title')}
        description={t('seo.products.description')}
      />

      <div className="py-12 bg-gradient-to-b from-gray-50 to-white min-h-screen">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 text-aeronix-navy">
              {t('nav.products')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              {t('products.pageSubtitle')}
            </p>
            <div className="mt-6 h-1 w-24 bg-gradient-to-r from-aeronix-blue to-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-col items-center mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Package className="w-5 h-5 text-aeronix-blue" />
              <h2 className="text-lg font-semibold text-gray-700">{t('products.selectCategory')}</h2>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {/* Все модели */}
              <button
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === 'all'
                    ? 'bg-gradient-to-r from-aeronix-blue to-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-aeronix-blue'
                }`}
                onClick={() => setActiveFilter('all')}
              >
                <Package className="w-5 h-5" />
                <span>{t('products.filters.all')}</span>
              </button>

              {/* Для жилых */}
              <button
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === 'warm'
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-orange-500'
                }`}
                onClick={() => setActiveFilter('warm')}
              >
                <Home className="w-5 h-5" />
                <span>{t('products.filters.warm')}</span>
              </button>

              {/* Для холодных */}
              <button
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === 'cold'
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-500'
                }`}
                onClick={() => setActiveFilter('cold')}
              >
                <Snowflake className="w-5 h-5" />
                <span>{t('products.filters.cold')}</span>
              </button>
            </div>
          </div>

          {/* Products - Grid on large screens, Scroll on mobile */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => handleProductClick(product)}
                index={index}
              />
            ))}
          </div>
          
          {/* Mobile/Tablet Horizontal Scroll */}
          <div className="lg:hidden overflow-x-auto pb-6 -mx-4 px-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            <div className="flex gap-4 min-w-max">
              {filteredProducts.map((product, index) => (
                <div key={product.id} className="w-[280px] flex-shrink-0">
                  <ProductCard
                    product={product}
                    onClick={() => handleProductClick(product)}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">{t('products.noProducts')}</p>
            </div>
          )}
        </div>
      </div>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
