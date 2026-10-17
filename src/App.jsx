import { useEffect, useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Cloud,
  Code2,
  Download,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Network,
  Server,
  ShieldCheck,
  Terminal,
  Wifi,
  X,
} from 'lucide-react'

const projectUrl = 'https://github.com/Barath-henz/Soc-dashboard'
const linkedInUrl = 'https://www.linkedin.com/in/barathai'
const emailAddress = 'barathannadurai4@gmail.com'
const demoUrl = 'https://soc-dashboard-4gsb.onrender.com/'

const skills = [
  {
    title: 'Networking',
    icon: Network,
    status: 'Building foundations',
    items: ['Networking fundamentals', 'TCP/IP, DNS & DHCP', 'Subnetting', 'Routing & switching', 'CCNA concepts · learning'],
  },
  {
    title: 'Operating systems',
    icon: Terminal,
    status: 'Familiar',
    items: ['Linux fundamentals', 'Windows fundamentals', 'Command-line troubleshooting', 'System administration basics'],
  },
  {
    title: 'DevOps & cloud',
    icon: Cloud,
    status: 'Learning',
    items: ['Git & GitHub', 'Docker fundamentals', 'AWS fundamentals · learning', 'CI/CD concepts', 'Jenkins · learning', 'Infrastructure automation'],
  },
]

const learning = [
  { icon: Terminal, title: 'Linux & system administration', detail: 'Building confidence with the command line, system basics, and troubleshooting.' },
  { icon: Network, title: 'Networking & CCNA concepts', detail: 'Strengthening my understanding of protocols, addressing, and network fundamentals.' },
  { icon: Cloud, title: 'AWS cloud fundamentals', detail: 'Exploring core cloud concepts and essential AWS services.' },
  { icon: Layers3, title: 'Docker & containerization', detail: 'Learning how containers package and run applications consistently.' },
  { icon: Code2, title: 'CI/CD & DevOps workflows', detail: 'Practicing version control, pipelines, and repeatable delivery workflows.' },
]

