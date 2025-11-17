'use client'

import { motion } from 'framer-motion'

interface NavigationProps {
  tabs: { id: string; label: string }[]
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function Navigation({
  tabs,
  activeTab,
  setActiveTab,
}: NavigationProps) {
  return (
    <nav className="sticky top-0 z-50 bg-cursor-surface/95 backdrop-blur-lg border border-cursor-border rounded-lg shadow-sm mb-4">
      <div className="flex flex-col sm:flex-row items-center justify-between p-3">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4 sm:mb-0"
        >
          <img
            src="/headshot.jpg"
            alt="Leena Dudi"
            className="w-8 h-8 rounded-full object-cover border-2 border-cursor-accent shadow-md"
          />
          <h1 className="text-lg font-bold text-cursor-text">
            Leena Dudi
          </h1>
        </motion.div>
        <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'text-white'
                  : 'text-cursor-textSecondary hover:text-cursor-accent'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-cursor-accent rounded-lg"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </nav>
  )
}
