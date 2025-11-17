'use client'

import { motion } from 'framer-motion'

export default function AboutMe() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12"
    >
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex-shrink-0"
        >
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-6xl font-bold shadow-lg">
            LD
          </div>
        </motion.div>
        <div className="flex-1 space-y-6">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold text-slate-800 dark:text-white"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
          >
            I'm a student at MIT pursuing a Bachelor of Science in AI & Decision Making (Course 6-4)
            and Business Analytics (Course 15-2), expected to graduate in May 2029. My passion lies
            at the intersection of artificial intelligence, data science, and real-world applications.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
          >
            I've had the privilege of working with organizations like NASA, MIT Lincoln Laboratory,
            and conducting research at MIT Sports Lab and Urban Risk Lab. As a U.S. Presidential Scholar,
            National Merit Scholar, and former White House Million Girls Moonshot Initiative National
            Mentor, I'm committed to using technology to solve complex problems and make a positive impact.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="pt-4 space-y-4"
          >
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">Education</h3>
              <div className="space-y-3">
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
                  <p className="font-semibold text-slate-800 dark:text-white">
                    Massachusetts Institute of Technology
                  </p>
                  <p className="text-slate-600 dark:text-slate-300">
                    Bachelor of Science in AI & Decision Making (Course 6-4) + Business Analytics (Course 15-2)
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Expected: May 2029</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
                  <p className="font-semibold text-slate-800 dark:text-white">
                    Blue Valley West High School
                  </p>
                  <p className="text-slate-600 dark:text-slate-300">
                    GPA: 4.8571/4.0000 | ACT: 36/36 | 5/5 on 11 AP Exams
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">May 2025</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                  Java
                </span>
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                  Python
                </span>
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                  SQL
                </span>
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                  Dart (Flutter)
                </span>
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                  C++
                </span>
                <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                  Machine Learning
                </span>
                <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                  Data Science
                </span>
                <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                  TensorFlow Lite
                </span>
                <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                  Google Earth Engine
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
