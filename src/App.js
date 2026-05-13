import React from 'react';
import { Mail, Phone, FileText, MapPin } from 'lucide-react';

const projects = [
  {
    title: 'CoalShield',
    image: '/coalshield.png',
    github: 'https://github.com/sONaLISRIvaStAvAA/COALSHIELD',
    desc: 'Smart safety jacket designed for coal miners with real-time environmental and physiological monitoring for hazard detection and emergency response.',
    tech: ['Raspberry Pi', 'IoT', 'Sensors', 'PuTTY'],
  },
  {
    title: 'SENTRY-X',
    image: '/sentryx.png',
    github: 'https://github.com/sONaLISRIvaStAvAA/SENTRY-X',
    desc: 'Embedded face verification device designed for secure access control and real-time authentication.',
    tech: ['Arduino', 'Embedded C++', 'Security'],
  },
  {
    title: 'AirBling',
    image: '/airbling.png',
    github: 'https://github.com/sONaLISRIvaStAvAA/PINGPONG-GAME',
    desc: 'Interactive 2-player Arduino ping pong reaction game focused on fast-paced gameplay and hardware interaction.',
    tech: ['Arduino', 'Embedded C'],
  },
  {
    title: 'EV Charging UI',
    image: '/ev.png',
    github: 'https://github.com/sONaLISRIvaStAvAA/EV-Charging-Booking',
    desc: 'EV charging slot booking UI concept focused on intuitive user experience and modern interaction design.',
    tech: ['Frontend', 'UI/UX'],
  },
  {
    title: 'deli2go Redesign',
    image: '/deli2go.png',
    github: 'https://github.com/sONaLISRIvaStAvAA/A-deli2go-website-',
    desc: 'Website redesign concept focused on warm visual storytelling and intuitive ordering flow.',
    tech: ['UI Design', 'Frontend'],
  },
];

const skills = {
  embedded: [
    'Arduino',
    'Raspberry Pi',
    'Sensor Interfacing',
    'PLC Programming',
    'UART / I2C',
    'Serial Communication',
    'IoT Prototyping',
  ],
  programming: ['C', 'C++', 'PLC Programming'],
  tools: [
    'Arduino IDE',
    'VS Code',
    'PuTTY',
    'MATLAB',
    'Simulink',
    'TIA Portal',
    'Siemens PLC',
    'KUKA Sim',
    'RoboAnalyzer',
    'GitHub',
    'Tinkercad',
  ],
};

export default function SonaliPortfolio() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#120b08_0%,#1a100d_45%,#0d0908_100%)] text-amber-100 overflow-x-hidden font-mono">
      <div
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#f59e0b 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-amber-900/40 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-3xl font-serif">Sonali.</h1>

          <div className="hidden md:flex gap-8 text-sm tracking-wider">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-amber-700 px-5 py-2 rounded-xl flex gap-2 items-center hover:bg-amber-800/20 transition"
          >
            <FileText size={16} />
            Resume
          </a>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-amber-300 italic mb-4">hi, i’m ✨</p>

          <h1 className="text-6xl md:text-8xl font-serif leading-none mb-6">
            Sonali
            <br />
            Srivastava
          </h1>

          <p className="text-2xl mb-3">
            Electronics & Instrumentation Engineering Student
          </p>

          <p className="text-amber-300 text-2xl italic mb-8">
            Engineering Beyond the Classroom
          </p>

          <p className="text-lg leading-8 text-amber-50/90 max-w-xl">
            From embedded systems to IoT and automation, I build engineering
            solutions that turn ideas into working products.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="rounded-3xl border border-amber-700/40 p-3 bg-amber-950/20 shadow-2xl shadow-amber-900/20">
            <img
              src="/profile.png.png"
              alt="Sonali"
              className="w-[420px] h-[520px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-6 py-20">
        <div className="rounded-3xl border border-amber-800/30 bg-amber-950/20 p-12">
          <h2 className="text-5xl font-serif mb-8">About Me</h2>

          <p className="text-lg leading-9 max-w-3xl">
            I’m an Electronics & Instrumentation Engineering student who likes
            building things that actually work. Most of my work revolves around
            embedded systems, IoT, and automation—combining hardware and software
            to create practical solutions for real problems.
          </p>

          <p className="text-3xl italic text-amber-300 mt-10">
            designing. building. debugging. repeating.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {[
              'Embedded systems built from idea to implementation',
              'Hardware + software working together',
              'Automation projects with practical purpose',
              'Real-world engineering, one build at a time',
            ].map((item) => (
              <div
                key={item}
                className="border border-amber-800/30 rounded-2xl p-5 bg-black/20"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-6xl font-serif mb-12">Project Inventory</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-amber-800/30 p-6 bg-amber-950/20 hover:-translate-y-2 transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-44 w-full object-cover rounded-2xl mb-5"
              />

              <h3 className="text-3xl font-serif mb-3">{project.title}</h3>

              <p className="leading-7 text-amber-50/85">{project.desc}</p>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full border border-amber-700 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-5 px-4 py-2 border border-amber-700 rounded-xl hover:bg-amber-800/20 transition"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-6xl font-serif mb-12">Skill Tree</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, values]) => (
            <div
              key={category}
              className="rounded-3xl border border-amber-800/30 p-8 bg-amber-950/20"
            >
              <h3 className="text-3xl font-serif capitalize mb-6">
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {values.map((value) => (
                  <span
                    key={value}
                    className="px-4 py-2 border border-amber-700 rounded-full"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="experience"
        className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-8"
      >
        <div className="rounded-3xl border border-amber-800/30 p-8 bg-amber-950/20">
          <h3 className="text-4xl font-serif mb-6">Leadership</h3>

          <ul className="space-y-4 text-lg">
            <li>Core Member — Team Samarthya</li>
            <li>Engineer’s Day Event Coordinator</li>
            <li>Circuit-o-Geek Contributor</li>
            <li>Mayukh Technical Event Participation</li>
            <li>Photon 3.0 Technical Magazine Contribution</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-amber-800/30 p-8 bg-amber-950/20">
          <h3 className="text-4xl font-serif mb-6">Education</h3>

          <p className="text-2xl font-serif">
            B.Tech — Electronics & Instrumentation Engineering
          </p>

          <p className="mt-3 text-lg">Banasthali Vidyapith</p>
          <p className="mt-4">2023 — Present | CGPA: 7.73</p>
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
        <div className="rounded-3xl border border-amber-800/30 p-12 bg-amber-950/20 text-center">
          <h2 className="text-6xl font-serif mb-6">
            Let’s build something amazing.
          </h2>

          <p className="text-2xl italic text-amber-300 mb-12">
            Built with caffeine, curiosity, and a lot of debugging.
          </p>

          <div className="grid md:grid-cols-4 gap-5 text-left">
            <div className="p-5 border rounded-2xl border-amber-800/30 flex gap-3 items-center">
              <Mail /> sonali200530@gmail.com
            </div>

            <div className="p-5 border rounded-2xl border-amber-800/30 flex gap-3 items-center">
              <Phone /> +91 8058833750
            </div>

            <a
              href="https://github.com/sONaLISRIvaStAvAA"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 border rounded-2xl border-amber-800/30 flex gap-3 items-center hover:bg-amber-800/10 transition"
            >
              💻 GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/sonali-srivastavaa30/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 border rounded-2xl border-amber-800/30 flex gap-3 items-center hover:bg-amber-800/10 transition"
            >
              🔗 LinkedIn
            </a>
          </div>

          <p className="mt-10 flex justify-center gap-2 items-center">
            <MapPin size={18} /> India
          </p>
        </div>
      </section>
    </div>
  );
}