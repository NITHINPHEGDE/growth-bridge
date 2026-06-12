import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { fadeUp, slideLeft, slideRight, staggerContainer, VIEWPORT_OPTS } from '../../utils/helpers';
import { SITE_EMAIL, SITE_PHONE, SITE_ADDRESS } from '../../utils/constants';

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setSent(true);
    setLoading(false);
    reset();
  };

  return (
    <section id="contact" className="section-padding bg-[#f4f7f4]">
      <div className="container mx-auto px-5 md:px-10 lg:px-14 max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_OPTS}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <motion.span variants={fadeUp} className="inline-block text-[#2d7a3a] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Contact Us
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d1b3e] mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2d7a3a] to-[#4cba5e]">Touch</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-500 text-base sm:text-lg">
            Ready to grow? Tell us about your business and we'll craft a strategy just for you.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_OPTS}
            variants={slideLeft}
            className="lg:col-span-2"
          >
            <div className="bg-[#0d1b3e] rounded-2xl p-8 text-white h-full">
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>Let's Talk Growth</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                We're a team of growth-obsessed strategists, creatives, and performance marketers. Let's build something remarkable together.
              </p>

              <div className="space-y-5 mb-10">
                {[
                  { icon: Mail, label: 'Email', val: SITE_EMAIL },
                  { icon: Phone, label: 'Phone', val: SITE_PHONE },
                  { icon: MapPin, label: 'Location', val: SITE_ADDRESS },
                ].map(({ icon: Icon, label, val }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#2d7a3a]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={16} className="text-[#4cba5e]" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs mb-0.5">{label}</div>
                      <div className="text-sm text-white">{val}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-white/10">
                <p className="text-gray-400 text-xs mb-4">Response time: Within 24 hours</p>
                <div className="flex gap-2">
                  {['Mon–Fri', '9am–7pm IST'].map(t => (
                    <span key={t} className="px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 text-xs border border-white/10">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_OPTS}
            variants={slideRight}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg shadow-black/5 border border-gray-100">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle size={52} className="text-[#2d7a3a] mx-auto mb-5" />
                  <h3 className="text-xl font-bold text-[#0d1b3e] mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>Message Sent!</h3>
                  <p className="text-gray-500 text-sm">We'll get back to you within 24 hours.</p>
                  <button onClick={() => setSent(false)} className="mt-6 text-[#2d7a3a] text-sm font-semibold hover:underline">Send Another Message</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Your Name *</label>
                      <input
                        {...register('name', { required: 'Name is required' })}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors ${errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-[#2d7a3a] bg-gray-50 focus:bg-white'}`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email Address *</label>
                      <input
                        {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })}
                        placeholder="john@company.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-[#2d7a3a] bg-gray-50 focus:bg-white'}`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Phone Number</label>
                      <input
                        {...register('phone')}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#2d7a3a] bg-gray-50 focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Service Interested In</label>
                      <select
                        {...register('service')}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#2d7a3a] bg-gray-50 focus:bg-white transition-colors text-gray-600"
                      >
                        <option value="">Select a service</option>
                        <option>Digital Marketing</option>
                        <option>Performance Marketing</option>
                        <option>Social Media Management</option>
                        <option>Branding & Design</option>
                        <option>Website Development</option>
                        <option>Video Production</option>
                        <option>Business Growth Strategy</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Tell Us About Your Goals *</label>
                    <textarea
                      {...register('message', { required: 'Please tell us about your project' })}
                      rows={4}
                      placeholder="Tell us about your business, current challenges, and what growth looks like for you..."
                      className={`w-full px-4 py-3 rounded-xl border text-sm outline-none resize-none transition-colors ${errors.message ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-[#2d7a3a] bg-gray-50 focus:bg-white'}`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#0d1b3e] to-[#1a3460] text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}