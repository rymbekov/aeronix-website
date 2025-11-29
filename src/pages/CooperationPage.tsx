import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Shield, Users, MapPin, Headphones, FileText, Award, CheckCircle, AlertTriangle, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function CooperationPage() {
  const { t } = useTranslation();

  const statuses = [
    {
      key: 'statusA',
      icon: Users,
      volume: '500',
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100'
    },
    {
      key: 'statusB',
      icon: Award,
      volume: '1000',
      color: 'orange',
      gradient: 'from-orange-500 to-orange-600',
      bgGradient: 'from-orange-50 to-orange-100'
    },
    {
      key: 'statusC',
      icon: Shield,
      volume: '3000',
      color: 'green',
      gradient: 'from-green-500 to-green-600',
      bgGradient: 'from-green-50 to-green-100'
    }
  ];

  const supportItems = [
    { icon: Users, key: 'equipment' },
    { icon: FileText, key: 'training' },
    { icon: Headphones, key: 'engineering' },
    { icon: Award, key: 'marketing' }
  ];

  const leadTypes = [
    { key: 'private', icon: Users, color: 'blue' },
    { key: 'local', icon: MapPin, color: 'green' },
    { key: 'major', icon: Shield, color: 'orange' },
    { key: 'government', icon: Award, color: 'red' }
  ];

  const obligations = [
    'volume',
    'quality',
    'reporting',
    'warranty',
    'image'
  ];

  return (
    <>
      <SEO 
        title={t('seo.cooperation.title')}
        description={t('seo.cooperation.description')}
        keywords={t('seo.cooperation.keywords')}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-aeronix-navy via-blue-900 to-aeronix-blue text-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
                <span className="text-sm font-semibold uppercase tracking-wider">
                  {t('cooperation.hero.badge')}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {t('cooperation.hero.title')}
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                {t('cooperation.hero.slogan')}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a 
                  href="#become-partner" 
                  className="bg-white text-aeronix-blue px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg"
                >
                  {t('cooperation.hero.cta')}
                </a>
                <Link 
                  to="/contacts" 
                  className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors"
                >
                  {t('cooperation.hero.contact')}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-gradient-to-br from-aeronix-blue to-blue-600 p-3 rounded-xl">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-aeronix-navy mb-4">
                      {t('cooperation.mission.title')}
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      {t('cooperation.mission.description')}
                    </p>
                    <div className="bg-blue-50 border-l-4 border-aeronix-blue p-4 rounded">
                      <p className="text-gray-800 font-medium">
                        {t('cooperation.mission.retail')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Statuses */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-aeronix-navy mb-4">
                {t('cooperation.statuses.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('cooperation.statuses.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {statuses.map((status) => {
                const Icon = status.icon;
                return (
                  <div 
                    key={status.key}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className={`bg-gradient-to-br ${status.bgGradient} p-6 text-center`}>
                      <div className={`inline-flex bg-gradient-to-br ${status.gradient} p-4 rounded-2xl mb-4`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {t(`cooperation.statuses.${status.key}.name`)}
                      </h3>
                      <div className={`inline-block bg-gradient-to-r ${status.gradient} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                        {status.volume}+ {t('cooperation.statuses.perQuarter')}
                      </div>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-3">
                        {[1, 2, 3, 4].map((i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className={`w-5 h-5 text-${status.color}-500 flex-shrink-0 mt-0.5`} />
                            <span className="text-gray-700">
                              {t(`cooperation.statuses.${status.key}.benefit${i}`)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 max-w-4xl mx-auto bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
              <p className="text-gray-800 font-medium">
                ✅ {t('cooperation.statuses.note')}
              </p>
            </div>
          </div>
        </section>

        {/* Territory Policy */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-10 h-10 text-aeronix-blue flex-shrink-0" />
                <div>
                  <h2 className="text-3xl font-bold text-aeronix-navy mb-4">
                    {t('cooperation.territory.title')}
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    {t('cooperation.territory.duration')}
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">
                        {t('cooperation.territory.major')}
                      </h3>
                      <p className="text-gray-600">
                        {t('cooperation.territory.majorDesc')}
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">
                        {t('cooperation.territory.other')}
                      </h3>
                      <p className="text-gray-600">
                        {t('cooperation.territory.otherDesc')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-aeronix-navy mb-4">
                {t('cooperation.support.title')}
              </h2>
              <p className="text-xl text-gray-600">
                {t('cooperation.support.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {supportItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={item.key}
                    className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
                  >
                    <div className="inline-flex bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-xl mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      {t(`cooperation.support.${item.key}.title`)}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {t(`cooperation.support.${item.key}.desc`)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Lead Distribution */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-aeronix-navy mb-8 text-center">
                {t('cooperation.leads.title')}
              </h2>

              <div className="space-y-4">
                {leadTypes.map((lead) => {
                  const Icon = lead.icon;
                  return (
                    <div 
                      key={lead.key}
                      className="bg-white rounded-xl shadow p-6 flex items-start gap-4"
                    >
                      <div className={`bg-${lead.color}-100 p-3 rounded-lg flex-shrink-0`}>
                        <Icon className={`w-6 h-6 text-${lead.color}-600`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 mb-1">
                          {t(`cooperation.leads.${lead.key}.type`)}
                        </h3>
                        <p className="text-gray-600">
                          {t(`cooperation.leads.${lead.key}.desc`)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Rules */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-aeronix-navy mb-8 text-center">
                {t('cooperation.rules.title')}
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Anti-Dumping */}
                <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0" />
                    <h3 className="font-bold text-xl text-gray-900">
                      {t('cooperation.rules.antiDumping.title')}
                    </h3>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {[1, 2, 3].map((i) => (
                      <li key={i} className="text-gray-700 flex items-start gap-2">
                        <span className="text-red-500">✗</span>
                        <span>{t(`cooperation.rules.antiDumping.forbidden${i}`)}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-white rounded p-3 text-sm">
                    <p className="font-semibold text-gray-900 mb-1">
                      {t('cooperation.rules.antiDumping.penalties')}:
                    </p>
                    <ul className="space-y-1 text-gray-700">
                      <li>1️⃣ {t('cooperation.rules.antiDumping.penalty1')}</li>
                      <li>2️⃣ {t('cooperation.rules.antiDumping.penalty2')}</li>
                      <li>3️⃣ {t('cooperation.rules.antiDumping.penalty3')}</li>
                    </ul>
                  </div>
                </div>

                {/* Brand Protection */}
                <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Shield className="w-6 h-6 text-orange-600 flex-shrink-0" />
                    <h3 className="font-bold text-xl text-gray-900">
                      {t('cooperation.rules.brandProtection.title')}
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    {t('cooperation.rules.brandProtection.description')}
                  </p>
                  <div className="bg-white rounded p-3 text-sm">
                    <p className="font-semibold text-gray-900 mb-1">
                      {t('cooperation.rules.brandProtection.penalties')}:
                    </p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• {t('cooperation.rules.brandProtection.penalty1')}</li>
                      <li>• {t('cooperation.rules.brandProtection.penalty2')}</li>
                      <li>• {t('cooperation.rules.brandProtection.penalty3')}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Obligations */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-aeronix-navy mb-8 text-center">
                {t('cooperation.obligations.title')}
              </h2>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <ul className="space-y-4">
                  {obligations.map((item, index) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="bg-aeronix-blue text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 pt-1">
                        {t(`cooperation.obligations.${item}`)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Status Changes */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-aeronix-navy mb-8 text-center">
                {t('cooperation.statusChanges.title')}
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <h3 className="font-bold text-lg text-gray-900">
                      {t('cooperation.statusChanges.success.title')}
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    {t('cooperation.statusChanges.success.desc')}
                  </p>
                </div>

                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <AlertTriangle className="w-6 h-6 text-yellow-600" />
                    <h3 className="font-bold text-lg text-gray-900">
                      {t('cooperation.statusChanges.warning.title')}
                    </h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• {t('cooperation.statusChanges.warning.quarter1')}</li>
                    <li>• {t('cooperation.statusChanges.warning.quarter2')}</li>
                    <li>• {t('cooperation.statusChanges.warning.quarter3')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Become Partner */}
        <section id="become-partner" className="py-12 md:py-16 bg-gradient-to-br from-aeronix-navy to-aeronix-blue text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {t('cooperation.howto.title')}
                </h2>
                <p className="text-xl text-blue-100">
                  {t('cooperation.howto.subtitle')}
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-6">
                  {t('cooperation.howto.required')}:
                </h3>
                <ol className="space-y-4 mb-8">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="bg-white text-aeronix-blue w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                        {i}
                      </div>
                      <p className="text-lg pt-1">
                        {t(`cooperation.howto.requirement${i}`)}
                      </p>
                    </li>
                  ))}
                </ol>

                <div className="bg-white/20 rounded-xl p-6 mb-8">
                  <p className="text-lg font-semibold">
                    ⏱ {t('cooperation.howto.reviewTime')}
                  </p>
                </div>

                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <a 
                    href={`https://wa.me/77780808404?text=${encodeURIComponent(t('whatsapp.partnership'))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-aeronix-blue px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg flex items-center justify-center gap-2"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    {t('cooperation.howto.emailCta')}
                  </a>
                  <a 
                    href="tel:+77780808404"
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    +7 778 080 84 04
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <section className="py-8 bg-gray-50 border-t">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-gray-600 text-sm">
              <p>{t('cooperation.footer.approved')}</p>
              <p className="mt-2">
                {t('cooperation.footer.company')} | {t('cooperation.footer.date')}
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
