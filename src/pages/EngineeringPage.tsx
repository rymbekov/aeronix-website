import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Phone, Mail, Factory, Settings, Wind, ThermometerSnowflake, Wrench, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function EngineeringPage() {
  const { t } = useTranslation();

  const services = [
    { icon: Wind, key: 'ventilation' },
    { icon: Factory, key: 'restaurant' },
    { icon: Settings, key: 'commercial' },
    { icon: ThermometerSnowflake, key: 'conditioning' },
    { icon: Wind, key: 'smoke' },
    { icon: Wrench, key: 'service' },
  ];

  const production = [
    { key: 'ducts' },
    { key: 'shaped' },
    { key: 'processing' },
    { key: 'materials' },
  ];

  const guarantees = [
    { key: 'standards' },
    { key: 'warranty' },
    { key: 'supervision' },
  ];

  const processSteps = [
    { number: '01', key: 'analysis' },
    { number: '02', key: 'proposal' },
    { number: '03', key: 'production' },
    { number: '04', key: 'installation' },
    { number: '05', key: 'delivery' },
  ];

  const team = [
    { key: 'designers' },
    { key: 'engineers' },
    { key: 'installers' },
  ];

  const benefits = [
    { key: 'optimization' },
    { key: 'delivery' },
    { key: 'flexibility' },
  ];

  return (
    <>
      <SEO 
        title={t('seo.engineering.title')}
        description={t('seo.engineering.description')}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-16 md:py-20 bg-gradient-to-br from-aeronix-navy via-blue-900 to-aeronix-blue text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl">
              <div className="text-sm md:text-base font-semibold mb-3 text-blue-200">
                {t('engineering.hero.badge')}
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                {t('engineering.hero.title')}
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-6 max-w-3xl">
                {t('engineering.hero.subtitle')}
              </p>
              <p className="text-base md:text-lg text-blue-200 mb-8">
                {t('engineering.hero.location')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contacts"
                  className="inline-flex items-center justify-center gap-2 bg-white text-aeronix-navy px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {t('engineering.hero.cta1')}
                </Link>
                <a
                  href={`https://wa.me/77780808404?text=${encodeURIComponent(t('whatsapp.engineering'))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  {t('engineering.hero.cta2')}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-aeronix-navy mb-10 text-center">
              {t('engineering.services.title')}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.key}
                    className="flex items-start gap-4 p-5 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-lg bg-aeronix-blue/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-aeronix-blue" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-aeronix-navy mb-1">
                        {t(`engineering.services.${service.key}.title`)}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {t(`engineering.services.${service.key}.description`)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Production Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-aeronix-navy mb-3 text-center">
                {t('engineering.production.title')}
              </h2>
              <p className="text-center text-gray-600 mb-10">
                {t('engineering.production.subtitle')}
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {production.map((item) => (
                  <div
                    key={item.key}
                    className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-aeronix-navy font-medium">
                      {t(`engineering.production.${item.key}`)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Guarantees Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-aeronix-navy mb-10 text-center">
              {t('engineering.guarantees.title')}
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {guarantees.map((item) => (
                <div
                  key={item.key}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center"
                >
                  <CheckCircle className="w-8 h-8 text-aeronix-blue mx-auto mb-3" />
                  <h3 className="font-bold text-aeronix-navy mb-2">
                    {t(`engineering.guarantees.${item.key}.title`)}
                  </h3>
                  <p className="text-sm text-gray-700">
                    {t(`engineering.guarantees.${item.key}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-aeronix-navy mb-3 text-center">
              {t('engineering.process.title')}
            </h2>
            <p className="text-center text-gray-600 mb-10">
              {t('engineering.process.subtitle')}
            </p>

            <div className="max-w-5xl mx-auto">
              <div className="space-y-6">
                {processSteps.map((step) => (
                  <div
                    key={step.key}
                    className="flex gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-aeronix-blue text-white flex items-center justify-center font-bold text-lg">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-aeronix-navy mb-2">
                        {t(`engineering.process.${step.key}.title`)}
                      </h3>
                      <p className="text-gray-600">
                        {t(`engineering.process.${step.key}.description`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-aeronix-navy mb-10 text-center">
              {t('engineering.team.title')}
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {team.map((member) => (
                <div
                  key={member.key}
                  className="bg-white border border-gray-200 p-6 rounded-lg text-center hover:border-aeronix-blue transition-colors"
                >
                  <h3 className="font-bold text-aeronix-navy text-lg">
                    {t(`engineering.team.${member.key}`)}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits for Developers */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-orange-50 to-orange-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-aeronix-navy mb-10 text-center">
              {t('engineering.benefits.title')}
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit.key}
                  className="flex items-start gap-4 bg-white p-5 rounded-lg shadow-sm"
                >
                  <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-aeronix-navy mb-1">
                      {t(`engineering.benefits.${benefit.key}.title`)}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {t(`engineering.benefits.${benefit.key}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-aeronix-navy to-aeronix-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('engineering.cta.title')}
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              {t('engineering.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+77780808404"
                className="inline-flex items-center justify-center gap-2 bg-white text-aeronix-navy px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5" />
                +7 778 080 84 04
              </a>
              <a
                href="mailto:aeronixastana@mail.ru"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                <Mail className="w-5 h-5" />
                aeronixastana@mail.ru
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
