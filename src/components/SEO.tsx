import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  page?: 'home' | 'products' | 'engineering' | 'cooperation';
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
}

export default function SEO({ 
  page = 'home',
  title,
  description,
  keywords,
  image = '/og-image.jpg',
  type = 'website'
}: SEOProps) {
  const { t, i18n } = useTranslation();
  
  const seoTitle = title || t(`seo.${page}.title`);
  const seoDescription = description || t(`seo.${page}.description`);
  const seoKeywords = keywords || t(`seo.${page}.keywords`);
  const currentUrl = window.location.href;
  const siteName = 'AERONIX';
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <html lang={i18n.language} />
      <title>{seoTitle}</title>
      <meta name="title" content={seoTitle} />
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={i18n.language === 'ru' ? 'ru_RU' : 'kk_KZ'} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={seoTitle} />
      <meta property="twitter:description" content={seoDescription} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="author" content="AERONIX ASTANA" />
      <meta name="geo.region" content="KZ" />
      <meta name="geo.placename" content="Astana" />
      <meta name="geo.position" content="51.1605;71.4704" />
      <meta name="ICBM" content="51.1605, 71.4704" />
      
      {/* Alternate Languages */}
      <link rel="alternate" hrefLang="ru" href={currentUrl.replace(/\/(ru|kk)\//, '/ru/')} />
      <link rel="alternate" hrefLang="kk" href={currentUrl.replace(/\/(ru|kk)\//, '/kk/')} />
      <link rel="alternate" hrefLang="x-default" href={currentUrl.replace(/\/(ru|kk)\//, '/ru/')} />
      
      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "AERONIX ASTANA",
          "url": "https://aeronix.kz",
          "logo": "https://aeronix.kz/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+7-778-080-84-04",
            "contactType": "sales",
            "areaServed": ["KZ", "KG", "UZ", "RU"],
            "availableLanguage": ["Russian", "Kazakh"]
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "ЖК Бағыстан, ул. Е-117, дом 41, НП-4",
            "addressLocality": "Астана",
            "addressRegion": "Есиль",
            "postalCode": "010000",
            "addressCountry": "KZ"
          },
          "sameAs": [
            "https://instagram.com/aeronix.kz",
            "https://wa.me/77780808404"
          ]
        })}
      </script>
      
      {/* Structured Data - Product */}
      {page === 'products' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "AERONIX Приточные клапаны",
            "description": "Приточные клапаны из ABS-пластика для естественной вентиляции помещений",
            "brand": {
              "@type": "Brand",
              "name": "AERONIX"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "AERONIX ASTANA"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "KZT",
              "lowPrice": "8000",
              "highPrice": "9000",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      )}
      
      {/* Structured Data - Local Business */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "AERONIX ASTANA",
          "image": "https://aeronix.kz/logo.png",
          "@id": "https://aeronix.kz",
          "url": "https://aeronix.kz",
          "telephone": "+7-778-080-84-04",
          "priceRange": "₸₸",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "ЖК Бағыстан, ул. Е-117, дом 41, НП-4",
            "addressLocality": "Астана",
            "postalCode": "010000",
            "addressCountry": "KZ"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 51.1605,
            "longitude": 71.4704
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
          }
        })}
      </script>
    </Helmet>
  );
}
