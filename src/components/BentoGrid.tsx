import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Coffee, Cookie, Zap, ShoppingCart } from 'lucide-react'
import { useState, useEffect } from 'react'

const tileVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, type: 'spring' as const, stiffness: 80, damping: 15 },
  }),
}

const tiles = [
  {
    title: 'Donuts',
    subtitle: 'Specialty Blends',
    description: 'Maple-bacon crème brûlée, matcha white chocolate, and rotating seasonal creations.',
    icon: Cookie,
    emoji: '🍩',
    bg: 'bg-gradient-to-br from-[#F8B4C8] to-[#F9A8C9]',
    text: 'text-cafe-dark',
    span: 'md:col-span-2 md:row-span-2',
    size: 'large',
  },
  {
    title: 'Espresso',
    subtitle: 'Top-Tier Brews',
    description: "Donut's Choice single-origin, cold brews & signature lattes.",
    icon: Coffee,
    emoji: '☕',
    bg: 'bg-gradient-to-br from-cafe-brown to-cafe-dark',
    text: 'text-white',
    span: 'md:col-span-1',
    size: 'small',
  },
  {
    title: 'Daily Specials',
    subtitle: "Today's Picks",
    description: "Donut pairings & rotating deals you won't want to miss.",
    icon: Zap,
    emoji: '⭐',
    bg: 'bg-gradient-to-br from-cafe-yellow to-cafe-orange',
    text: 'text-cafe-dark',
    span: 'md:col-span-1',
    size: 'small',
  },
  {
    title: 'Cat Shop',
    subtitle: 'Feline Finds',
    description: 'Cat-themed mugs, pet treats & donut mix kits — proceeds support local shelters.',
    icon: ShoppingCart,
    emoji: '🐱',
    bg: 'bg-gradient-to-br from-cafe-sky to-[#C5E8F7]',
    text: 'text-cafe-dark',
    span: 'md:col-span-2',
    size: 'wide',
  },
]

function TiltTile({ tile, i }: { tile: typeof tiles[0], i: number }) {
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      custom={i}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={tileVariants}
      style={{ 
        rotateX: isMobile ? 0 : rotateX, 
        rotateY: isMobile ? 0 : rotateY, 
        transformStyle: 'preserve-3d' 
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.97 }}
      className={`relative ${tile.span} ${tile.bg} ${tile.text} rounded-3xl p-6 md:p-8 cursor-pointer overflow-hidden group shadow-md hover:shadow-2xl transition-shadow`}
    >
      <div style={{ transform: isMobile ? 'none' : 'translateZ(50px)', transformStyle: 'preserve-3d' }} className="h-full flex flex-col justify-between relative z-10">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <tile.icon className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider opacity-70">
              {tile.subtitle}
            </span>
          </div>
          <h3 className={`${tile.size === 'large' ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'} font-black tracking-tight mt-2`}>
            {tile.title}
          </h3>
        </div>
        <p className={`${tile.size === 'large' ? 'text-base' : 'text-sm'} opacity-70 max-w-xs leading-relaxed`}>
          {tile.description}
        </p>
      </div>

      <motion.span
        style={{ transform: isMobile ? 'none' : 'translateZ(20px)' }}
        className={`absolute ${
          tile.size === 'large'
            ? 'text-7xl bottom-4 right-4 md:text-[10rem] md:bottom-2 md:right-2'
            : tile.size === 'wide'
            ? 'text-6xl bottom-2 right-4'
            : 'text-5xl bottom-2 right-2'
        } opacity-20 group-hover:opacity-40 transition-opacity select-none`}
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        {tile.emoji}
      </motion.span>
    </motion.div>
  )
}

export function BentoGrid() {
  return (
    <section id="menu" className="relative py-16 md:py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-sm font-bold text-cafe-donut uppercase tracking-widest">
            What We Serve
          </span>
          <h2 className="text-4xl md:text-7xl font-black text-cafe-dark mt-3 tracking-tight">
            Pick Your <span className="text-gradient-donut">Treat</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5 auto-rows-[180px] md:auto-rows-[200px] perspective-[1000px]">
          {tiles.map((tile, i) => (
            <TiltTile key={tile.title} tile={tile} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
