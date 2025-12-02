export interface ProductSpec {
  labelKey: string;  // Translation key for label
  valueKey: string;  // Translation key for value
}

export interface ProductEquipment {
  itemKey: string;      // Translation key for item name
  quantityKey: string;  // Translation key for quantity
}

export interface Product {
  id: string;
  category: 'warm' | 'cold';
  name: string;
  fullName: string;
  descriptionKey: string;  // Translation key for description
  price?: string;
  image?: string;
  images?: string[];
  specifications: ProductSpec[];
  equipment: ProductEquipment[];
  featureKeys: string[];  // Translation keys for features
}

export const products: Product[] = [
  {
    id: 'dk',
    category: 'warm',
    name: 'DK',
    fullName: 'AERONIX-DK',
    descriptionKey: 'products.dk.description',
    image: '/products/dk/DSC00642.webp',
    images: [
      '/products/dk/DSC00642.webp',
      '/products/dk/DSC00643.webp',
      '/products/dk/DSC00644.webp',
      '/products/dk/DSC00645.webp',
      '/products/dk/DSC00646.webp',
      '/products/dk/DSC00647.webp',
      '/products/dk/DSC00648.webp',
      '/products/dk/DSC00649.webp',
      '/products/dk/DSC00650.webp',
      '/products/dk/DSC00651.webp',
      '/products/dk/DSC00652.webp',
    ],
    specifications: [
      { labelKey: 'products.specs.material', valueKey: 'products.values.absPlastic' },
      { labelKey: 'products.specs.color', valueKey: 'products.values.white' },
      { labelKey: 'products.specs.temperature', valueKey: 'products.values.temp4060' },
      { labelKey: 'products.specs.warranty', valueKey: 'products.values.warranty12' },
      { labelKey: 'products.specs.performance', valueKey: 'products.values.perf60' },
      { labelKey: 'products.specs.diameter', valueKey: 'products.values.diameter132' },
      { labelKey: 'products.specs.noise', valueKey: 'products.values.noise36' },
    ],
    equipment: [
      { itemKey: 'products.equipmentItems.valveBody', quantityKey: 'products.equipmentItems.quantity1pc' },
      { itemKey: 'products.equipmentItems.filterG3', quantityKey: 'products.equipmentItems.quantity1pc' },
      { itemKey: 'products.equipmentItems.flowRegulator', quantityKey: 'products.equipmentItems.quantity1pc' },
      { itemKey: 'products.equipmentItems.mountingSleeve', quantityKey: 'products.equipmentItems.quantity1pc' },
      { itemKey: 'products.equipmentItems.installationManual', quantityKey: 'products.equipmentItems.quantity1pc' },
    ],
    featureKeys: [
      'products.features.quickInstall',
      'products.features.noPower',
      'products.features.dustFilter',
      'products.features.adjustableFlow',
      'products.features.silent',
    ],
  },
  {
    id: 'tk',
    category: 'warm',
    name: 'TK',
    fullName: 'AERONIX-TK',
    descriptionKey: 'products.tk.description',
    image: '/products/tk/DSC00688.webp',
    images: [
      '/products/tk/DSC00688.webp',
      '/products/tk/DSC00689.webp',
      '/products/tk/DSC00686.webp',
      '/products/tk/DSC00690.webp',
      '/products/tk/DSC00687.webp',
      '/products/tk/DSC00622.webp',
      '/products/tk/DSC00623.webp',
      '/products/tk/DSC00624.webp',
      '/products/tk/DSC00625.webp',
      '/products/tk/DSC00626.webp',
      '/products/tk/DSC00627.webp',
      '/products/tk/DSC00628.webp',
      '/products/tk/DSC00629.webp',
      '/products/tk/DSC00630.webp',
      '/products/tk/DSC00631.webp',
      '/products/tk/DSC00633.webp',
      '/products/tk/DSC00634.webp',
      '/products/tk/DSC00635.webp',
      '/products/tk/DSC00636.webp',
      '/products/tk/DSC00637.webp',
      '/products/tk/DSC00638.webp',
      '/products/tk/DSC00639.webp',
      '/products/tk/DSC00640.webp',
      '/products/tk/DSC00641.webp',
    ],
    specifications: [
      { labelKey: 'products.specs.material', valueKey: 'products.values.absPlastic' },
      { labelKey: 'products.specs.color', valueKey: 'products.values.white' },
      { labelKey: 'products.specs.temperature', valueKey: 'products.values.temp4060' },
      { labelKey: 'products.specs.warranty', valueKey: 'products.values.warranty12' },
      { labelKey: 'products.specs.performance', valueKey: 'products.values.perf50' },
      { labelKey: 'products.specs.diameter', valueKey: 'products.values.diameter125' },
      { labelKey: 'products.specs.noise', valueKey: 'products.values.noise34' },
    ],
    equipment: [
      { itemKey: 'products.equipmentItems.valveBody', quantityKey: 'products.equipmentItems.quantity1pc' },
      { itemKey: 'products.equipmentItems.filterG3', quantityKey: 'products.equipmentItems.quantity1pc' },
      { itemKey: 'products.equipmentItems.flowRegulator', quantityKey: 'products.equipmentItems.quantity1pc' },
      { itemKey: 'products.equipmentItems.mountingSleeve', quantityKey: 'products.equipmentItems.quantity1pc' },
      { itemKey: 'products.equipmentItems.installationManual', quantityKey: 'products.equipmentItems.quantity1pc' },
    ],
    featureKeys: [
      'products.features.compactDesign',
      'products.features.energyIndependent',
      'products.features.highFiltration',
      'products.features.easyAdjustment',
      'products.features.lowNoise',
    ],
  },
  {
    id: 'bk100',
    category: 'cold',
    name: 'BK-100',
    fullName: 'AERONIX-BK-100',
    descriptionKey: 'products.bk100.description',
    image: '/products/bk100/DSC00676.webp',
    images: [
      '/products/bk100/DSC00676.webp',
      '/products/bk100/DSC00665.webp',
      '/products/bk100/DSC00666.webp',
      '/products/bk100/DSC00667.webp',
      '/products/bk100/DSC00668.webp',
      '/products/bk100/DSC00669.webp',
      '/products/bk100/DSC00670.webp',
      '/products/bk100/DSC00671.webp',
      '/products/bk100/DSC00672.webp',
      '/products/bk100/DSC00673.webp',
      '/products/bk100/DSC00674.webp',
      '/products/bk100/DSC00675.webp',
    ],
    specifications: [
      { labelKey: 'products.specs.material', valueKey: 'products.values.absPlastic' },
      { labelKey: 'products.specs.color', valueKey: 'products.values.white' },
      { labelKey: 'products.specs.temperature', valueKey: 'products.values.temp4060' },
      { labelKey: 'products.specs.warranty', valueKey: 'products.values.warranty12' },
      { labelKey: 'products.specs.performance', valueKey: 'products.values.perf100' },
      { labelKey: 'products.specs.diameter', valueKey: 'products.values.diameter160' },
      { labelKey: 'products.specs.noise', valueKey: 'products.values.noise38' },
      { labelKey: 'products.specs.frostResistance', valueKey: 'products.values.frost40' },
    ],
    equipment: [
      { itemKey: 'products.equipmentItems.valveBody', quantityKey: 'products.equipmentItems.quantity1pc' },
      { itemKey: 'products.equipmentItems.filterG4', quantityKey: 'products.equipmentItems.quantity1pc' },
      { itemKey: 'products.equipmentItems.flowRegulator', quantityKey: 'products.equipmentItems.quantity1pc' },
      { itemKey: 'products.equipmentItems.insulatedSleeve', quantityKey: 'products.equipmentItems.quantity1pc' },
      { itemKey: 'products.equipmentItems.protectiveGrill', quantityKey: 'products.equipmentItems.quantity1pc' },
      { itemKey: 'products.equipmentItems.installationManual', quantityKey: 'products.equipmentItems.quantity1pc' },
    ],
    featureKeys: [
      'products.features.frostResistant',
      'products.features.highPerformance',
      'products.features.condensateProtection',
      'products.features.reinforcedDesign',
    ],
  },
  {
    id: 'bk40',
    category: 'cold',
    name: 'BK-40',
    fullName: 'AERONIX-BK-40',
    descriptionKey: 'products.bk40.description',
    image: '/products/bk40/DSC00653.webp',
    images: [
      '/products/bk40/DSC00653.webp',
      '/products/bk40/DSC00654.webp',
      '/products/bk40/DSC00655.webp',
      '/products/bk40/DSC00656.webp',
      '/products/bk40/DSC00657.webp',
      '/products/bk40/DSC00658.webp',
      '/products/bk40/DSC00659.webp',
      '/products/bk40/DSC00660.webp',
      '/products/bk40/DSC00661.webp',
      '/products/bk40/DSC00662.webp',
      '/products/bk40/DSC00663.webp',
      '/products/bk40/DSC00664.webp',
    ],
    specifications: [
      { labelKey: 'products.specs.material', valueKey: 'products.values.absPlastic' },
      { labelKey: 'products.specs.color', valueKey: 'products.values.white' },
      { labelKey: 'products.specs.temperature', valueKey: 'products.values.temp4060' },
      { labelKey: 'products.specs.warranty', valueKey: 'products.values.warranty12' },
      { labelKey: 'products.specs.performance', valueKey: 'products.values.perf40' },
      { labelKey: 'products.specs.diameter', valueKey: 'products.values.diameter125' },
      { labelKey: 'products.specs.noise', valueKey: 'products.values.noise35' },
      { labelKey: 'products.specs.frostResistance', valueKey: 'products.values.frost40' },
    ],
    equipment: [
      { itemKey: 'products.equipmentItems.valveBody', quantityKey: 'products.equipmentItems.quantity1pc' },
      { itemKey: 'products.equipmentItems.filterG3', quantityKey: 'products.equipmentItems.quantity1pc' },
      { itemKey: 'products.equipmentItems.flowRegulator', quantityKey: 'products.equipmentItems.quantity1pc' },
      { itemKey: 'products.equipmentItems.insulatedSleeve', quantityKey: 'products.equipmentItems.quantity1pc' },
      { itemKey: 'products.equipmentItems.protectiveGrill', quantityKey: 'products.equipmentItems.quantity1pc' },
      { itemKey: 'products.equipmentItems.installationManual', quantityKey: 'products.equipmentItems.quantity1pc' },
    ],
    featureKeys: [
      'products.features.frostResistantDesign',
      'products.features.optimalPerformance',
      'products.features.basicFiltration',
      'products.features.compactSize',
      'products.features.easyInstallation',
    ],
  },
];

// Helper function to get product by ID
export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

// Helper function to get products by category
export function getProductsByCategory(category: 'warm' | 'cold'): Product[] {
  return products.filter(p => p.category === category);
}
