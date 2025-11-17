'use client'

import { motion } from 'framer-motion'

interface NavigationProps {
  sections: { id: string; label: string }[]
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

export default function Navigation({
  sections,
  activeSection,
  scrollToSection,
}: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-theme-surface border-b border-theme-border shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 gap-4">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => scrollToSection('about')}
            className={`relative px-4 py-2 rounded-lg text-lg font-bold transition-all duration-300 ${
              activeSection === 'about'
                ? 'text-white'
                : 'text-theme-text hover:opacity-80'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {activeSection === 'about' && (
              <motion.div
                layoutId="activeSection"
                className="absolute inset-0 bg-theme-accent rounded-lg"
                initial={false}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
            <span className="relative z-10">Leena Dudi</span>
          </motion.button>
          <div className="flex items-center gap-2">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === section.id
                    ? 'text-white'
                    : 'text-theme-textSecondary hover:text-theme-text'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeSection === section.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-theme-accent rounded-lg"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{section.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
