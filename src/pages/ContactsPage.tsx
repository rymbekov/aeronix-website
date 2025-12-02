import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import SEO from '../components/SEO';

export default function ContactsPage() {
  const { t, i18n } = useTranslation();

  const getWhatsAppMessage = (name: string, phone: string, company: string, message: string) => {
    if (i18n.language === 'kk') {
      return `Сәлеметсіз бе! AERONIX мен хабарласқым келеді.\n\nАты: ${name}\nТелефон: ${phone}\nКомпания: ${company}\n\nХабарлама: ${message}`;
    }
    return `Здравствуйте! Хочу связаться с AERONIX.\n\nИмя: ${name}\nТелефон: ${phone}\nКомпания: ${company}\n\nСообщение: ${message}`;
  };
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
      return;
    }

    // Form is valid - WhatsApp link will handle submission
    setSubmitStatus('success');
    setFormData({ name: '', phone: '', company: '', message: '' });
    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Phone mask +7 777 777 77 77
    if (name === 'phone') {
      let cleaned = value.replace(/\D/g, '');
      
      // Ensure it starts with 7
      if (cleaned.length > 0 && cleaned[0] !== '7') {
        cleaned = '7' + cleaned;
      }
      
      // Limit to 11 digits (7 + 10 digits)
      cleaned = cleaned.slice(0, 11);
      
      // Format as +7 777 777 77 77
      let formatted = '+7';
      if (cleaned.length > 1) {
        formatted += ' ' + cleaned.slice(1, 4);
      }
      if (cleaned.length > 4) {
        formatted += ' ' + cleaned.slice(4, 7);
      }
      if (cleaned.length > 7) {
        formatted += ' ' + cleaned.slice(7, 9);
      }
      if (cleaned.length > 9) {
        formatted += ' ' + cleaned.slice(9, 11);
      }
      
      setFormData(prev => ({
        ...prev,
        phone: formatted
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <>
      <SEO 
        title={t('contacts.pageTitle')}
        description={t('contacts.pageSubtitle')}
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-br from-aeronix-navy via-blue-900 to-aeronix-blue">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center text-white max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                {t('contacts.pageTitle')}
              </h1>
              <p className="text-xl md:text-2xl text-blue-100">
                {t('contacts.pageSubtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-aeronix-navy mb-8">
                    {t('contacts.getInTouch')}
                  </h2>

                  {/* Office Address */}
                  <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-aeronix-blue to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-aeronix-navy mb-2">
                          {t('contacts.mainOffice')}
                        </h3>
                        <p className="text-gray-600">
                          {t('footer.address')}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-aeronix-navy mb-2">
                          {t('nav.contacts')}
                        </h3>
                        <a href={`tel:${t('footer.phone')}`} className="text-gray-600 hover:text-aeronix-blue transition-colors">
                          {t('footer.phone')}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-aeronix-navy mb-2">
                          Email
                        </h3>
                        <a href={`mailto:${t('footer.email')}`} className="text-gray-600 hover:text-aeronix-blue transition-colors">
                          {t('footer.email')}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-green-500 to-green-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-aeronix-navy mb-2">
                          {t('contacts.workingHours')}
                        </h3>
                        <div className="space-y-1 text-gray-600">
                          <p>{t('contacts.weekdays')}</p>
                          <p>{t('contacts.saturday')}</p>
                          <p>{t('contacts.sunday')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-xl"
              >
                <h2 className="text-3xl font-bold text-aeronix-navy mb-2">
                  {t('contacts.formTitle')}
                </h2>
                <p className="text-gray-600 mb-8">
                  {t('contacts.formDescription')}
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('form.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-aeronix-blue focus:border-transparent transition-all"
                      placeholder={t('form.name')}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('form.phone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-aeronix-blue focus:border-transparent transition-all"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('form.company')}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-aeronix-blue focus:border-transparent transition-all"
                      placeholder={t('form.company')}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('form.comment')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-aeronix-blue focus:border-transparent transition-all resize-none"
                      placeholder={t('form.comment')}
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl"
                    >
                      {t('form.success')}
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl"
                    >
                      {i18n.language === 'kk' 
                        ? 'Барлық міндетті өрістерді толтырыңыз: Аты, Телефон және Хабарлама'
                        : 'Пожалуйста, заполните все обязательные поля: Имя, Телефон и Сообщение'
                      }
                    </motion.div>
                  )}

                  <a
                    href={
                      formData.name.trim() && formData.phone.trim() && formData.message.trim()
                        ? `https://wa.me/77750808448?text=${encodeURIComponent(
                            getWhatsAppMessage(formData.name, formData.phone, formData.company || '-', formData.message)
                          )}`
                        : '#'
                    }
                    onClick={(e) => {
                      if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
                        e.preventDefault();
                        setSubmitStatus('error');
                        setTimeout(() => setSubmitStatus('idle'), 3000);
                      }
                    }}
                    target={formData.name.trim() && formData.phone.trim() && formData.message.trim() ? "_blank" : undefined}
                    rel={formData.name.trim() && formData.phone.trim() && formData.message.trim() ? "noopener noreferrer" : undefined}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    {t('contacts.sendMessage')}
                  </a>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
