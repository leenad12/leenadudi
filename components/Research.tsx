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
      className="bg-cursor-surface rounded-xl shadow-xl p-5 md:p-6 border border-cursor-border"
    >
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-2xl font-bold text-cursor-text mb-4"
      >
        Research
      </motion.h2>
      <div className="space-y-4">
        {researchItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-cursor-bg rounded-lg p-4 border-l-4 border-cursor-accent border border-cursor-border"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <div>
                <h3 className="text-lg font-bold text-cursor-text mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-cursor-accent font-medium">
                  {item.institution}
                </p>
              </div>
              <span className="text-cursor-textSecondary text-xs font-medium mt-2 md:mt-0">
                {item.year}
              </span>
            </div>
            <p className="text-sm text-cursor-textSecondary mb-3 leading-relaxed">
              {item.description}
            </p>
            {item.publications && item.publications.length > 0 && (
              <div className="mt-3 pt-3 border-t border-cursor-border">
                <h4 className="font-semibold text-cursor-text text-xs mb-1.5">
                  Publications:
                </h4>
                <ul className="space-y-1.5">
                  {item.publications.map((pub, pubIndex) => (
                    <li
                      key={pubIndex}
                      className="text-xs text-cursor-textSecondary flex items-start"
                    >
                      <span className="text-cursor-accent mr-1.5">•</span>
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
