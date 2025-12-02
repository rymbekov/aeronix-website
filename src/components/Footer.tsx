import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-aeronix-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              {/* Logo with subtle styling */}
              <img 
                src="/logo2.webp" 
                alt="AERONIX" 
                className="h-9 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
            <p className="text-gray-300 text-sm mb-4">
              {t('footer.company')}
            </p>
            <div className="space-y-2 text-sm">
              <a
                href="tel:+77750808448"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                {t('footer.phone')}
              </a>
              <a
                href="mailto:aeronixastana@mail.ru"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                {t('footer.email')}
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <Link to="/" className="font-semibold mb-4 block hover:text-blue-200 transition-colors">
              {t('nav.home')}
            </Link>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.products')}
                </Link>
              </li>
              <li>
                <Link to="/engineering" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.engineering')}
                </Link>
              </li>
              <li>
                <Link to="/cooperation" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.cooperation')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-semibold mb-4">{t('nav.contacts')}</h3>
            <a 
              href="https://2gis.kz/astana/firm/70000001109767790?m=71.489568%2C51.079682%2F18.49"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-sm text-gray-300 hover:text-white transition-colors"
            >
              <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
              <p>{t('footer.address')}</p>
            </a>
          </div>

          {/* Social & Messengers */}
          <div>
            <h3 className="font-semibold mb-4">Мессенджеры</h3>
            <div className="flex gap-4">
              <a
                href="https://wa.me/77750808448"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/aeronixastana"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2024 AERONIX ASTANA. {t('footer.rights')}</p>
          <Link to="/privacy" className="hover:text-white transition-colors mt-4 md:mt-0">
            {t('footer.privacy')}
          </Link>
        </div>
      </div>
    </footer>
  );
}
