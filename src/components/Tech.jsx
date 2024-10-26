import React from 'react'
import { useState } from 'react'


// import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { skills } from "../constants";


const Tech = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      <div className='container mx-auto px-4'>
      <h2 className="text-3xl font-bold text-center text-white mb-16">My Skills</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-8 justify-items-center">
        {skills.map((skill) => (
            <div
              key={skill.name}
              className="relative group"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="w-16 h-16 bg-gray-800 rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:rotate-12">
                <img
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  width={64}
                  height={64}
                  className="p-2"
                />
              </div>
              {hoveredSkill === skill.name && (
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                  {skill.name}
                </div>
              )}
            </div>
          ))}
          </div>
          </div>
    </div>
  )
}

export default SectionWrapper(Tech, "");