'use client'

import { motion } from 'framer-motion'

interface Award {
  title: string
  issuer: string
  date: string
  description: string
  associatedWith?: string
  highlights?: string[]
}

const awards: Award[] = [
  {
    title: 'U.S. Presidential Scholar',
    issuer: 'U.S. Department of Education',
    date: 'Sep 2025',
    description:
      'One of 161 outstanding American high school graduates who have demonstrated outstanding academic achievement, artistic excellence, technical expertise, leadership, citizenship, service, and contribution to school and community.',
  },
  {
    title: 'National Youth Science Camp Kansas Delegate',
    issuer: 'National Youth Science Academy',
    date: 'Jul 2025',
    description: 'Selected as Kansas delegate to attend the National Youth Science Camp.',
  },
  {
    title: 'National Merit Scholar',
    issuer: 'National Merit Scholarship Corporation',
    date: 'Mar 2025',
    associatedWith: 'Blue Valley West High School',
    description: 'Recognized for exceptional academic achievement and potential for success in rigorous college studies.',
  },
  {
    title: 'Kansas Governor\'s Scholar',
    issuer: 'Kansas Department of Education',
    date: 'Jan 2025',
    associatedWith: 'Blue Valley West High School',
    description: 'Awarded to top academic 1% of Kansas high school seniors.',
  },
  {
    title: 'AP Scholar with Distinction',
    issuer: 'College Board',
    date: 'Jun 2024',
    associatedWith: 'Blue Valley West High School',
    description: 'Earned 5/5 on 11 AP Exams, demonstrating exceptional achievement in college-level coursework.',
  },
  {
    title: 'FIRST® Dean\'s List International Finalist Award',
    issuer: 'FIRST®',
    date: 'Mar 2024',
    description:
      'The highest individual honor in high school robotics, the Dean\'s List recognizes those with exceptional contributions to the success of their team and the surrounding community through the fields of robotics and STEM. Among over 77,000 candidates, 100 nominated students (0.13%) get awarded as Dean\'s List Finalists at the FIRST Robotics World Championship.',
  },
  {
    title: 'Disney Dreamers Academy \'24',
    issuer: 'Disney',
    date: 'Jan 2024',
    description:
      '1 of 100 students chosen nationwide from over 10,000 (1%) to attend the Disney Dreamers Academy. Attended a 4-day workshop and summit dedicated to leadership, entrepreneurship, and teamwork.',
  },
  {
    title: 'Letter of Commendation from Vice President Kamala Harris & KS Senator Jerry Moran',
    issuer: 'White House Space Council, Intel Foundation, the Geena Davis Institute on Gender in Media, STEM Next Opportunity Fund',
    date: 'Jun 2023',
    description:
      'Selected nationally as a member of the Million Girls Moonshot Flight Crew, sponsored by the Intel Foundation, the Geena Davis Institute on Gender in Media. Working with the US Department of Education and the White House National Space Council to encourage girls\' engagement in STEM fields. "Through your advocacy and your outreach, you are helping to build a STEM workforce that reflects the diversity of this country. This work will drive innovation and empower generations of future STEM leaders." - Kamala Harris, Vice President',
  },
  {
    title: 'BPA National Awards',
    issuer: 'Business Professionals of America',
    date: 'Apr 2023',
    highlights: [
      'BPA Nationals SQL Database Fundamentals 6th Place (2023)',
      'BPA Nationals Presentation Management Team 4th Place (2022)',
    ],
    description: 'Multiple national awards in Business Professionals of America competitions.',
  },
  {
    title: 'International Awards in Robotics',
    issuer: 'FIRST®',
    date: '2022-2024',
    highlights: [
      '2024 World Championships 3rd Place Innovate Award',
      '2024 MOKS Winning Alliance Captain',
      '2023 CRI (Chicago Robotics Invitational) International Bronze Medallist',
      '2022 World Championship Top-20',
      '2022 MOKS Winning Alliance',
      '2023 MOKS CONNECT Award Winner',
      '2x Regional Champion',
      '2x Regional INSPIRE Award Winner',
    ],
    description: 'Multiple international and regional awards in FIRST Robotics competitions.',
  },
]

export default function Awards() {
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
        Honors & Awards
      </motion.h2>
      <div className="space-y-3">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-cursor-bg rounded-lg p-4 border-l-4 border-cursor-accent border border-cursor-border hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-cursor-text mb-1.5">
                  {award.title}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 text-xs">
                  <p className="text-cursor-accent font-medium">
                    {award.issuer}
                  </p>
                  <span className="text-cursor-textSecondary">
                    {award.date}
                  </span>
                  {award.associatedWith && (
                    <span className="text-cursor-textSecondary italic">
                      • {award.associatedWith}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <p className="text-sm text-cursor-textSecondary mb-2 leading-relaxed">
              {award.description}
            </p>
            {award.highlights && award.highlights.length > 0 && (
              <div className="mt-3 pt-3 border-t border-cursor-border">
                <ul className="space-y-1.5">
                  {award.highlights.map((highlight, highlightIndex) => (
                    <li
                      key={highlightIndex}
                      className="text-xs text-cursor-textSecondary flex items-start"
                    >
                      <span className="text-cursor-accent mr-1.5 font-bold">
                        •
                      </span>
                      <span>{highlight}</span>
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
