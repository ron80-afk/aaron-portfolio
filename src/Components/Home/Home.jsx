import React from 'react'
import { RiChat3Fill, RiGithubFill, RiLinkedinFill, RiMailFill } from '@remixicon/react'
import Reveal from '../Reveal/Reveal'

const Home = () => {
  return (
    <section id="top" className="relative w-full overflow-hidden bg-[#0E0F26] text-white">
      {/* halftone texture, classic manga screentone */}
      <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[length:16px_16px]" />

      {/* diagonal accent slab */}
      <div className="pointer-events-none absolute inset-0 [clip-path:polygon(55%_0,100%_0,100%_100%,70%_100%)] bg-gradient-to-br from-[#FF2E63]/20 to-[#08D9D6]/10" />

      <div className="relative flex w-full flex-col-reverse md:flex-row justify-center items-center gap-y-10 gap-x-8 md:gap-x-20 px-6 md:px-16 py-14 md:py-24">

        {/* Text block */}
        <Reveal className="md:w-2/5 text-center md:text-left" delay={100}>
          <span className="inline-block rotate-[-2deg] bg-[#08D9D6] text-[#0E0F26] text-xs md:text-sm font-black tracking-widest px-3 py-1 shadow-[3px_3px_0_#FF2E63]">
            HOWDY! I'M
          </span>

          <h1 className="mt-4 font-black uppercase leading-[0.95] tracking-tight text-4xl md:text-6xl [-webkit-text-stroke:1.5px_#FF2E63] [font-family:'Anton',sans-serif]">
            Aaron Miguel<br className="hidden md:block" /> R. Espiritu
          </h1>

          <p className="mt-5 text-sm md:text-xl text-[#C6C8F0] tracking-tight max-w-md mx-auto md:mx-0">
            A Professional Full-Stack Web Developer and a Self-Taught Game Developer.
          </p>


          <div className="mt-6 flex justify-center gap-4 md:justify-start">
            <a
              href="https://www.linkedin.com/in/aaron-miguel-espiritu-9a42b733a/"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Aaron's LinkedIn profile"
              title="LinkedIn"
              className="text-[#08D9D6] transition-transform duration-300 hover:-translate-y-1 hover:text-white"
            >
              <RiLinkedinFill size={30} aria-hidden="true" />
            </a>
            <a
              href="viber://chat?number=%2B639692329481"
              aria-label="Message Aaron on Viber"
              title="Viber"
              className="text-[#08D9D6] transition-transform duration-300 hover:-translate-y-1 hover:text-white"
            >
              <RiChat3Fill size={30} aria-hidden="true" />
            </a>
            <a
              href="mailto:aaronespiritu65@gmail.com"
              aria-label="Email Aaron"
              title="Email"
              className="text-[#08D9D6] transition-transform duration-300 hover:-translate-y-1 hover:text-white"
            >
              <RiMailFill size={30} aria-hidden="true" />
            </a>
            <a
              href="https://github.com/ron80-afk"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Aaron's GitHub profile"
              title="GitHub"
              className="text-[#08D9D6] transition-transform duration-300 hover:-translate-y-1 hover:text-white"
            >
              <RiGithubFill size={30} aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        {/* Photo block */}
        <Reveal className="relative w-40 md:w-72 flex justify-center" delay={250}>
          {/* speed-line burst */}
          <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full scale-150 animate-[spin_24s_linear_infinite] opacity-70">
            {Array.from({ length: 16 }).map((_, i) => (
              <line
                key={i}
                x1="100" y1="100" x2="100" y2="0"
                stroke={i % 2 === 0 ? '#FF2E63' : '#08D9D6'}
                strokeWidth="2"
                transform={`rotate(${i * 22.5} 100 100)`}
                opacity="0.5"
              />
            ))}
          </svg>

          {/* manga panel frame */}
          <div className="relative rotate-[-3deg] border-4 border-white bg-[#0E0F26] p-1.5 shadow-[8px_8px_0_#08D9D6]">
            <img
              className="w-40 h-40 md:w-64 md:h-64 object-cover"
              src="/profile.jpg"
              alt="Aaron's Profile"
            />

          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Home