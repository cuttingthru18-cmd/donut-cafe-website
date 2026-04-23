import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ShoppingBag } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = ['Menu', 'Shop', 'Specials', 'Mystery Box']

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-3"
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-2xl px-6 py-3 flex items-center justify-between shadow-lg border border-white/20">
          <motion.div
            className="flex items-center gap-2.5 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-3xl select-none">🍩</span>
            <span className="text-xl font-extrabold text-cafe-dark tracking-tight">
              Donut's<span className="text-cafe-donut"> Cafe</span>
            </span>
          </motion.div>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="px-4 py-2 text-sm font-semibold text-cafe-dark/70 hover:text-cafe-dark rounded-xl hover:bg-white/40 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="relative w-10 h-10 bg-cafe-dark rounded-xl flex items-center justify-center text-white"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-cafe-donut rounded-full text-[10px] font-bold text-cafe-dark flex items-center justify-center">
                3
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden w-10 h-10 bg-white/50 rounded-xl flex items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              className="md:hidden glass rounded-2xl mt-2 overflow-hidden shadow-lg border border-white/20"
            >
              <div className="p-4 flex flex-col gap-1">
                {links.map((link, i) => (
                  <motion.a
                    key={link}
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="px-4 py-3 text-sm font-semibold text-cafe-dark/70 hover:text-cafe-dark rounded-xl hover:bg-white/40 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
