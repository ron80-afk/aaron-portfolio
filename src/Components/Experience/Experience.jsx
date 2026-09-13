import React, { useEffect, useRef, useState } from 'react'

// Helper: Format date as "MMM YYYY"
const formatDate = (date) => {
  if (!date) return 'Present'
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

// ✅ FIXED: Properly handles null endDate (uses TODAY)
const calcDuration = (startDate, endDate) => {
  const start = new Date(startDate)
  // If endDate is null → use TODAY
  const end = endDate ? new Date(endDate) : new Date()
  
  let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
  const years = Math.floor(months / 12)
  const mos = months % 12
  
  if (years > 0 && mos > 0) return `${years} yr ${mos} mos`
  if (years > 0) return `${years} yr`
  return `${months} mos`
}

// ✅ RAW DATES — Dec 2025 = month 11 ✅
const experiences = [
  {
    role: 'Full-Stack Developer',
    company: 'Ecoshift Corporation',
    type: 'Full-time',
    startDate: new Date(2025, 11, 1), // ✅ DEC 1, 2025 (month=11!)
    endDate: null, // PRESENT
    location: 'Mandaluyong, National Capital Region, Philippines · On-site',
    tag: 'CURRENT',
  },
  {
    role: 'Game Dev Intern',
    company: 'FEU Tech Innovation Center',
    type: 'Internship',
    startDate: new Date(2025, 4, 1),  // ✅ MAY 1, 2025
    endDate: new Date(2025, 7, 31),   // ✅ AUG 31, 2025
    location: 'Manila, National Capital Region, Philippines · Hybrid',
    tag: 'CLEARED',
  },
]

const Experience = () => {
  const [visible, setVisible] = useState([])
  const refs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index)
          setVisible((prev) => entry.isIntersecting
            ? (prev.includes(index) ? prev : [...prev, index])
            : prev.filter((item) => item !== index)
          )
        })
      },
      { threshold: 0.3 }
    )
    refs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="Experience" className="relative overflow-hidden bg-[#0E0F26] px-6 py-16 text-white md:px-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:16px_16px]" />
      <div className="relative mx-auto max-w-4xl">
        <div className="mb-14 md:mb-20">
          <span className="inline-block rotate-[-2deg] bg-[#08D9D6] px-3 py-1 text-xs font-black uppercase tracking-widest text-[#0E0F26] shadow-[3px_3px_0_#FF2E63]">
            The Journey So Far
          </span>
          <h2 className="mt-5 font-black uppercase leading-none tracking-tight text-4xl md:text-6xl [-webkit-text-stroke:1px_#FF2E63] [font-family:'Anton',sans-serif]">
            Experience
          </h2>
        </div>
        <div className="relative pl-10 md:pl-14">
          {/* the path */}
          <div className="absolute left-[11px] top-2 bottom-2 w-[3px] md:left-[15px] bg-gradient-to-b from-[#FF2E63] via-[#08D9D6] to-[#08D9D6]/20" />
          <div className="flex flex-col gap-14 md:gap-20">
            {experiences.map((exp, index) => {
              const isVisible = visible.includes(index)
              const period = `${formatDate(exp.startDate)} - ${formatDate(exp.endDate)}`
              const duration = calcDuration(exp.startDate, exp.endDate)

              return (
                <div
                  key={exp.role}
                  ref={(el) => (refs.current[index] = el)}
                  data-index={index}
                  className={`relative transition-all duration-700 ease-out ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                  }`}
                >
                  {/* checkpoint node */}
                  <div
                    className={`absolute -left-10 top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white md:-left-14 md:h-8 md:w-8 transition-all duration-500 ${
                      isVisible ? 'scale-100' : 'scale-0'
                    }`}
                    style={{ backgroundColor: index % 2 === 0 ? '#FF2E63' : '#08D9D6', transitionDelay: '150ms' }}
                  >
                    {index === 0 && (
                      <span className="absolute h-full w-full rounded-full bg-[#FF2E63] opacity-60 animate-ping" />
                    )}
                  </div>
                  <div
                    className="relative border-2 border-white/80 bg-[#12142B] p-5 md:p-7 shadow-[6px_6px_0_#08D9D6]"
                    style={{ transform: `rotate(${index % 2 === 0 ? '-1' : '1'}deg)` }}
                  >
                    <span className="absolute -top-3 -right-3 rotate-[6deg] bg-[#FF2E63] px-2 py-1 text-[10px] font-black shadow-[3px_3px_0_#08D9D6]">
                      {exp.tag}
                    </span>
                    <h3 className="text-lg md:text-2xl font-black uppercase tracking-wide">{exp.role}</h3>
                    <p className="mt-1 text-sm md:text-base font-bold text-[#08D9D6]">
                      {exp.company} · {exp.type}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs md:text-sm text-[#C6C8F0]">
                      <span className="font-bold">{period}</span>
                      <span className="h-1 w-1 rounded-full bg-[#C6C8F0]/50" />
                      <span>{duration}</span>
                    </div>
                    <p className="mt-2 text-xs md:text-sm text-[#8B8DBE]">{exp.location}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience