import React, { useState } from 'react'
import { RiInformationLine } from '@remixicon/react'
import Reveal from '../Reveal/Reveal'

const professionalProjects = [
  {
    title: 'Espiron Product Database',
    description: 'Product Database for Technical Engineers',
    link: 'https://espiron-product-database-demo.vercel.app/',
  },
  {
    title: 'Taskflow',
    description: 'Sales Activity Planner',
    link: 'https://taskflow-demo-v2-two.vercel.app/',
  },
  {
    title: 'EngiConnect (Procurement Portal only)',
    description: 'Logistics and Approval of the projects',
    link: 'https://engineer-ticketing-v2-demo.vercel.app/',
  },
  {
    title: 'Ecodesk',
    description: 'CSR platform',
    link: 'https://ecodesk-demo-pink.vercel.app',
  },
]

const testUsers = [
  ['csr@test.com', 'Test CSR'],
  ['sales_agent@test.com', 'Sales Agent'],
  ['sales_head@test.com', 'Sales Head'],
  ['sales_manager@test.com', 'Sales Manager'],
  ['it@test.com', 'IT'],
  ['procurement@test.com', 'Procurement'],
  ['engineer@test.com', 'Technical Engineer'],
]

// School & Internship Projects — Game Development
const schoolProjects = [
  {
    title: 'Chairman Days',
    description: 'Chairman Days: A 3D Slice of Life Game Promoting the 17 Sustainable Development Goals is a simulation game where players take on the role of a Chairman managing a village. Each quest is designed to help the community grow while raising awareness about a specific Sustainable Development Goal (SDG).',
    link: 'https://thegizmonatics.itch.io/chairman-days',
  },
  {
    title: 'Mahiwaga',
    description: 'MAHIWAGA: A Narrative-Driven Hack-and-Slash Adventure PC Game Promoting Environmental Awareness Through Combating Deforestation. In MAHIWAGA, you play as Anica, a wealthy girl who finds herself in a mysterious forest that is slowly dying. With the help of Yluna, she learns to fight dangerous creatures, explore hidden places, and uncover the truth behind the destruction of Mahiwaga.',
    link: 'https://thegizmonatics.itch.io/mahiwagabygizmonatics',
  },
]

const Projects = () => {
  const [openProject, setOpenProject] = useState(null)

  return (
    <section id="Projects" className="relative overflow-hidden bg-[#0E0F26] px-6 py-16 text-white md:px-16 md:py-24">
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:16px_16px]" />
      
      <div className="relative mx-auto max-w-6xl">
        {/* Section Header */}
        <Reveal className="mb-14 md:mb-20">
          <span className="inline-block rotate-[-2deg] bg-[#FF2E63] px-3 py-1 text-xs font-black uppercase tracking-widest text-white shadow-[3px_3px_0_#08D9D6]">
            What I've Built
          </span>
          <h2 className="mt-5 font-black uppercase leading-none tracking-tight text-4xl md:text-6xl [-webkit-text-stroke:1px_#08D9D6] [font-family:'Anton',sans-serif]">
            Projects
          </h2>
        </Reveal>



        {/* ===== PROFESSIONAL PROJECTS ===== */}
        <Reveal id="professional" className="mb-20" delay={150}>
          <h3 className="mb-6 text-2xl font-black uppercase tracking-wide text-[#FF2E63]">
            Professional Work
          </h3>
          
          {/* ✅ DISCLAIMER */}
          <p className="mb-8 text-sm text-[#C6C8F0] italic border-l-2 border-[#FF2E63] pl-4">
            * All projects displayed here are shared with full consent and permission from the developers of Disruptive Solutions Inc.
            I respect and uphold the <strong>Data Privacy Act of 2012</strong> — all portals shown are for demonstration purposes only and contain no proprietary source code.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
                {professionalProjects.map((project, index) => (
                <div
                    key={project.title}
                    className="group relative z-0 hover:z-30 focus-within:z-30 border-2 border-white/80 bg-[#12142B] p-5 md:p-7 shadow-[6px_6px_0_#08D9D6] transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0_#FF2E63]"
                    style={{ transform: `rotate(${index % 2 === 0 ? '-0.5' : '0.5'}deg)` }}
                >
                <div className="absolute right-4 top-4">
                  <button
                    type="button"
                    aria-label={`Show ${project.title} test link and users`}
                    aria-expanded={openProject === project.title}
                    onClick={() => setOpenProject(openProject === project.title ? null : project.title)}
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-[#08D9D6] text-[#08D9D6] opacity-0 transition-opacity hover:bg-[#08D9D6] hover:text-[#12142B] group-hover:opacity-100 focus:opacity-100"
                  >
                    <RiInformationLine size={17} />
                  </button>
                </div>
                <div className={`overflow-hidden transition-[max-height,margin] duration-300 ${openProject === project.title ? 'mt-4 max-h-[40rem]' : 'mt-0 max-h-0'}`}>
                  <div className="border-2 border-[#08D9D6] bg-[#0E0F26] p-4 text-xs text-white shadow-[4px_4px_0_#FF2E63]">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-all font-bold text-[#08D9D6] hover:underline"
                    >
                      {project.link}
                    </a>
                    <p className="mt-3 font-bold uppercase tracking-wide text-[#FF2E63]">Test Users</p>
                    <div className="mt-2 space-y-2.5 text-[#C6C8F0]">
                    {testUsers.map(([email, userName]) => (
                        <div key={email} className="border-l-2 border-[#08D9D6]/40 pl-2">
                        <p className="break-all font-semibold text-white">{email}</p>
                        <p className="text-[11px] text-[#C6C8F0]">
                            {userName} <span className="text-[#08D9D6]">·</span> password: <span className="font-mono">test</span>
                        </p>
                        </div>
                    ))}
                    </div>
                  </div>
                </div>
                <h4 className="pr-10 text-xl font-black uppercase tracking-wide group-hover:text-[#08D9D6] transition-colors">
                  {project.title}
                </h4>
                <p className="mt-3 text-sm text-[#C6C8F0]">{project.description}</p>
                <div className="mt-4 flex gap-4 text-sm font-bold">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#08D9D6] hover:underline"
                  >
                    View Link →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ===== SCHOOL & INTERNSHIPS ===== */}
        <Reveal id="school" delay={250}>
          <h3 className="mb-6 text-2xl font-black uppercase tracking-wide text-[#08D9D6]">
            School & Internships
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {schoolProjects.map((project, index) => (
              <div
                key={project.title}
                className="group relative border-2 border-white/80 bg-[#12142B] p-5 md:p-7 shadow-[6px_6px_0_#FF2E63] transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0_#08D9D6]"
                style={{ transform: `rotate(${index % 2 === 0 ? '0.5' : '-0.5'}deg)` }}
              >
                <h4 className="text-xl font-black uppercase tracking-wide group-hover:text-[#FF2E63] transition-colors">
                  {project.title}
                </h4>
                <p className="mt-3 text-sm text-[#C6C8F0]">{project.description}</p>
                <div className="mt-4 text-sm font-bold">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#08D9D6] hover:underline"
                  >
                    View Link →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Projects