import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react'

const shopItems = [
  { name: 'Signature Coffee Bag', price: '$16.99', emoji: '☕', bg: 'from-amber-100 to-yellow-100', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=400&q=80' },
  { name: 'Donut Mix Kit', price: '$12.99', emoji: '🍩', bg: 'from-pink-100 to-rose-100', image: 'https://customer-assets.emergentagent.com/wingman/d53aa737-c70f-4389-9325-d25ce0b4093e/attachments/27b1bd5dd81742fd968212bf4c9d60b5_IMG_1483.PNG' },
  { name: 'Cat-Themed Mug', price: '$14.99', emoji: '🐱', bg: 'from-blue-100 to-sky-100', image: 'https://customer-assets.emergentagent.com/wingman/d53aa737-c70f-4389-9325-d25ce0b4093e/attachments/567181dd3a2941a1a9b027ac6df4ded8_IMG_1484.PNG' },
  { name: 'Pet Treats (Organic)', price: '$8.99', emoji: '🐾', bg: 'from-green-100 to-emerald-100', image: 'https://customer-assets.emergentagent.com/wingman/d53aa737-c70f-4389-9325-d25ce0b4093e/attachments/88168aa2d193496b896a0ebab97b75f6_IMG_1485.PNG' },
  { name: 'Donut Candle Set', price: '$18.50', emoji: '🕯️', bg: 'from-purple-100 to-violet-100', image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=400&q=80' },
  { name: 'Kitty Tote Bag', price: '$22.00', emoji: '👜', bg: 'from-pink-100 to-fuchsia-100', image: 'https://customer-assets.emergentagent.com/wingman/d53aa737-c70f-4389-9325-d25ce0b4093e/attachments/1dacfc580fcd4123a3cfdf012904ea6b_IMG_1487.PNG' },
  { name: 'Espresso Gift Set', price: '$29.99', emoji: '🎁', bg: 'from-amber-100 to-orange-100', image: 'https://customer-assets.emergentagent.com/wingman/d53aa737-c70f-4389-9325-d25ce0b4093e/attachments/6c10b06c5f3c481091be500793e740eb_IMG_1488.PNG' },
  { name: 'Cat Paw Coasters (4pk)', price: '$11.50', emoji: '🐾', bg: 'from-yellow-100 to-amber-100', image: 'https://customer-assets.emergentagent.com/wingman/d53aa737-c70f-4389-9325-d25ce0b4093e/attachments/9ad5bf354b66451b926a385b8ffa5d9d_IMG_1486.PNG' },
  { name: 'Donut Sprinkle Socks', price: '$9.99', emoji: '🧦', bg: 'from-cyan-100 to-blue-100', image: 'https://customer-assets.emergentagent.com/wingman/d53aa737-c70f-4389-9325-d25ce0b4093e/attachments/5b1f86f78f8541e285a2103f562eb8cd_IMG_1489.PNG' },
  { name: 'Shelter Donation Card', price: '$5.00', emoji: '❤️', bg: 'from-rose-100 to-pink-100', image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=400&q=80' },
]

export function ShopTheAisle() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -300 : 300
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' })
    }
  }

  return (
    <section id="shop" className="relative py-24 px-6 bg-cafe-cream overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cafe-donut/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mb-12 relative z-10"
      >
        <div className="rounded-3xl overflow-hidden shadow-2xl relative h-64 md:h-80 border border-white/20">
          <img
            src="https://customer-assets.emergentagent.com/wingman/d53aa737-c70f-4389-9325-d25ce0b4093e/attachments/7497227b103b4986ab2c9e4bc11324be_RenderedImage.jpeg"
            alt="Donut's Cafe storefront with cats enjoying donuts"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cafe-dark/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
            <span className="text-white/70 text-sm font-bold uppercase tracking-widest">Our Shop</span>
            <h3 className="text-3xl md:text-4xl font-black text-white">Feline-Inspired Charm</h3>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <ShoppingBag className="w-5 h-5 text-cafe-donut" />
              <span className="text-sm font-bold text-cafe-donut uppercase tracking-widest">
                Retail & Gifts
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-cafe-dark tracking-tight">
              The <span className="text-gradient-donut">Cat Shop</span>
            </h2>
            <p className="text-cafe-dark/50 text-lg mt-3 max-w-lg leading-relaxed">
              Beyond donuts and drinks, the shop features a retail section with signature coffee bags, donut mix kits, cat-themed mugs, and pet treats (with proceeds supporting local animal shelters). Stop by for a sweet bite, unique gifts, and a dash of feline-inspired charm.
            </p>
          </div>

          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scroll('left')}
              className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md hover:shadow-lg transition-shadow border border-cafe-donut/20"
            >
              <ChevronLeft className="w-5 h-5 text-cafe-dark" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scroll('right')}
              className="w-12 h-12 bg-cafe-dark rounded-2xl flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </motion.button>
          </div>
        </motion.div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-6 px-6"
        >
          {shopItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              className="flex-shrink-0 w-[200px] bg-white rounded-3xl p-4 cursor-pointer group hover:shadow-xl transition-shadow overflow-hidden border border-white"
            >
              <div className={`w-full aspect-square bg-gradient-to-br ${item.bg} rounded-2xl flex items-center justify-center mb-3 group-hover:scale-105 transition-transform overflow-hidden relative`}>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <motion.span
                  className="absolute inset-0 flex items-center justify-center text-5xl select-none opacity-0 group-hover:opacity-100 bg-white/40 backdrop-blur-sm transition-opacity"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  {item.emoji}
                </motion.span>
              </div>
              <h3 className="font-extrabold text-cafe-dark text-sm leading-tight">
                {item.name}
              </h3>
              <div className="flex items-center justify-between mt-2">
                <span className="text-lg font-black text-cafe-dark">{item.price}</span>
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.8 }}
                  className="w-8 h-8 bg-cafe-donut rounded-lg flex items-center justify-center text-cafe-dark font-bold text-lg"
                >
                  +
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
