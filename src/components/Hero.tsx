import { motion } from 'framer-motion'
import { ArrowDown, Calendar } from 'lucide-react'

const wordVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.3 + i * 0.12,
      type: 'spring' as const,
      stiffness: 100,
      damping: 12,
    },
  }),
}

export function Hero() {
  const words = ["Donut's", 'Cafe,', 'Where', 'Sweet', 'Meets', 'Whiskers.']

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden noise-overlay flex items-center">
      {/* Floating decorative blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-cafe-donut/25 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-cafe-sky/20 rounded-full blur-3xl animate-float-delay" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cafe-yellow/15 rounded-full blur-3xl animate-float-delay-2" />

      {/* Hero illustration - right side */}
      <motion.div
        initial={{ opacity: 0, x: 100, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
        className="absolute right-0 bottom-0 hidden lg:block w-[550px] xl:w-[650px] pointer-events-none"
      >
        <img
          src="/images/donut-cat-new.png"
          alt="Donut the cat sitting on a giant pink donut"
          className="w-full h-auto drop-shadow-2xl"
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Opening Badge Removed as per user request */}

          {/* Kinetic Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter mb-8">
            {words.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={wordVariants}
                className={`inline-block mr-3 md:mr-4 ${
                  i <= 1 ? 'text-gradient-donut' : 'text-cafe-dark'
                }`}
                style={{ perspective: '600px' }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subtitle - Paragraph 1 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-base md:text-lg text-cafe-dark/60 max-w-xl mb-12 font-medium leading-relaxed"
          >
            Donut's Cafe is named after the owner's cat, Donut, and offers a rotating menu of specialty donut blends—think maple-bacon crème brûlée or matcha white chocolate. Paired with top-tier espresso, this playful, pet-friendly spot turns everyday coffee breaks into something memorable.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(248, 180, 200, 0.5)' }}
              whileTap={{ scale: 0.92 }}
              className="px-8 py-4 bg-cafe-donut text-cafe-dark font-bold text-lg rounded-2xl shadow-lg shadow-cafe-donut/30 transition-shadow"
            >
              Order Now 🍩
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.92 }}
              className="px-8 py-4 glass text-cafe-dark font-bold text-lg rounded-2xl"
            >
              Meet Donut 🐱
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile illustration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="lg:hidden mt-10 flex justify-center"
        >
          <img
            src="/images/donut-cat-new.png"
            alt="Donut the cat sitting on a giant pink donut"
            className="w-72 md:w-96 h-auto drop-shadow-xl"
          />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-semibold text-cafe-dark/40 uppercase tracking-widest">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5 text-cafe-dark/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
