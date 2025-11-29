import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Phone, Mail } from 'lucide-react';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Language switcher - temporarily disabled
  const _changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  void _changeLanguage; // Suppress unused warning

  const navigation = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.products'), path: '/products' },
    { name: t('nav.engineering'), path: '/engineering' },
    { name: t('nav.cooperation'), path: '/cooperation' },
    { name: t('nav.contacts'), path: '/contacts' },
  ];

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="border-b border-gray-100 py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+77780808404" className="flex items-center gap-2 text-gray-600 hover:text-aeronix-blue transition-colors">
                <Phone className="w-4 h-4" />
                <span>+7 778 080 84 04</span>
              </a>
              <a href="mailto:aeronixastana@mail.ru" className="flex items-center gap-2 text-gray-600 hover:text-aeronix-blue transition-colors">
                <Mail className="w-4 h-4" />
                <span>aeronixastana@mail.ru</span>
              </a>
            </div>
            {/* Language switcher - temporarily disabled
            <div className="flex items-center gap-2">
              <button
                onClick={() => changeLanguage('ru')}
                className={`px-3 py-1 rounded ${
                  i18n.language === 'ru'
                    ? 'bg-aeronix-blue text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                RU
              </button>
              <button
                onClick={() => changeLanguage('kk')}
                className={`px-3 py-1 rounded ${
                  i18n.language === 'kk'
                    ? 'bg-aeronix-blue text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                KK
              </button>
            </div>
            */}
          </div>
        </div>

        {/* Main navigation */}
        <div className="py-3">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center group">
              {/* Logo with hover effect */}
              <div className="relative">
                {/* Subtle glow on hover */}
                <div className="absolute -inset-2 bg-gradient-to-r from-aeronix-blue/20 to-blue-600/20 rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
                
                {/* Logo image */}
                <img 
                  src="/logo2.webp" 
                  alt="AERONIX" 
                  className="h-9 w-auto relative z-10 transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`transition-colors font-medium relative ${
                    location.pathname === item.path
                      ? 'text-aeronix-blue after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:bg-aeronix-blue'
                      : 'text-gray-700 hover:text-aeronix-blue'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden pt-4 pb-2">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block py-3 transition-colors ${
                    location.pathname === item.path
                      ? 'text-aeronix-blue font-semibold'
                      : 'text-gray-700 hover:text-aeronix-blue'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
