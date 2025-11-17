'use client'

import { motion } from 'framer-motion'

interface Hobby {
  title: string
  description: string
  icon: string
}

const hobbies: Hobby[] = [
  {
    title: 'Photography',
    description:
      'Capturing moments and exploring the world through the lens. Specializing in landscape and street photography.',
    icon: '📸',
  },
  {
    title: 'Reading',
    description:
      'Avid reader of science fiction, technology, and philosophy. Always exploring new ideas and perspectives.',
    icon: '📚',
  },
  {
    title: 'Hiking',
    description:
      'Love exploring nature trails and mountains. Finding peace and inspiration in the great outdoors.',
    icon: '🏔️',
  },
  {
    title: 'Cooking',
    description:
      'Experimenting with different cuisines and flavors. Enjoy creating new recipes and sharing meals with friends.',
    icon: '👨‍🍳',
  },
  {
    title: 'Music',
    description:
      'Playing guitar and piano. Enjoy both listening to and creating music across various genres.',
    icon: '🎵',
  },
  {
    title: 'Gaming',
    description:
      'Enthusiastic gamer exploring indie titles and strategy games. Appreciate game design and storytelling.',
    icon: '🎮',
  },
]

export default function Hobbies() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-cursor-surface rounded-xl shadow-xl p-5 md:p-6 border border-cursor-border"
    >
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-2xl font-bold text-cursor-text mb-4"
      >
        Hobbies
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {hobbies.map((hobby, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-cursor-bg rounded-lg p-4 border border-cursor-border hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group"
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
              {hobby.icon}
            </div>
            <h3 className="text-base font-bold text-cursor-text mb-2">
              {hobby.title}
            </h3>
            <p className="text-sm text-cursor-textSecondary leading-relaxed">
              {hobby.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
