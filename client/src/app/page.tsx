import Contact from '@/components/ChildSection/Contact'
import Home from '@/components/ChildSection/Home'
import Project from '@/components/ChildSection/Project'
import Skills from '@/components/ChildSection/Skills'
import React from 'react'

const page = () => {
  return (
    <div className='space-y-10'>
      <Home/>
      <Project/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default page