function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)
  const links = [
    ['About', '#about'],
    ['Skills', '#skills'],
    ['Project', '#projects'],
    ['Journey', '#learning'],
    ['Experience', '#experience'],
    ['Contact', '#contact'],
  ]

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Barath A home">
          <span className="brand-mark">B<span>.</span></span>
          <span>BARATH A</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <div id="primary-navigation" className={`nav-links${isOpen ? ' nav-links--open' : ''}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let&apos;s connect <ArrowUpRight size={15} /></a>
        </div>
      </nav>
    </header>
  )
}

function NetworkBackdrop() {
  return (
    <div className="network-backdrop" aria-hidden="true">
      <span className="network-line network-line--one" />
      <span className="network-line network-line--two" />
      <span className="network-line network-line--three" />
      <span className="network-node network-node--one" />
      <span className="network-node network-node--two" />
      <span className="network-node network-node--three" />
      <span className="network-node network-node--four" />
      <span className="network-node network-node--five" />
    </div>
  )
}

function Hero() {
  return (
    <section className="hero" id="home">
      <NetworkBackdrop />
      <div className="hero-grid container">
        <div className="hero-copy">
          <div className="availability"><span className="status-dot" /> OPEN TO ENTRY-LEVEL OPPORTUNITIES</div>
          <h1>Building My Future in <span>DevOps</span> &amp; Network Engineering</h1>
          <p className="hero-description">
            I&apos;m an aspiring DevOps and Network Engineer passionate about Linux, networking, cloud infrastructure,
            automation, and system reliability. I&apos;m continuously learning and building practical projects to
            develop my technical skills.
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href="#projects">View My Project <ArrowRight size={17} /></a>
            <a className="button button--secondary" href="#skills">Explore My Skills</a>
            <a className="button button--text" href="#contact">Contact Me <ArrowDown size={15} /></a>
            <a className="resume-link" href="/Barath-A-Resume.pdf" download="Barath-A-Resume.pdf">
              <Download size={15} /> Download Resume
            </a>
          </div>
          <div className="hero-meta">
            <span><span className="meta-dot" /> Fresher · Seeking first opportunity</span>
            <span className="meta-divider" />
            <span>DevOps <i>·</i> Networking <i>·</i> Cloud</span>
          </div>
        </div>
        <div className="hero-visual" aria-label="Profile placeholder and terminal illustration">
          <div className="visual-orbit visual-orbit--outer" />
          <div className="visual-orbit visual-orbit--inner" />
          <div className="profile-card">
            <div className="profile-topline"><span>PROFILE / 001</span><span className="profile-live"><i /> AVAILABLE</span></div>
            <div className="avatar-placeholder" aria-label="Profile photo">
              <span>BA</span>
              <img
                className="profile-photo"
                src="/barath.jpg"
                alt="Portrait of Barath A"
                onError={(event) => { event.currentTarget.hidden = true }}
              />
              <div className="avatar-spark avatar-spark--one" />
              <div className="avatar-spark avatar-spark--two" />
            </div>
            <p className="profile-name">Barath A</p>
            <p className="profile-role">Aspiring Engineer</p>
            <div className="profile-divider" />
            <div className="profile-detail"><Network size={14} /><span>Network engineering</span><Check size={14} /></div>
            <div className="profile-detail"><Server size={14} /><span>DevOps &amp; infrastructure</span><Check size={14} /></div>
          </div>
          <div className="terminal-card">
            <div className="terminal-bar"><span /><span /><span /><p>learning.log</p></div>
            <div className="terminal-body">
              <p><b>$</b> whoami</p>
              <p className="terminal-output">aspiring-engineer</p>
              <p><b>$</b> focus --current</p>
              <p className="terminal-output">linux · networks · cloud</p>
              <p className="terminal-cursor"><b>$</b> <span /></p>
            </div>
          </div>
          <div className="float-chip float-chip--cloud"><Cloud size={16} /> CLOUD</div>
          <div className="float-chip float-chip--network"><Wifi size={16} /> NETWORK</div>
        </div>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to About"><span /> SCROLL TO EXPLORE</a>
    </section>
  )
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <div className="about-aside">
          <span className="eyebrow">01 / A LITTLE ABOUT ME</span>
          <div className="about-motif"><div><Server size={27} /></div><span /><span /><span /></div>
          <p className="mono-note">curiosity → practice → progress</p>
        </div>
        <div className="about-content">
          <SectionHeading eyebrow="THE PERSON BEHIND THE TERMINAL" title={<>Curious by nature.<br /><span>Engineer in progress.</span></>} />
          <p className="about-lead">
            I&apos;m Barath, a fresher building my path toward DevOps and network engineering.
          </p>
          <p>
            I&apos;m interested in how systems connect, how infrastructure stays reliable, and how thoughtful
            automation can make technology work better. My learning spans Linux, networking, system
            administration, cloud technologies, and the fundamentals of DevOps.
          </p>
          <p>
            I&apos;m keen to learn, investigate technical issues, and get hands-on with new tools. I&apos;m looking
            for an entry-level role, internship, or trainee opportunity where I can contribute, ask good
            questions, and grow through practical experience.
          </p>
          <a className="inline-link" href="#contact">A good place to start is a conversation <ArrowRight size={16} /></a>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <SectionHeading
          eyebrow="02 / TECHNICAL TOOLKIT"
          title={<>Learning the building blocks<br /><span>of reliable systems.</span></>}
          description="An honest snapshot of the concepts and tools I’m exploring—always growing through practice."
        />
        <div className="skills-grid">
          {skills.map(({ title, icon: Icon, status, items }, index) => (
            <article className="skill-card" key={title}>
              <div className="skill-card-top">
                <div className="skill-icon"><Icon size={20} /></div>
                <span className={`skill-status${index === 1 ? ' skill-status--familiar' : ''}`}><i /> {status}</span>
              </div>
              <h3>{title}</h3>
              <ul>
                {items.map((item) => <li key={item}><span className="skill-bullet" />{item}</li>)}
              </ul>
              <span className="skill-index">0{index + 1}</span>
            </article>
          ))}
        </div>
        <div className="skills-note"><ShieldCheck size={17} /><span>Listed as learning where applicable. No proficiency scores—just a commitment to keep practicing.</span></div>
      </div>
    </section>
  )
}

function Project() {
  const technologies = ['Python', 'Flask', 'Flask-SocketIO', 'SQLite', 'HTML · CSS · JavaScript', 'Chart.js', 'Docker Compose']
  const features = ['Centralized security-event and log visibility', 'Real-time alert updates with Socket.IO', 'Dashboard visualizations and event monitoring']

  return (
    <section className="section project-section" id="projects">
      <div className="container">
        <SectionHeading
          eyebrow="03 / SELECTED PROJECT"
          title={<>One project. A lot to <span>learn from.</span></>}
          description="A practical project exploring security monitoring, log analysis, and infrastructure visibility."
        />
        <article className="project-card">
          <div className="project-visual">
            <div className="dashboard-window">
              <div className="dashboard-topbar"><div className="dashboard-brand"><ShieldCheck size={14} /> SENTINEL / SOC</div><span>MONITORING OVERVIEW</span><div className="dashboard-online"><i /> LIVE</div></div>
              <div className="dashboard-content">
                <div className="dashboard-sidebar"><span className="sidebar-active"><Layers3 size={14} /></span><span><Network size={14} /></span><span><Terminal size={14} /></span><span><Cloud size={14} /></span></div>
                <div className="dashboard-main">
                  <div className="dashboard-title"><div><small>SECURITY OPERATIONS</small><h4>Threat overview</h4></div><span className="dashboard-period">LAST 24 HOURS⌄</span></div>
                  <div className="dashboard-stats">
                    <div><small>EVENTS</small><strong>1,284</strong><span>monitored</span></div>
                    <div><small>ALERTS</small><strong className="stat-orange">08</strong><span>needs review</span></div>
                    <div><small>STATUS</small><strong className="stat-green">Active</strong><span>monitoring</span></div>
                  </div>
                  <div className="chart-panel"><div><small>EVENT ACTIVITY</small><small>EVENTS / HR</small></div><div className="chart-bars">{[32, 49, 38, 64, 46, 73, 52, 88, 66, 48, 76, 57, 96, 67, 81, 55, 72, 43, 61, 79, 52, 68, 39, 60].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div><div className="chart-axis"><span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>NOW</span></div></div>
                  <div className="event-row"><span className="event-pulse" /><span>AUTH EVENT</span><span>Multiple login attempts detected</span><time>just now</time></div>
                  <div className="event-row"><span className="event-pulse event-pulse--blue" /><span>SYSTEM</span><span>Log stream connected</span><time>2 min</time></div>
                </div>
              </div>
            </div>
            <div className="visual-caption"><span><i /> PROJECT PREVIEW</span><span>Illustrative dashboard preview</span></div>
          </div>
          <div className="project-details">
            <div className="project-label"><span>FEATURED PROJECT</span><span>01 / 01</span></div>
            <h3>SOC Monitoring<br />Dashboard</h3>
            <p className="project-description">
              A security monitoring dashboard designed to help visualize security events and monitor system logs
              through a centralized interface. The project demonstrates my interest in cybersecurity monitoring,
              log analysis, dashboards, and infrastructure visibility.
            </p>
            <h4>What it explores</h4>
            <ul className="feature-list">{features.map((feature) => <li key={feature}><Check size={15} />{feature}</li>)}</ul>
            <h4>Built with</h4>
            <div className="tech-list">{technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
            <div className="project-actions">
              <a className="button button--primary" href={projectUrl} target="_blank" rel="noreferrer">View Project <Github size={16} /></a>
              <a className="button button--secondary demo-link" href={demoUrl} target="_blank" rel="noreferrer">Live Demo <ArrowUpRight size={16} /></a>
            </div>
            <p className="demo-note">The hosted demo may take a moment to wake up.</p>
          </div>
        </article>
      </div>
    </section>
  )
}

function Learning() {
  return (
    <section className="section learning-section" id="learning">
      <div className="container learning-layout">
        <div className="learning-intro">
          <SectionHeading eyebrow="04 / ALWAYS IN PROGRESS" title={<>Currently <span>learning.</span></>} />
          <p>Technology keeps moving. These are the areas I’m actively working to understand, one practical step at a time.</p>
          <div className="learning-status"><span className="status-dot" /> LEARNING IS THE WORK</div>
        </div>
        <div className="learning-list">
          {learning.map(({ icon: Icon, title, detail }, index) => (
            <article className="learning-card" key={title}>
              <div className="learning-icon"><Icon size={18} /></div>
              <div><h3>{title}</h3><p>{detail}</p></div>
              <span className="learning-number">0{index + 1}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="container education-wrap">
        <div className="education-heading"><span className="eyebrow">05 / EDUCATION</span><h2>Building a strong<br /><span>technical foundation.</span></h2></div>
        <article className="education-card">
          <div className="education-icon"><GraduationCap size={22} /></div>
          <div><span className="education-label">DEGREE</span><h3>B.Tech in Artificial Intelligence and Data Science</h3><p>Excel Engineering College</p></div>
          <span className="education-marker" aria-hidden="true" />
        </article>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="container education-wrap">
        <div className="education-heading">
          <span className="eyebrow">06 / EXPERIENCE</span>
          <h2>Learning through<br /><span>real-world work.</span></h2>
        </div>
        <article className="education-card experience-card">
          <div className="education-icon"><BriefcaseBusiness size={22} /></div>
          <div>
            <span className="education-label">INTERNSHIP</span>
            <h3>Data Science Intern</h3>
            <p>Alo Info Tech · Nagercoil</p>
          </div>
          <span className="education-marker" aria-label="Completed internship" />
        </article>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <div className="contact-copy">
          <SectionHeading eyebrow="07 / GET IN TOUCH" title={<>Let&apos;s build something<br /><span>reliable together.</span></>} />
          <p>I’m open to entry-level opportunities, internships, and trainee roles in DevOps, networking, cloud support, system administration, and IT infrastructure.</p>
          <div className="contact-open"><span className="status-dot" /> OPEN TO THE RIGHT OPPORTUNITY</div>
          <div className="contact-socials">
            <a href={projectUrl} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={14} /></a>
            <a href={linkedInUrl} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} /></a>
            <a href={`mailto:${emailAddress}`}><Mail size={17} /> {emailAddress} <ArrowUpRight size={14} /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <a className="brand footer-brand" href="#home"><span className="brand-mark">B<span>.</span></span><span>BARATH A</span></a>
        <p>Aspiring DevOps Engineer <i>|</i> Network Engineer</p>
        <div className="footer-links">
          <a href={projectUrl} target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github size={17} /></a>
          <a href={linkedInUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin size={17} /></a>
          <a href={`mailto:${emailAddress}`} aria-label={`Email Barath at ${emailAddress}`}><Mail size={17} /></a>
        </div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Barath A. All rights reserved.</span><a href="#home">BACK TO TOP ↑</a></div>
    </footer>
  )
}

export default function App() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const targets = document.querySelectorAll(
      '.hero-copy, .hero-visual, .about-aside, .about-content, .skills-section .section-heading, .skill-card, .project-section .section-heading, .project-card, .learning-intro, .learning-card, .education-heading, .education-card, .experience-section .education-heading, .experience-card, .contact-copy',
    )

    if (!('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('is-visible'))
      return undefined
    }

    document.documentElement.classList.add('motion-ready')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        } else {
          entry.target.classList.remove('is-visible')
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -55px 0px' })

    targets.forEach((target) => {
      target.classList.add('reveal-item')
      observer.observe(target)
    })

    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('motion-ready')
    }
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Project />
        <Learning />
        <Education />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
