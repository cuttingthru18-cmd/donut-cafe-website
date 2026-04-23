import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useState, useEffect } from 'react'

export function RunningCat() {
  const { scrollYProgress } = useScroll()
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  // Smoother scroll progress using a spring
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  
  const x = useTransform(smoothProgress, [0, 0.25, 0.5, 0.75, 1], ['-15%', '115%', '-15%', '115%', '50%'])
  const y = useTransform(smoothProgress, [0, 1], ['15%', '85%'])
  const flip = useTransform(smoothProgress, [0, 0.25, 0.5, 0.75, 1], [1, 1, -1, 1, 1])

  return (
    <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
      <motion.div
        style={{ x, y, scaleX: flip }}
        className="absolute text-4xl md:text-5xl filter drop-shadow-md"
      >
        <div className="relative">
          <span className="relative z-10">🐱</span>
          {/* Lighter trail for mobile performance */}
          {!isMobile && (
            <motion.div 
              className="absolute top-1/2 left-0 -translate-y-1/2 w-24 md:w-32 h-2 bg-gradient-to-r from-cafe-donut/0 to-cafe-donut/40 blur-sm rounded-full -z-10"
              style={{ originX: 1 }}
              animate={{ scaleX: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            />
          )}
        </div>
      </motion.div>
    </div>
  )
}
