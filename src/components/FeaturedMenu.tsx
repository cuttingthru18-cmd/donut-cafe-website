import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Plus, Flame } from 'lucide-react'

const categories = ['All', 'Donuts', 'Coffee', 'Treats']

const menuItems = [
  { 
    name: 'Maple-Bacon Crème Brûlée', 
    category: 'Donuts', 
    price: '$5.50', 
    rating: 4.9, 
    emoji: '🍩', 
    tag: 'Best Seller', 
    tagColor: 'bg-cafe-donut',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=400&q=80'
  },
  { 
    name: 'Matcha Cat Latte', 
    category: 'Coffee', 
    price: '$5.75', 
    rating: 4.8, 
    emoji: '🍵', 
    tag: 'New', 
    tagColor: 'bg-cafe-mint',
    image: 'https://customer-assets.emergentagent.com/wingman/d53aa737-c70f-4389-9325-d25ce0b4093e/attachments/107f80d252f045c99439f91d5c6c1c3b_IMG_1482.PNG'
  },
  { 
    name: "Donut's Choice Espresso", 
    category: 'Coffee', 
    price: '$4.50', 
    rating: 4.9, 
    emoji: '☕', 
    tag: 'Signature', 
    tagColor: 'bg-cafe-brown',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&q=80'
  },
  { 
    name: 'Strawberry Dream Drink', 
    category: 'Treats', 
    price: '$5.25', 
    rating: 4.7, 
    emoji: '🍓', 
    tag: 'Refreshing', 
    tagColor: 'bg-cafe-donut',
    image: 'https://customer-assets.emergentagent.com/wingman/d53aa737-c70f-4389-9325-d25ce0b4093e/attachments/b3f0268ea54648098342a383b87c4874_IMG_1481.PNG'
  },
  { 
    name: 'Cat-ppuccino', 
    category: 'Coffee', 
    price: '$6.00', 
    rating: 4.8, 
    emoji: '🐱', 
    tag: 'Fan Fave', 
    tagColor: 'bg-cafe-purple',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=400&q=80'
  },
  { 
    name: 'Donut & Latte Combo', 
    category: 'Combos', 
    price: '$9.99', 
    rating: 4.9, 
    emoji: '✨', 
    tag: 'Best Value', 
    tagColor: 'bg-cafe-orange',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=400&q=80'
  },
  { 
    name: 'Kitty Cookie', 
    category: 'Treats', 
    price: '$3.50', 
    rating: 4.6, 
    emoji: '🍪', 
    tag: null, 
    tagColor: '',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=400&q=80'
  },
  { 
    name: 'Caramel Pecan Swirl', 
    category: 'Donuts', 
    price: '$5.25', 
    rating: 4.7, 
    emoji: '🍩', 
    tag: 'Trending', 
    tagColor: 'bg-cafe-yellow',
    image: 'https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?auto=format&fit=crop&w=400&q=80'
  },
]

export function FeaturedMenu() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory)

  return (
    <section id="specials" className="relative py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Flame className="w-5 h-5 text-cafe-donut" />
              <span className="text-sm font-bold text-cafe-donut uppercase tracking-widest">
                Featured
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-cafe-dark tracking-tight">
              What's <span className="text-gradient-donut">Sweet</span>
            </h2>
          </div>

          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.92 }}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-cafe-dark text-white shadow-lg'
                    : 'bg-cafe-cream text-cafe-dark/60 hover:bg-cafe-warm'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                layout
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.96 }}
                className="relative bg-cafe-cream rounded-3xl p-5 cursor-pointer group hover:shadow-xl transition-shadow overflow-hidden"
              >
                {item.tag && (
                  <span className={`absolute top-4 right-4 ${item.tagColor} text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full z-10`}>
                    {item.tag}
                  </span>
                )}

                <div className="w-full aspect-square bg-white rounded-2xl flex items-center justify-center mb-4 group-hover:bg-cafe-donut/10 transition-colors overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <motion.span
                    className="absolute inset-0 flex items-center justify-center text-6xl select-none opacity-0 group-hover:opacity-100 bg-white/40 backdrop-blur-sm transition-opacity"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    {item.emoji}
                  </motion.span>
                </div>

                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-extrabold text-cafe-dark text-lg leading-tight">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-3.5 h-3.5 text-cafe-yellow fill-cafe-yellow" />
                      <span className="text-sm font-semibold text-cafe-dark/60">
                        {item.rating}
                      </span>
                    </div>
                  </div>
                  <span className="text-xl font-black text-cafe-dark">
                    {item.price}
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.85 }}
                  className="absolute bottom-4 right-4 w-10 h-10 bg-cafe-donut text-cafe-dark rounded-xl flex items-center justify-center shadow-lg shadow-cafe-donut/30 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Plus className="w-5 h-5" />
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
