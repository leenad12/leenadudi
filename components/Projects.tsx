'use client'

import { motion } from 'framer-motion'

interface Project {
  title: string
  description: string
  technologies: string[]
  link?: string
  github?: string
}

const projects: Project[] = [
  {
    title: 'Real-Time Wildfire Risk Assessment App',
    description:
      'Developed a real-time wildfire risk assessment mobile application using Flutter framework, TensorFlow Lite, and YOLOv8 model. The app supports NASA\'s GLOBE Initiative and helps assess wildfire risks based on soil and surface data. Co-authored research paper presented at AGU 2024 national conference.',
    technologies: ['Flutter', 'TensorFlow Lite', 'YOLOv8', 'Machine Learning', 'Mobile Development'],
  },
  {
    title: 'Radar System with Doppler & Synthetic Aperture',
    description:
      'Designed and built a complete radar system from scratch with both Doppler and Synthetic Aperture capabilities as part of MIT Lincoln Laboratory\'s LLRISE program. Developed comprehensive experiments demonstrating each radar function and presented findings to 150+ professionals.',
    technologies: ['Radar Systems', 'Doppler', 'Synthetic Aperture', 'Hardware Design', 'Signal Processing'],
  },
  {
    title: 'AI-Powered Dynamic Driver Pay System',
    description:
      'Led AI implementation project at Bungii focused on dynamic driver pay optimization to maximize margins. Developed machine learning models to optimize compensation structures based on market conditions, delivery complexity, and performance metrics.',
    technologies: ['Machine Learning', 'AI', 'Financial Modeling', 'Python', 'Data Analysis'],
  },
  {
    title: 'Route Optimization System',
    description:
      'Optimized delivery routes for 10+ clients across 15+ markets at Bungii. Developed algorithms to improve efficiency, reduce delivery times, and minimize costs while maintaining service quality standards.',
    technologies: ['Algorithm Design', 'Optimization', 'Logistics', 'Python', 'Data Analysis'],
  },
  {
    title: 'Geospatial Data Analysis & Visualization Tools',
    description:
      'Developed spatial models and digital tools for local resilience planning at MIT Urban Risk Lab. Created preprocessing, analysis, and visualization pipelines for geospatial datasets to identify climate stressors and support restoration targeting.',
    technologies: ['Google Earth Engine', 'DeepMind AlphaEarth', 'Geospatial Analysis', 'Python', 'Data Visualization'],
  },
  {
    title: 'Green Hydrogen Plant Design',
    description:
      'Created equipment models and Piping & Instrumentation diagrams for Kiewit Engineering\'s first green hydrogen plant. Analyzed mechanical design models to estimate labor rates for Carbon Capture and Hydrogen projects.',
    technologies: ['CAD', 'P&ID', 'Mechanical Design', 'Project Management', 'Engineering'],
  },
]

export default function Projects() {
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
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 rounded-xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">
              {project.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
                >
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-slate-600 hover:bg-slate-700 text-white rounded-lg transition-colors font-medium"
                >
                  GitHub
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
