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
      className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12"
    >
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-4xl font-bold text-slate-800 dark:text-white mb-8"
      >
        Hobbies
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hobbies.map((hobby, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-orange-50 to-pink-50 dark:from-orange-900/20 dark:to-pink-900/20 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {hobby.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
              {hobby.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              {hobby.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
