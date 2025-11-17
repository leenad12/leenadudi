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
    title: 'Radar System with Doppler & Synthetic Aperture',
    description:
      'Designed and built a radar system from scratch with both Doppler and Synthetic Aperture capabilities as part of MIT Lincoln Laboratory\'s LLRISE program. Selected as 1 of 26 students nationwide to attend the free residential program. Developed comprehensive experiments demonstrating each radar function, including signal processing algorithms and hardware integration. Presented findings and technical demonstrations to 150+ professionals at MIT Lincoln Laboratory.',
    technologies: ['Radar Systems', 'Doppler', 'Synthetic Aperture', 'Hardware Design', 'Signal Processing'],
  },
]

export default function Projects() {
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
        Projects
      </motion.h2>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-theme-surface rounded-lg p-6 border border-theme-border hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-theme-text mb-3">
              {project.title}
            </h3>
            <p className="text-base text-theme-textSecondary mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1.5 bg-theme-surface border border-theme-border text-theme-text rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-theme-accent hover:bg-theme-accentHover text-white rounded-lg transition-colors text-sm font-medium"
                >
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-theme-border hover:bg-theme-textSecondary text-white rounded-lg transition-colors text-sm font-medium"
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
