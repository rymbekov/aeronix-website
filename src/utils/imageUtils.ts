/**
 * Утилиты для работы с responsive изображениями
 */

/**
 * Генерирует srcSet для responsive изображений
 * @param basePath - базовый путь к изображению (например, '/products/tk/tk-1.webp')
 * @returns srcSet строка для img элемента
 */
export function generateSrcSet(basePath: string): string {
  if (!basePath) return '';
  
  const base = basePath.replace('.webp', '').replace('.jpg', '');
  
  return `${base}-small.webp 400w, ${base}-medium.webp 800w, ${base}-large.webp 1600w`;
}

/**
 * Генерирует sizes атрибут для responsive изображений
 * @param type - тип изображения ('card' | 'modal' | 'thumbnail' | 'gallery')
 * @returns sizes строка для img элемента
 */
export function generateSizes(type: 'card' | 'modal' | 'thumbnail' | 'gallery'): string {
  switch (type) {
    case 'card':
      // Для карточек продуктов
      return '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';
    
    case 'modal':
      // Для модального окна
      return '(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw';
    
    case 'thumbnail':
      // Для миниатюр
      return '(max-width: 640px) 80px, (max-width: 1024px) 100px, 120px';
    
    case 'gallery':
      // Для галереи
      return '(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw';
    
    default:
      return '100vw';
  }
}

/**
 * Получает путь к small версии изображения для предзагрузки
 * @param basePath - базовый путь к изображению
 * @returns путь к small версии
 */
export function getSmallImage(basePath: string): string {
  if (!basePath) return '';
  return basePath.replace('.webp', '-small.webp').replace('.jpg', '-small.webp');
}

/**
 * Получает путь к medium версии изображения
 * @param basePath - базовый путь к изображению
 * @returns путь к medium версии
 */
export function getMediumImage(basePath: string): string {
  if (!basePath) return '';
  return basePath.replace('.webp', '-medium.webp').replace('.jpg', '-medium.webp');
}

/**
 * Получает путь к large версии изображения
 * @param basePath - базовый путь к изображению
 * @returns путь к large версии
 */
export function getLargeImage(basePath: string): string {
  if (!basePath) return '';
  return basePath.replace('.webp', '-large.webp').replace('.jpg', '-large.webp');
}
