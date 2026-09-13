// src/Components/Contacts/Contacts.jsx
import React, { useState } from 'react'
import { RiChat3Fill, RiGithubFill, RiLinkedinFill, RiMailFill } from '@remixicon/react'
import Reveal from '../Reveal/Reveal'

const Contacts = () => {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    setStatus('sending')

    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) throw new Error('Unable to send message')

      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="Contact" className="relative overflow-hidden bg-[#0E0F26] px-6 py-16 text-white md:px-16 md:py-24">
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:16px_16px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section Header */}
        <Reveal className="mb-14 md:mb-20">
          <span className="inline-block rotate-[-2deg] bg-[#FF2E63] px-3 py-1 text-xs font-black uppercase tracking-widest text-white shadow-[3px_3px_0_#08D9D6]">
            Get In Touch
          </span>
          <h2 className="mt-5 font-black uppercase leading-none tracking-tight text-4xl md:text-6xl [-webkit-text-stroke:1px_#08D9D6] [font-family:'Anton',sans-serif]">
            Contact Me
          </h2>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Contact Info */}
          <Reveal className="space-y-6" delay={100}>
            <p className="text-lg text-[#C6C8F0]">
              I’m open to full‑time roles, freelance projects, or collaboration opportunities. Feel free to reach out!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 border-l-2 border-[#FF2E63] pl-4 py-2">
                <RiMailFill className="text-[#08D9D6]" size={22} aria-hidden="true" />
                <span className="text-[#08D9D6] font-bold">Email:</span>
                <a href="mailto:aaronespiritu65@gmail.com" className="text-[#C6C8F0] hover:text-[#08D9D6] underline">
                  aaronespiritu65@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 border-l-2 border-[#FF2E63] pl-4 py-2">
                <RiLinkedinFill className="text-[#08D9D6]" size={22} aria-hidden="true" />
                <span className="text-[#08D9D6] font-bold">LinkedIn:</span>
                <a href="https://www.linkedin.com/in/aaron-miguel-espiritu-9a42b733a/" target="_blank" rel="noopener noreferrer" className="text-[#C6C8F0] hover:text-[#08D9D6] underline">
                  linkedin.com/in/aaron-miguel-espiritu-9a42b733a
                </a>
              </div>
              <div className="flex items-center gap-3 border-l-2 border-[#08D9D6] pl-4 py-2">
                <RiGithubFill className="text-[#FF2E63]" size={22} aria-hidden="true" />
                <span className="text-[#FF2E63] font-bold">GitHub:</span>
                <a href="https://github.com/ron80-afk" target="_blank" rel="noopener noreferrer" className="text-[#C6C8F0] hover:text-[#FF2E63] underline">
                  github.com/ron80-afk
                </a>
              </div>
              <div className="flex items-center gap-3 border-l-2 border-[#08D9D6] pl-4 py-2">
                <RiChat3Fill className="text-[#FF2E63]" size={22} aria-hidden="true" />
                <span className="text-[#FF2E63] font-bold">Viber:</span>
                <a href="viber://chat?number=%2B639692329481" className="text-[#C6C8F0] hover:text-[#FF2E63] underline">
                  +63 969 232 9481
                </a>
              </div>
            </div>
          </Reveal>

          {/* Contact Form */}
          <Reveal delay={250}>
            <form onSubmit={handleSubmit} className="space-y-4 border-2 border-white/80 bg-[#12142B] p-6 shadow-[6px_6px_0_#FF2E63]">
            <div>
              <label className="block text-sm font-bold text-[#08D9D6] mb-1">Full Name</label>
              <input
                name="full_name"
                type="text"
                placeholder="Your Name"
                className="w-full rounded-none border-2 border-white/40 bg-[#0E0F26] px-4 py-2 text-white focus:border-[#08D9D6] focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-[#FF2E63] mb-1">Email Address</label>
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-none border-2 border-white/40 bg-[#0E0F26] px-4 py-2 text-white focus:border-[#FF2E63] focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-[#08D9D6] mb-1">Message</label>
              <textarea
                name="message"
                rows={5}
                placeholder="Write your message here..."
                className="w-full rounded-none border-2 border-white/40 bg-[#0E0F26] px-4 py-2 text-white focus:border-[#08D9D6] focus:outline-none resize-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-[#FF2E63] px-6 py-3 font-black uppercase tracking-widest text-white shadow-[4px_4px_0_#08D9D6] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#08D9D6] transition-all"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && <p className="text-sm font-bold text-[#08D9D6]">Message sent successfully.</p>}
            {status === 'error' && <p className="text-sm font-bold text-[#FF2E63]">Unable to send your message. Please try again.</p>}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Contacts