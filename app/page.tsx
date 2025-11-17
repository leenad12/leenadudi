'use client'

import { useEffect, useState } from 'react'
import Navigation from '@/components/Navigation'
import AboutMe from '@/components/AboutMe'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Research from '@/components/Research'
import Hobbies from '@/components/Hobbies'
import Awards from '@/components/Awards'

export default function Home() {
  const [activeSection, setActiveSection] = useState('about')

  const sections = [
    { id: 'research', label: 'Research' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'awards', label: 'Awards' },
    { id: 'hobbies', label: 'Hobbies' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      // Check all sections including 'about'
      const allSections = [{ id: 'about' }, ...sections]

      for (const section of allSections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <main className="min-h-screen bg-theme-bg">
      <Navigation
        sections={sections}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <div className="pt-20">
        <section id="about">
          <AboutMe />
        </section>
        <section id="research">
          <Research />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="awards">
          <Awards />
        </section>
        <section id="hobbies">
          <Hobbies />
        </section>
      </div>
    </main>
  )
}
