import React from 'react'
import { useState } from 'react'
import Navbar from './global/Navbar'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'

const Holder = ({ children }) => {

  const [showAbout, setShowAbout] = useState(true);
  const [showProjects, setShowProjects] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const toggleAbout = () => {
    setShowAbout(true);
    setShowProjects(false);
    setShowSkills(false);
    setShowContact(false);
  }

  const toggleProject = () => {
    setShowAbout(false);
    setShowProjects(true);
    setShowSkills(false);
    setShowContact(false);
  }

  const toggleSkills = () => {
    setShowAbout(false);
    setShowProjects(false);
    setShowSkills(true);
    setShowContact(false);
  }

  const toggleContact = () => {
    setShowAbout(false);
    setShowProjects(false);
    setShowSkills(false);
    setShowContact(true);
  }
  return (
<div className='bg-secondary justify-end lg:w-2/3 mr-1 lg:mt-10 ml-20 rounded-xl rounded-lg' style={{ maxWidth: "90%" }}>
      <div className=''>
      <div className='flex justify-end sticky top-0'>
      <Navbar
      onAboutClick={toggleAbout}
      onProjectClick={toggleProject}
      onSkillClick={toggleSkills}
      onContactClick={toggleContact}
      className='bg-accent'
      />
      </div>
      {showAbout && <About/> }
      {showProjects && <Projects/>}
      {showSkills && <Skills/>}
      {showContact && <Contact/>}
      </div>
      
    </div>
  )
}

export default Holder