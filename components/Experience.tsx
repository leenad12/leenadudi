'use client'

import { motion } from 'framer-motion'

interface ExperienceItem {
  title: string
  company: string
  period: string
  location?: string
  description: string
  technologies: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: 'Financial Planning & Analysis Intern',
    company: 'Bungii (last-mile delivery company)',
    period: 'May - June 2025',
    location: 'Overland Park, KS',
    description:
      'Led AI implementation project focused on dynamic driver pay to maximize margins. Optimized delivery routes for 10+ clients in 15+ markets and conducted market research to expand box truck market.',
    technologies: ['AI/ML', 'Financial Analysis', 'Route Optimization', 'Market Research'],
  },
  {
    title: 'Climate Data & Research Intern',
    company: 'NASA, Earth Sciences Division',
    period: 'May - August 2024',
    location: 'Remote',
    description:
      'Researched soil/surface impact on wildfires, supporting GLOBE Initiative. Developed real-time wildfire risk assessment app using Flutter framework, TensorFlow Lite, and YOLOv8 model. Co-authored and presented research paper: "Integrating Machine Learning and Citizen Science in CS-FLARE" at American Geophysical Union\'s 2024 national conference.',
    technologies: ['Flutter', 'TensorFlow Lite', 'YOLOv8', 'Python', 'Machine Learning'],
  },
  {
    title: 'Technology Student Researcher',
    company: 'MIT Lincoln Laboratory',
    period: 'July 2024',
    location: 'Lexington, MA',
    description:
      'Selected as 1 of 26 students to attend free residential program "LLRISE". Designed and built a radar system from scratch with Doppler and Synthetic Aperture capabilities. Developed experiments highlighting each radar function and presented to 150+ professionals.',
    technologies: ['Radar Systems', 'Doppler', 'Synthetic Aperture', 'Hardware Design'],
  },
  {
    title: 'Financial Data Analysis Intern',
    company: 'Kiewit Engineering',
    period: 'June - July 2024',
    location: 'Lenexa, KS',
    description:
      'Updated cost reports and created custom scripts to efficiently organize company-wide billing spreadsheet of 500+ projects.',
    technologies: ['Data Analysis', 'Python', 'Excel', 'Financial Modeling'],
  },
  {
    title: 'Mechanical Design Intern',
    company: 'Kiewit Engineering',
    period: 'June - July 2023',
    location: 'Lenexa, KS',
    description:
      'Analyzed mechanical design models to create estimates of labor rates in Carbon Capture and Hydrogen projects. Created equipment models and Piping & Instrumentation diagrams for Kiewit\'s first green hydrogen plant.',
    technologies: ['CAD', 'Mechanical Design', 'P&ID', 'Project Management'],
  },
]

export default function Experience() {
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
        Experience
      </motion.h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-6 border-l-2 border-cursor-accent"
          >
            <div className="absolute -left-1.5 top-0 w-3 h-3 bg-cursor-accent rounded-full"></div>
            <div className="bg-cursor-bg rounded-lg p-4 border border-cursor-border hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div>
                  <h3 className="text-lg font-bold text-cursor-text">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-cursor-accent font-medium">
                    {exp.company}
                  </p>
                  {exp.location && (
                    <p className="text-xs text-cursor-textSecondary mt-0.5">
                      {exp.location}
                    </p>
                  )}
                </div>
                <span className="text-cursor-textSecondary text-xs font-medium mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <p className="text-sm text-cursor-textSecondary mb-3 leading-relaxed">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2.5 py-1 bg-cursor-bg border border-cursor-border text-cursor-text rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
