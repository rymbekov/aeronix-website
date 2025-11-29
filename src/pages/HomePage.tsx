import { Wind, Shield, Zap, Phone, Factory, Globe, Award, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
// import Gallery from '../components/Gallery';

export default function HomePage() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen">
      <SEO page="home" />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-aeronix-blue via-blue-700 to-aeronix-navy text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo with elegant presentation */}
            <motion.div 
              className="flex justify-center mb-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.7, type: "spring", stiffness: 100 }}
            >
              <div className="relative">
                {/* Soft glow effect */}
                <div className="absolute inset-0 bg-white/20 blur-3xl scale-150"></div>
                
                {/* Logo image - clean, white text */}
                <img 
                  src="/logo1.webp" 
                  alt="AERONIX Logo" 
                  className="relative h-28 md:h-36 w-auto drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] brightness-0 invert"
                />
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {t('hero.title')}
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-4 text-blue-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {t('hero.subtitle')}
            </motion.p>
            <motion.p 
              className="text-lg md:text-xl mb-10 text-blue-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {t('hero.tagline')}
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <a href="/cooperation" className="bg-white text-aeronix-blue px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition transform hover:scale-105 shadow-xl">
                {t('hero.becomeDealer')}
              </a>
              <a href="/contacts" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition transform hover:scale-105">
                {t('hero.requestPrice')}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Что делает система AERONIX */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-aeronix-navy mb-4">
              {t('whatDoes.title')} <span className="text-aeronix-blue">{t('whatDoes.titleBrand')}</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Свежий воздух 24/7 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-aeronix-blue/10 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-aeronix-blue to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Wind className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-aeronix-navy mb-3">{t('whatDoes.features.freshAir.title')}</h3>
              </div>
            </motion.div>

            {/* Устанавливается за 15 минут */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative bg-gradient-to-br from-purple-50 to-white rounded-3xl p-8 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-aeronix-navy mb-3">{t('whatDoes.features.installation.title')}</h3>
              </div>
            </motion.div>

            {/* Фильтрует пыль и пыльцу */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group relative bg-gradient-to-br from-green-50 to-white rounded-3xl p-8 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-400/10 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-aeronix-navy mb-3">{t('whatDoes.features.filtration.title')}</h3>
              </div>
            </motion.div>

            {/* Работает бесшумно */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group relative bg-gradient-to-br from-amber-50 to-white rounded-3xl p-8 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-400/10 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-aeronix-navy mb-3">{t('whatDoes.features.silent.title')}</h3>
              </div>
            </motion.div>

            {/* Не требует электричества */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="group relative bg-gradient-to-br from-teal-50 to-white rounded-3xl p-8 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-teal-400/10 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-teal-500 to-teal-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-aeronix-navy mb-3">{t('whatDoes.features.noPower.title')}</h3>
              </div>
            </motion.div>

            {/* Регулируемый поток воздуха */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="group relative bg-gradient-to-br from-indigo-50 to-white rounded-3xl p-8 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-400/10 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-aeronix-navy mb-3">{t('whatDoes.features.adjustable.title')}</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Три серии клапанов */}
      <section className="py-20 bg-gradient-to-br from-aeronix-blue/5 via-blue-50 to-white relative overflow-hidden">
        {/* Декоративные элементы */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-aeronix-blue/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-400/20 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-aeronix-navy mb-6">
              {t('series.title')}<span className="text-aeronix-blue">{t('series.tk')}</span> | <span className="text-gray-700">{t('series.bk')}</span> | <span className="text-aeronix-blue">{t('series.dk')}</span>
            </h2>
            <p className="text-2xl text-gray-700 mb-4">{t('series.subtitle')}</p>
            
            <div className="max-w-4xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              <motion.div 
                className="bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <p className="text-gray-600 font-semibold mb-2">{t('series.specs.material.label')}</p>
                <p className="text-lg text-aeronix-navy font-bold">{t('series.specs.material.value')}</p>
              </motion.div>
              <motion.div 
                className="bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-gray-600 font-semibold mb-2">{t('series.specs.color.label')}</p>
                <p className="text-lg text-aeronix-navy font-bold">{t('series.specs.color.value')}</p>
              </motion.div>
              <motion.div 
                className="bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-gray-600 font-semibold mb-2">{t('series.specs.temperature.label')}</p>
                <p className="text-lg text-aeronix-navy font-bold">{t('series.specs.temperature.value')}</p>
              </motion.div>
              <motion.div 
                className="bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-gray-600 font-semibold mb-2">{t('series.specs.warranty.label')}</p>
                <p className="text-lg text-aeronix-navy font-bold">{t('series.specs.warranty.value')}</p>
              </motion.div>
            </div>
          </motion.div>

          <div className="text-center mt-12">
            <a href="/products" className="inline-block bg-aeronix-blue text-white px-12 py-4 rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105 shadow-lg">
              {t('series.viewAll')}
            </a>
          </div>
        </div>
      </section>

      {/* ABS против PPR */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white relative overflow-hidden">
        {/* Декоративные элементы */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-br from-aeronix-blue/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gradient-to-tl from-slate-400/30 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-aeronix-navy mb-4">
              <span className="text-aeronix-blue">{t('comparison.titleBrand')}</span> {t('comparison.title')} <span className="text-gray-600">{t('comparison.titleCompetitor')}</span>: {t('comparison.subtitle')}
            </h2>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-aeronix-blue to-blue-600 text-white">
                  <th className="text-left py-5 px-6 text-lg font-bold">{t('comparison.criteria.strength')}</th>
                  <th className="text-left py-5 px-6 text-lg font-bold">{t('comparison.titleBrand')} (AERONIX)</th>
                  <th className="text-left py-5 px-6 text-lg font-bold">{t('comparison.titleCompetitor')} (другие)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { criterion: t('comparison.criteria.strength'), abs: t('comparison.abs.strength'), ppr: t('comparison.ppr.strength') },
                  { criterion: t('comparison.criteria.frost'), abs: t('comparison.abs.frost'), ppr: t('comparison.ppr.frost') },
                  { criterion: t('comparison.criteria.appearance'), abs: t('comparison.abs.appearance'), ppr: t('comparison.ppr.appearance') },
                  { criterion: t('comparison.criteria.lifespan'), abs: t('comparison.abs.lifespan'), ppr: t('comparison.ppr.lifespan') },
                  { criterion: t('comparison.criteria.purpose'), abs: t('comparison.abs.purpose'), ppr: t('comparison.ppr.purpose') }
                ].map((row, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="border-b border-gray-200 hover:bg-blue-50/50 transition-all duration-300"
                  >
                    <td className="py-5 px-6 font-semibold text-aeronix-navy">{row.criterion}</td>
                    <td className="py-5 px-6 text-aeronix-blue font-semibold">{row.abs}</td>
                    <td className="py-5 px-6 text-gray-600">{row.ppr}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <motion.div 
            className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-aeronix-blue/10 via-blue-50 to-green-50 p-8 rounded-2xl border-2 border-aeronix-blue/20 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-aeronix-blue font-bold mb-2">
              {t('comparison.conclusion.title')}
            </p>
            <p className="text-gray-700">
              {t('comparison.conclusion.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Выгода в цифрах */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-aeronix-navy mb-4">
              <span className="text-aeronix-blue">{t('benefits.titleHighlight')}</span>, {t('benefits.title')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-aeronix-blue mb-6">{t('benefits.economics.title')}</h3>
              <div className="space-y-4">
                {[
                  { title: t('benefits.economics.items.cost.label'), desc: t('benefits.economics.items.cost.value') },
                  { title: t('benefits.economics.items.perSqm.label'), desc: t('benefits.economics.items.perSqm.value') },
                  { title: t('benefits.economics.items.complex.label'), desc: t('benefits.economics.items.complex.value') },
                  { title: t('benefits.economics.items.percentage.label'), desc: t('benefits.economics.items.percentage.value') }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-x-1"
                  >
                    <p className="font-bold text-aeronix-navy mb-2">{item.title}</p>
                    <p className="text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-green-600 mb-6">{t('benefits.developer.title')}</h3>
              <div className="space-y-4">
                {[
                  { title: t('benefits.developer.items.durability.label'), desc: t('benefits.developer.items.durability.value') },
                  { title: t('benefits.developer.items.complaints.label'), desc: t('benefits.developer.items.complaints.value') },
                  { title: t('benefits.developer.items.marketing.label'), desc: t('benefits.developer.items.marketing.value') },
                  { title: t('benefits.developer.items.reputation.label'), desc: t('benefits.developer.items.reputation.value') }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:translate-x-1"
                  >
                    <p className="font-bold text-aeronix-navy mb-2">{item.title}</p>
                    <p className="text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Производство */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-aeronix-navy mb-4">{t('production.title')}</h2>
            <p className="text-xl text-gray-600">{t('production.subtitle')}</p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Factory, title: t('production.stages.facility.title'), desc: t('production.stages.facility.desc') },
              { icon: Shield, title: t('production.stages.quality.title'), desc: t('production.stages.quality.desc') },
              { icon: Award, title: t('production.stages.certification.title'), desc: t('production.stages.certification.desc') },
              { icon: TrendingUp, title: t('production.stages.packaging.title'), desc: t('production.stages.packaging.desc') }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-aeronix-blue to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-aeronix-navy">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Дилерская сеть */}
      <section className="py-20 bg-gradient-to-br from-aeronix-blue to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">{t('dealers.title')}</h2>
            <p className="text-xl mb-8 text-blue-100">{t('dealers.subtitle')}</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Shield, title: t('dealers.benefits.protection.title'), desc: t('dealers.benefits.protection.desc') },
              { icon: Users, title: t('dealers.benefits.leads.title'), desc: t('dealers.benefits.leads.desc') },
              { icon: TrendingUp, title: t('dealers.benefits.income.title'), desc: t('dealers.benefits.income.desc') },
              { icon: Award, title: t('dealers.benefits.support.title'), desc: t('dealers.benefits.support.desc') }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="bg-white w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-aeronix-blue" />
                </div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-blue-100 text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="/cooperation" className="inline-block bg-white text-aeronix-blue px-12 py-4 rounded-lg font-semibold hover:bg-blue-50 transition transform hover:scale-105 shadow-xl">
              {t('dealers.cta')}
            </a>
          </div>
        </div>
      </section>

      {/* География */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-aeronix-navy mb-4">{t('geography.title')}</h2>
            <p className="text-xl text-gray-600">{t('geography.subtitle')}</p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { country: t('geography.countries.kazakhstan.name'), status: t('geography.countries.kazakhstan.status'), color: 'from-blue-500 to-blue-600' },
              { country: t('geography.countries.kyrgyzstan.name'), status: t('geography.countries.kyrgyzstan.status'), color: 'from-green-500 to-green-600' },
              { country: t('geography.countries.uzbekistan.name'), status: t('geography.countries.uzbekistan.status'), color: 'from-green-500 to-green-600' },
              { country: t('geography.countries.russia.name'), status: t('geography.countries.russia.status'), color: 'from-gray-500 to-gray-600' }
            ].map((region, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-xl text-center border-2 border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br ${region.color} flex items-center justify-center`}>
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-lg text-aeronix-navy mb-1">{region.country}</h3>
                <p className="text-gray-600 text-sm font-semibold">{region.status}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Галерея продукции */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-aeronix-navy mb-2">{t('gallery.title')}</h2>
            <p className="text-lg text-gray-600">{t('gallery.subtitle')}</p>
          </motion.div>
          <Gallery />
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-aeronix-navy to-aeronix-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">{t('cta.title')}</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/cooperation" className="bg-white text-aeronix-blue px-10 py-4 rounded-lg font-semibold hover:bg-blue-50 transition transform hover:scale-105 shadow-xl">
                {t('cta.becomeDealer')}
              </a>
              <a href="tel:+77780808404" className="border-2 border-white px-10 py-4 rounded-lg font-semibold hover:bg-white/10 transition transform hover:scale-105 flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                {t('cta.phone')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


