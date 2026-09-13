import React from 'react'
import Reveal from '../Reveal/Reveal'

const professionalProjects = [ // Add your professional projects here
  {
    description: 'Developed an internal product database portal from scratch for engineers to manage product and supplier catalogs. Also added a feature enabling engineers to review and respond directly to custom product requests from sales agents, with responses integrated directly into sales quotations.',
  },
  {
    description: 'Help developed the ticket endorsement and workflow management feature within a customer service platform, letting CSR and Sales coordinate on inquiries, with automated response/handling time computations and customer database search and filtering.',
  },
  {
    description: 'Help developed the custom product request feature within the Sales Activity Planner, letting sales agents request custom products directly on the internal product database portal for engineers.',
  },
]

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
        <Reveal id="professional" className="relative z-20 mb-20" delay={150}>
          <h3 className="mb-6 text-2xl font-black uppercase tracking-wide text-[#FF2E63]">
            Professional Work
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
                {professionalProjects.map((project, index) => (
                <div
                    key={project.description}
                    className={`group relative z-0 border-2 border-white/80 bg-[#12142B] p-5 md:p-7 shadow-[6px_6px_0_#08D9D6] transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0_#FF2E63] ${index === 2 ? 'md:col-span-2 md:mx-auto md:w-1/2' : ''}`}
                    style={{ transform: `rotate(${index % 2 === 0 ? '-0.5' : '0.5'}deg)` }}
                >
                <p className="text-sm text-[#C6C8F0]">{project.description}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ===== SCHOOL & INTERNSHIPS ===== */}
        <Reveal id="school" className="relative z-10" delay={250}>
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