'use client'

import { motion } from 'framer-motion'

interface Hobby {
  title: string
  description: string
  icon: string
}

const hobbies: Hobby[] = []

export default function Hobbies() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-3xl font-bold text-theme-text mb-6"
      >
        Hobbies
      </motion.h2>
      <div className="text-center py-12">
        <p className="text-theme-textSecondary text-lg">Coming soon...</p>
      </div>
    </motion.div>
  )
}
