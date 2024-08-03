import React from 'react'
import { EXPERIENCES } from '../constants'

const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className='text-center  text-4xl my-10'>Skills</h2>
        <div className='text-center text-xl font-serif'>
  <div className='flex flex-col items-start space-y-4 mx-auto max-w-3xl'>
    <p>Front-end Development: React, Next.js, Tailwind CSS, HTML, CSS, JavaScript</p>
    <p>Back-end Development: Node.js, Express.js, MongoDB</p>
    <p>Data Structures & Algorithms : Proficient in problem-solving and algorithm design</p>
    <p>Programming Languages: C, C++, JavaScript</p>
    <p>Tools & Technologies: Vite, Git, npm/yarn</p>
    <p>Other Skills: API Development, Responsive Design, RESTful Services</p>
  </div>
</div>

    </div>
  )
}

export default Experience
