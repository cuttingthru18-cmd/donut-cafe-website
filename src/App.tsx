import { Analytics } from '@vercel/analytics/react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Hero } from './components/Hero.tsx'
import { BentoGrid } from './components/BentoGrid.tsx'
import { FeaturedMenu } from './components/FeaturedMenu.tsx'
import { ShopTheAisle } from './components/ShopTheAisle.tsx'
import { MysteryBox } from './components/MysteryBox.tsx'
import { Footer } from './components/Footer.tsx'
import { Navbar } from './components/Navbar.tsx'
import { RunningCat } from './components/RunningCat.tsx'

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isClicking, setIsClicking] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) setMousePos({ x: e.clientX, y: e.clientY })
    }
    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isMobile])

  return (
    <div className={`relative ${!isMobile ? 'cursor-none' : ''} min-h-screen bg-cafe-cream`}>
      <Analytics />
      {/* Custom Cursor - Disabled on Mobile for performance */}
      {!isMobile && (
        <motion.div
          className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[100] text-2xl select-none flex items-center justify-center"
          animate={{ 
            x: mousePos.x - 16, 
            y: mousePos.y - 16,
            scale: isClicking ? 0.8 : 1,
            rotate: isClicking ? 45 : 0
          }}
          transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
        >
          {isClicking ? '🥨' : '🍩'}
        </motion.div>
      )}

      <Navbar />
      
      {/* Running Cat is permanent but lighter on mobile */}
      <RunningCat />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <Hero />
        <BentoGrid />
        <FeaturedMenu />
        <ShopTheAisle />
        <MysteryBox />
        <Footer />
      </motion.div>

      {/* Permanent Rain Effect - Optimized Count */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        {[...Array(isMobile ? 8 : 15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              y: -100, 
              x: Math.random() * 100 + 'vw', 
              opacity: 0,
              rotate: Math.random() * 360
            }}
            animate={{ 
              y: '110vh', 
              opacity: [0, 1, 1, 0],
              rotate: 720
            }}
            transition={{ 
              duration: 10 + Math.random() * 5, 
              repeat: Infinity, 
              delay: Math.random() * 10,
              ease: "linear"
            }}
            className="absolute text-3xl md:text-4xl"
          >
            {['🍩', '🐾', '🍩', '🥐', '🐱'][Math.floor(Math.random() * 5)]}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default App