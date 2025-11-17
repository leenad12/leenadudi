'use client'

import { motion } from 'framer-motion'

interface ResearchItem {
  title: string
  institution: string
  year: string
  description: string
  publications?: string[]
}

const researchItems: ResearchItem[] = [
  {
    title: 'Machine Learning & Data Analysis for FIFA Referee Decision-Making',
    institution: 'FIFA + MIT Sports Lab',
    year: 'Sept 2025 - Present',
    description:
      'Enhancing referee decision-making via FIFA\'s optical tracking data system by developing an ML model that predicts last-touch events to accurately award goal kicks and corner kicks. Creating high-quality datasets for model training and evaluation by processing and annotating tracking data from matches, extracting player positions, ball trajectories, and contextual features.',
  },
  {
    title: 'Remote Sensing & Geospatial Data Analysis for Climate Resilience',
    institution: 'MIT Urban Risk Lab',
    year: 'Sept 2025 - Present',
    description:
      'Using Google Earth Engine and DeepMind AlphaEarth embeddings to detect land-use and climate stressors, including deforestation hotspots, waterbody shrinkage, vegetation stress corridors, and settlement encroachment. Developing spatial models to preprocess, analyze, and visualize geospatial datasets, generating maps and digital tools for local resilience planning and restoration targeting.',
  },
  {
    title: 'Integrating Machine Learning and Citizen Science in CS-FLARE',
    institution: 'NASA, Earth Sciences Division',
    year: '2024',
    description:
      'Researched soil/surface impact on wildfires, supporting NASA\'s GLOBE Initiative. Developed real-time wildfire risk assessment application and co-authored research paper.',
    publications: [
      'Integrating Machine Learning and Citizen Science in CS-FLARE, American Geophysical Union (AGU) 2024 National Conference',
    ],
  },
]

export default function Research() {
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
        Research
      </motion.h2>
      <div className="space-y-8">
        {researchItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border-l-4 border-green-500 dark:border-green-400"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-lg text-green-600 dark:text-green-400 font-medium">
                  {item.institution}
                </p>
              </div>
              <span className="text-slate-500 dark:text-slate-400 font-medium mt-2 md:mt-0">
                {item.year}
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
              {item.description}
            </p>
            {item.publications && item.publications.length > 0 && (
              <div className="mt-4 pt-4 border-t border-green-200 dark:border-green-800">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Publications:
                </h4>
                <ul className="space-y-2">
                  {item.publications.map((pub, pubIndex) => (
                    <li
                      key={pubIndex}
                      className="text-sm text-slate-600 dark:text-slate-400 flex items-start"
                    >
                      <span className="text-green-500 mr-2">•</span>
                      <span>{pub}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
