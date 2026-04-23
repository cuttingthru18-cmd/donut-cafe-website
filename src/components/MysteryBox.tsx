import { motion } from 'framer-motion'
import { Gift, Sparkles, ArrowRight } from 'lucide-react'

export function MysteryBox() {
  return (
    <section id="mystery-box" className="relative py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="relative bg-gradient-to-br from-cafe-dark via-cafe-brown to-cafe-dark rounded-[2rem] overflow-hidden"
        >
          {/* Glow effects */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cafe-donut/30 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cafe-purple/25 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cafe-yellow/15 rounded-full blur-[80px]" />

          <div className="relative z-10 p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12">
            {/* Left - Gift visual */}
            <div className="flex-shrink-0">
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 30px rgba(248, 180, 200, 0.3)',
                    '0 0 60px rgba(248, 180, 200, 0.5)',
                    '0 0 30px rgba(248, 180, 200, 0.3)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-cafe-donut to-cafe-pink rounded-3xl flex items-center justify-center relative"
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0], y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="flex flex-col items-center gap-1"
                >
                  <span className="text-6xl md:text-7xl select-none">🎁</span>
                  <span className="text-3xl select-none">🐱</span>
                </motion.div>

                {/* Floating sparkles */}
                <motion.div
                  className="absolute -top-3 -right-3"
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-8 h-8 text-cafe-yellow" />
                </motion.div>
                <motion.div
                  className="absolute -bottom-2 -left-2"
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <Sparkles className="w-6 h-6 text-cafe-lime" />
                </motion.div>
              </motion.div>
            </div>

            {/* Right - Content */}
            <div className="text-center lg:text-left flex-1">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
                <Gift className="w-4 h-4 text-cafe-donut" />
                <span className="text-sm font-bold text-white/80 uppercase tracking-wider">
                  Limited Drop
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[0.95] mb-6">
                Donut's Mystery
                <br />
                <span className="text-gradient">Box</span>
              </h2>

              <p className="text-white/60 text-lg max-w-lg mb-8 leading-relaxed">
                A surprise assortment of our best donuts, a bag of Donut's Choice coffee, a cat-themed
                gift, and a treat for your pet. New box every week — purrfect for gifting!
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                <div className="glass-dark rounded-2xl px-5 py-3 text-center">
                  <div className="text-2xl font-black text-white">$29.99</div>
                  <div className="text-xs text-white/50 font-semibold">per box</div>
                </div>
                <div className="glass-dark rounded-2xl px-5 py-3 text-center">
                  <div className="text-2xl font-black text-cafe-lime">~$55</div>
                  <div className="text-xs text-white/50 font-semibold">actual value</div>
                </div>
                <div className="glass-dark rounded-2xl px-5 py-3 text-center">
                  <div className="text-2xl font-black text-cafe-donut">89</div>
                  <div className="text-xs text-white/50 font-semibold">left this week</div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(248, 180, 200, 0.5)' }}
                whileTap={{ scale: 0.92 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-cafe-donut text-cafe-dark font-bold text-lg rounded-2xl shadow-lg shadow-cafe-donut/30"
              >
                Grab a Mystery Box 🐾
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
