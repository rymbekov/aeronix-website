import { useEffect } from 'react';

interface SEOProps {
  page?: 'home' | 'products' | 'engineering' | 'cooperation' | 'contacts';
  title?: string;
  description?: string;
}

export default function SEO({ title, description }: SEOProps) {
  useEffect(() => {
    if (title) {
      document.title = `${title} | AERONIX`;
    }
    if (description) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }
    }
  }, [title, description]);

  return null;
}
