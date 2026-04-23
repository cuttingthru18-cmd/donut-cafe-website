import { motion } from 'framer-motion'
import { Heart, Globe, Clock, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative bg-cafe-dark text-white overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[300px] bg-cafe-donut/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-3xl select-none">🍩</span>
              <span className="text-xl font-extrabold tracking-tight">
                Donut's<span className="text-cafe-donut"> Cafe</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Named after our beloved cat, Donut.
              Specialty donuts, great coffee & feline-inspired charm.
            </p>
            <div className="flex gap-3 mt-6">
              {[Heart, Globe].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/40 mb-4">Menu</h4>
            <ul className="space-y-2.5">
              {['Donuts', 'Coffee & Espresso', 'Combos', 'Treats & Pastries', 'Cat Shop'].map((item) => (
                <li key={item}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 4 }}
                    className="text-white/60 hover:text-white text-sm transition-colors inline-block"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/40 mb-4">Company</h4>
            <ul className="space-y-2.5">
              {['About Donut 🐱', 'Careers', 'Shelter Partners', 'Sustainability', 'Gift Cards'].map((item) => (
                <li key={item}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 4 }}
                    className="text-white/60 hover:text-white text-sm transition-colors inline-block"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/40 mb-4">Visit Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-cafe-donut flex-shrink-0" />
                <span className="text-white/60 text-sm">7 AM – 9 PM Daily</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-cafe-donut flex-shrink-0" />
                <span className="text-white/60 text-sm">(718) 555-MEOW</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-white/30 text-sm">
            © 2026 Donut's Cafe. All rights reserved. 🐾 Proceeds support local animal shelters.
          </span>
          <div className="flex gap-6">
            {['Privacy', 'Terms', 'Cookies'].map((item) => (
              <a key={item} href="#" className="text-white/30 hover:text-white/60 text-sm transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
