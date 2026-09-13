import React from 'react'
import Reveal from '../Reveal/Reveal'

const skillGroups = [
  {
    title: 'Full-Stack Web Development',
    tag: 'WEB',
    skills: ['TypeScript', 'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'Supabase', 'Firebase', 'Cloudinary'],
  },
  {
    title: 'Game Development',
    tag: 'GAME',
    skills: ['Unity', 'C#', 'Blender', 'Maya', 'Mixamo', 'Photopea']
  },
]

const Skills = () => {
  return (
    <section id="Skills" className="relative overflow-hidden bg-[#12142B] px-6 py-16 text-white md:px-16 md:py-24">
      <div className="pointer-events-none absolute left-0 top-0 h-2 w-1/3 bg-[#FF2E63]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-2 w-1/2 bg-[#08D9D6]" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal className="mb-10 md:mb-14">
          <span className="inline-block rotate-[-2deg] bg-[#FF2E63] px-3 py-1 text-xs font-black uppercase tracking-widest text-white shadow-[3px_3px_0_#08D9D6]">
            What I do?
          </span>
          <h2 className="mt-5 font-black uppercase leading-none tracking-tight text-4xl md:text-6xl [-webkit-text-stroke:1px_#08D9D6] [font-family:'Anton',sans-serif]">
            Skills
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 150}>
              <article
              className="relative border-2 border-white/80 bg-[#0E0F26] p-6 md:p-8 shadow-[6px_6px_0_#08D9D6] transition-transform duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0_#FF2E63]"
              style={{ transform: `rotate(${index % 2 === 0 ? '-1' : '1'}deg)` }}
              >
              <span className="absolute -top-3 -right-3 rotate-[6deg] bg-[#08D9D6] px-2 py-1 text-[10px] font-black text-[#0E0F26] shadow-[3px_3px_0_#FF2E63]">
                {group.tag}
              </span>

              <h3 className="border-b-2 border-[#FF2E63] pb-3 text-xl md:text-2xl font-black uppercase tracking-wide">
                {group.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-[#08D9D6]/50 bg-[#12142B] px-3 py-1.5 text-xs md:text-sm font-bold tracking-wide text-[#C6C8F0] transition-colors duration-200 hover:border-[#08D9D6] hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills