'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutMe() {
  const [showAPCourses, setShowAPCourses] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex-shrink-0 relative w-56 md:w-64 rounded-lg overflow-hidden shadow-lg border-2 border-theme-accent bg-theme-surface self-stretch"
          >
            <Image
              src="/leenaheadshot.png"
              alt="Leena Dudi"
              fill
              className="object-cover"
              sizes="256px"
              onError={(e) => {
                // Fallback to initials if image fails
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent && !parent.querySelector('.initials-fallback')) {
                  const fallback = document.createElement('div');
                  fallback.className = 'initials-fallback w-full h-full bg-theme-accent flex items-center justify-center text-white text-2xl font-bold';
                  fallback.textContent = 'LD';
                  parent.appendChild(fallback);
                }
              }}
            />
          </motion.div>
          <div className="flex-1 space-y-3">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-bold text-theme-text"
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base text-theme-textSecondary leading-relaxed"
            >
              I'm passionate about advocating for girls in STEM and creating opportunities through robotics, mentorship, and outreach. I hope to work at the intersection of AI, computer science, and climate science to solve complex puzzles.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base text-theme-textSecondary leading-relaxed"
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
              className="pt-4"
            >
              <div>
                <h3 className="text-lg font-bold text-theme-text mb-3">Education</h3>
              <div className="space-y-3">
                <div className="bg-theme-surface rounded-lg p-4 border border-theme-border">
                  <p className="font-semibold text-theme-text text-base">
                    Massachusetts Institute of Technology
                  </p>
                  <p className="text-theme-textSecondary text-sm mt-1">
                    Bachelor of Science in AI & Decision Making (Course 6-4) + Business Analytics (Course 15-2)
                  </p>
                  <p className="text-sm text-theme-textSecondary mt-1">Expected: May 2029</p>
                </div>
                <div className="bg-theme-surface rounded-lg p-4 border border-theme-border">
                  <p className="font-semibold text-theme-text text-base">
                    Blue Valley West High School
                  </p>
                  <p className="text-theme-textSecondary text-sm mt-1">
                    GPA: 4.875 W / 4.000 UW | ACT: 36/36
                  </p>
                  <p className="text-sm text-theme-textSecondary mt-1">May 2025</p>

                  <div className="mt-3 space-y-2">
                    <div>
                      <p className="text-xs font-semibold text-theme-text mb-1">Leadership:</p>
                      <p className="text-xs text-theme-textSecondary">
                        BPA (Business Professionals of America), Computer Science Honors Society, Spanish National Honors Society, Relay for Life, SWENext (Society of Women Engineers), Girls In STEM
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-theme-text mb-1">Clubs:</p>
                      <p className="text-xs text-theme-textSecondary">
                        BPA, DECA, CSHS, Mu Alpha Theta, NEHS, SpanishNHS, Tri-M, SciNHS
                      </p>
                    </div>
                    <div>
                      <button
                        onClick={() => setShowAPCourses(!showAPCourses)}
                        className="flex items-center gap-2 text-xs font-semibold text-theme-accent hover:text-theme-accentHover transition-colors"
                      >
                        <span>AP Courses</span>
                        <svg
                          className={`w-3 h-3 transition-transform ${showAPCourses ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {showAPCourses && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-2 pl-4 border-l-2 border-theme-accent"
                        >
                          <p className="text-xs text-theme-textSecondary">
                            Biology (5/5), Calculus BC (5/5), Chemistry (4/5), Computer Science A (5/5), Computer Science Principles (5/5), English Language (5/5), Government (5/5), Human Geography (5/5), Macroeconomics, Microeconomics, Physics 1, Physics 2, Psychology, Spanish Language (5/5), Statistics (5/5), US History (5/5), World History (5/5)
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="mt-6 space-y-4">
        <div>
          <h3 className="text-lg font-bold text-theme-text mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-theme-surface border border-theme-border text-theme-text rounded-full text-sm font-medium">
                  Java
                </span>
                <span className="px-3 py-1.5 bg-theme-surface border border-theme-border text-theme-text rounded-full text-sm font-medium">
                  Python
                </span>
                <span className="px-3 py-1.5 bg-theme-surface border border-theme-border text-theme-text rounded-full text-sm font-medium">
                  SQL
                </span>
                <span className="px-3 py-1.5 bg-theme-surface border border-theme-border text-theme-text rounded-full text-sm font-medium">
                  Dart (Flutter)
                </span>
                <span className="px-3 py-1.5 bg-theme-surface border border-theme-border text-theme-text rounded-full text-sm font-medium">
                  C++
                </span>
                <span className="px-3 py-1.5 bg-theme-surface border border-theme-border text-theme-text rounded-full text-sm font-medium">
                  Machine Learning
                </span>
                <span className="px-3 py-1.5 bg-theme-surface border border-theme-border text-theme-text rounded-full text-sm font-medium">
                  Data Science
                </span>
                <span className="px-3 py-1.5 bg-theme-surface border border-theme-border text-theme-text rounded-full text-sm font-medium">
                  TensorFlow Lite
                </span>
                <span className="px-3 py-1.5 bg-theme-surface border border-theme-border text-theme-text rounded-full text-sm font-medium">
                  Google Earth Engine
                </span>
              </div>
        </div>
        <div>
          <h3 className="text-lg font-bold text-theme-text mb-3">Certifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-theme-surface rounded-lg p-4 border border-theme-border">
                  <p className="font-semibold text-theme-text text-sm">
                    Data Science for Good
                  </p>
                  <p className="text-theme-textSecondary text-xs mt-1">
                    Girls Who Code
                  </p>
                  <p className="text-xs text-theme-textSecondary mt-1">Issued Aug 2023</p>
                  <p className="text-xs text-theme-textSecondary mt-0.5">
                    Credential ID: c1742c73-3255-427f-8c8d-1d2815a3e814
                  </p>
                </div>
                <div className="bg-theme-surface rounded-lg p-4 border border-theme-border">
                  <p className="font-semibold text-theme-text text-sm">
                    IT Specialist: Java
                  </p>
                  <p className="text-theme-textSecondary text-xs mt-1">
                    Certiport - A Pearson VUE Business
                  </p>
                  <p className="text-xs text-theme-textSecondary mt-1">Issued Apr 2023</p>
                </div>
                <div className="bg-theme-surface rounded-lg p-4 border border-theme-border">
                  <p className="font-semibold text-theme-text text-sm">
                    IT Specialist: Databases
                  </p>
                  <p className="text-theme-textSecondary text-xs mt-1">
                    Certiport - A Pearson VUE Business
                  </p>
                  <p className="text-xs text-theme-textSecondary mt-1">Issued May 2022</p>
                </div>
              </div>
        </div>
      </div>
      </div>
    </motion.div>
  )
}
