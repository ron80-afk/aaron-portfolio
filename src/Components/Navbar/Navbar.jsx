import React from 'react'
import { RiMenu2Line, RiCloseLine } from '@remixicon/react';

const navItems = ['Skills', 'Experience', 'Projects', 'Contact'];

const Navbar = () => {
  const [menu, openMenu] = React.useState(false);

  const handleNavigation = (event, item) => {
    event.preventDefault()
    const target = document.getElementById(item)
    if (!target) return

    target.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start',
    })
    target.classList.remove('section-focus')
    requestAnimationFrame(() => target.classList.add('section-focus'))
    window.setTimeout(() => target.classList.remove('section-focus'), 900)
    openMenu(false)
  }

  return (
    <nav className="sticky top-0 z-50 flex w-full animate-[navDrop_600ms_ease-out] flex-wrap justify-between bg-[#0E0F26]/90 px-6 pb-4 pt-6 text-white backdrop-blur-sm md:items-center md:px-16 md:pb-0">
      <a href="#top" onClick={(event) => handleNavigation(event, 'top')} className="font-black uppercase tracking-wide text-xl transition-transform duration-300 hover:scale-105 [-webkit-text-stroke:1px_#FF2E63] [font-family:'Anton',sans-serif]">
        myPortfolio<span className="text-[#08D9D6]">.</span>
      </a>

      <ul
        className={`
          absolute left-6 right-6 top-16 mt-4 flex flex-col gap-3 border-2 border-[#08D9D6]/40 bg-[#12142B] px-5 py-4
          md:static md:mt-0 md:flex-row md:gap-8 md:border-none md:bg-transparent md:p-0
          [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)] md:[clip-path:none]
          origin-top transform transition-all duration-300 ease-out
          ${menu
            ? 'opacity-100 scale-y-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-y-95 -translate-y-2 pointer-events-none md:opacity-100 md:scale-y-100 md:translate-y-0 md:pointer-events-auto'}
        `}
      >
        {navItems.map((item, i) => (
          <li key={item} className={`list-none ${menu ? 'animate-[navItemIn_400ms_ease-out_both]' : ''}`} style={{ animationDelay: `${i * 70}ms` }}>
            <a
              href={`#${item}`}
              className="group relative block font-bold uppercase text-sm tracking-wide transition-colors duration-300 hover:text-[#FF2E63]"
              onClick={(event) => handleNavigation(event, item)}
            >
              <span className="block py-1">{item}</span>
              <span className="block h-[2px] w-0 bg-[#08D9D6] transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>

      <button
        className="md:hidden absolute right-6 top-6 transition-transform duration-300"
        onClick={() => openMenu(!menu)}
        aria-label="Toggle menu"
        aria-expanded={menu}
      >
        <span className={`inline-block transition-all duration-300 ${menu ? 'rotate-180 scale-110' : 'rotate-0 scale-100'}`}>
          {menu ? <RiCloseLine size={28} /> : <RiMenu2Line size={28} />}
        </span>
      </button>
    </nav>
  )
}

export default Navbar