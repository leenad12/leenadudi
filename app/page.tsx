'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import AboutMe from '@/components/AboutMe'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Research from '@/components/Research'
import Hobbies from '@/components/Hobbies'
import Awards from '@/components/Awards'

export default function Home() {
  const [activeTab, setActiveTab] = useState('about')

  const tabs = [
    { id: 'about', label: 'About Me' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'research', label: 'Research' },
    { id: 'awards', label: 'Awards' },
    { id: 'hobbies', label: 'Hobbies' },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <AboutMe />
      case 'experience':
        return <Experience />
      case 'projects':
        return <Projects />
      case 'research':
        return <Research />
      case 'awards':
        return <Awards />
      case 'hobbies':
        return <Hobbies />
      default:
        return <AboutMe />
    }
  }

  return (
    <main className="min-h-screen bg-cursor-bg" style={{ zoom: 0.8 }}>
      <div className="container mx-auto px-3 py-4 max-w-7xl">
        <Navigation
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <div className="mt-4 animate-fade-in">{renderContent()}</div>
      </div>
    </main>
  )
}
