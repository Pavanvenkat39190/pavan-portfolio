import React from "react";
import ReactDOM from "react-dom/client";
import { ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2, BrainCircuit, Server, Sparkles } from "lucide-react";
import "./styles.css";

const github = "https://github.com/pavanvenkat39190";
const linkedin = "https://www.linkedin.com/in/bollikonda-pavan-venkat-goud-592b3b293/";
const email = "mailto:pavanvenkat39190@gmail.com";

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const nav = ["work", "about", "skills", "roles", "contact"];

  return (
    <div className="app">
      <div className="noise" />
      <header className="nav-wrap">
        <nav className="nav">
          <a className="brand" href="#top">PAVAN<span>.</span></a>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {nav.map((item) => (
              <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>
                {item}
              </a>
            ))}
          </div>

          <a className="nav-cta" href={email}>
            Let's talk <ArrowUpRight size={16} />
          </a>

          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-copy">
            <div className="eyebrow"><span className="dot" /> OPEN TO OPPORTUNITIES</div>
            <p className="hero-kicker">BOLLIKONDA PAVAN VENKAT GOUD</p>
            <h1>
              FULL-STACK
              <span>DEVELOPER.</span>
            </h1>
            <p className="hero-text">
              I build modern web applications, intelligent systems and immersive
              experiences — from AI-powered engineering tools to VR projects.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#work">View my work <ArrowUpRight size={17} /></a>
              <a className="btn ghost" href={email}>Let's connect <Mail size={17} /></a>
            </div>
            <div className="socials">
              <a href={github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
              <a href={linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
              <a href={email}><Mail size={18} /> Email</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orb orb-a" />
            <div className="orb orb-b" />
            <div className="grid-card">
              <div className="card-top">
                <span>PAVAN / SYSTEM</span>
                <span className="live"><i /> ONLINE</span>
              </div>
              <div className="system-title">BUILDING<br /><span>REAL SYSTEMS.</span></div>
              <div className="mini-stats">
                <div><b>AI</b><span>INTELLIGENCE</span></div>
                <div><b>WEB</b><span>FULL-STACK</span></div>
                <div><b>VR</b><span>IMMERSIVE</span></div>
              </div>
              <div className="signal">
                <span>BUILD</span><span>LEARN</span><span>SHIP</span>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="section work">
          <div className="section-head">
            <div><span className="section-no">01</span><h2>Selected work</h2></div>
            <p>Selected builds, plus one project currently moving toward a patent.</p>
          </div>

          <article className="current-project">
            <div className="project-index">02 / CURRENTLY BUILDING</div>
            <div className="current-grid">
              <div>
                <p className="project-label">INTERDISCIPLINARY MAJOR PROJECT · 4TH YEAR · 2026</p>
                <h3>AI-Driven System<br />for Borewell Child Safety</h3>
                <p className="project-desc">
                  An interdisciplinary engineering project focused on developing
                  an AI-driven safety system for borewell-related child emergencies.
                </p>
                <div className="tags">
                  <span>AI / SOFTWARE</span><span>ELECTRONICS</span><span>SYSTEM DESIGN</span><span>REAL-WORLD SAFETY</span>
                </div>
              </div>
              <div className="patent-panel">
                <div className="patent-icon">AI</div>
                <span className="status-badge">DEVELOPMENT</span>
                <strong>PATENT IN PROGRESS</strong>
                <small>Technical details intentionally kept private while the project is under development.</small>
              </div>
            </div>
          </article>

          <article className="featured-project">
            <div className="project-index">01 / FEATURED PROJECT</div>
            <div className="project-grid">
              <div>
                <p className="project-label">SMART DIGITAL TWIN</p>
                <h3>Predictive maintenance for a 2-DOF robotic arm.</h3>
                <p className="project-desc">
                  An intelligent digital twin combining reduced-order modelling,
                  real-time simulation and AI-based anomaly detection to estimate
                  system health and support predictive maintenance.
                </p>
                <div className="tags">
                  {["React", "FastAPI", "Node.js", "Python", "LSTM", "Random Forest"].map(t => <span key={t}>{t}</span>)}
                </div>
                <div className="metrics">
                  <div><strong>94%</strong><span>Anomaly detection accuracy</span></div>
                  <div><strong>&lt;8%</strong><span>Prediction error</span></div>
                </div>
              </div>
              <div className="project-visual">
                <div className="twin-ring ring-1" />
                <div className="twin-ring ring-2" />
                <div className="twin-core"><BrainCircuit size={38} /></div>
                <div className="axis axis-x" />
                <div className="axis axis-y" />
                <div className="axis axis-z" />
                <div className="telemetry"><span>HEALTH</span><b>94.2%</b><small>● NORMAL</small></div>
              </div>
            </div>
          </article>

          <div className="project-placeholder">
            <div><span className="section-no">03</span><h3>More projects will be added.</h3></div>
            <p>Additional builds, demos and case studies will join this section as they are polished.</p>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="section-head">
            <div><span className="section-no">02</span><h2>About me</h2></div>
          </div>
          <div className="about-grid">
            <p className="big-copy">
              I’m a B.Tech student and Full-Stack Developer who enjoys building
              things that sit between <strong>software, AI and real-world systems.</strong>
            </p>
            <div className="about-side">
              <p>
                My work ranges from full-stack applications and APIs to intelligent
                systems for simulation, prediction and anomaly detection. I care
                about clean interfaces, useful products and learning by building.
              </p>
              <a className="text-link" href={linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={16}/></a>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills">
          <div className="section-head">
            <div><span className="section-no">03</span><h2>Tech stack</h2></div>
            <p>Tools I use to turn ideas into working software.</p>
          </div>
          <div className="skill-grid">
            <Skill icon={<Code2 />} title="Languages" items="C · Python · JavaScript · Java" />
            <Skill icon={<Sparkles />} title="Frontend" items="React · HTML · CSS · Tailwind CSS" />
            <Skill icon={<Server />} title="Backend" items="Node.js · FastAPI · REST APIs" />
            <Skill icon={<BrainCircuit />} title="AI / ML" items="Machine Learning · LSTM · Random Forest · Anomaly Detection" />
          </div>
        </section>

        <section id="roles" className="section experience">
          <div className="section-head">
            <div><span className="section-no">04</span><h2>Leadership & roles</h2></div>
            <p>College roles where I helped plan, build and lead technical initiatives.</p>
          </div>

           <div className="timeline">

  <article className="role-card">
    <div className="role-year">01ST YEAR — 02ND YEAR</div>

    <div className="role-main">
      <span className="role-org">
        INNOVATION & INCUBATION CLUB · ROBOTICS & AUTOMATION LAB
      </span>

      <h3>Lab Member</h3>

      <p>
        Worked as a member of the Robotics & Automation Lab under the
        Innovation & Incubation Club, gaining early hands-on exposure
        to robotics, automation and engineering projects.
      </p>
    </div>

    <span className="role-num">01</span>
  </article>


  <article className="role-card">
    <div className="role-year">02ND YEAR — MID 03RD YEAR</div>

    <div className="role-main">
      <span className="role-org">
        GOOGLE DEVELOPER STUDENT CLUB
      </span>

      <h3>Event Planner</h3>

      <p>
        Worked with organizers from other college GDSC clubs to coordinate
        technical events and promote them across student developer communities.
      </p>
    </div>

    <span className="role-num">02</span>
  </article>


  <article className="role-card">
    <div className="role-year">03RD YEAR — 04TH YEAR</div>

    <div className="role-main">
      <span className="role-org">
        AR / VR LAB
      </span>

      <h3>Tech Lead</h3>

      <p>
        Led VR-focused technical activities using Unity, built VR projects,
        conducted a 3-day AR/VR workshop, and mentored juniors through
        hands-on development and experimentation.
      </p>
    </div>

    <span className="role-num">03</span>
  </article>

</div>

          <div className="credentials-grid">
            <article className="credential-card">
              <span className="section-no">05A</span>
              <span className="credential-type">INTERNSHIP · 1ST YEAR</span>
              <h2>MSME Internship</h2>
              <p>
                Early industry exposure through an internship completed during my first year,
                building practical experience alongside my engineering studies.
              </p>
              <span className="coming">INTERNSHIP</span>
            </article>

            <article className="credential-card">
              <span className="section-no">05B</span>
              <span className="credential-type">ONLINE TRAINING · 2ND YEAR</span>
              <h2>Google Training</h2>
              <p>
                Completed an online training program from Google during my second year,
                expanding my practical understanding of technology and development.
              </p>
              <span className="coming">TRAINING</span>
            </article>
          </div>

          <div className="achievement-strip">
            <div>
              <span className="section-no">06</span>
              <h2>Certifications & learning</h2>
            </div>
            <div className="achievement-list">
              <span>56 GOOGLE CLOUD SKILL BADGES</span>
              <span>AWS ACADEMY GRADUATE · CLOUD FOUNDATIONS</span>
              <span>ISRO · 2 WEEKS WORKSHOP</span>
            </div>
            <a
  className="text-link"
  href="https://www.credly.com/users/bollikonda-pavan-venkat-goud"
  target="_blank"
  rel="noreferrer"
>
  View my Credly badges <ArrowUpRight size={16} />
</a>
          </div>

          <div className="future-card">
            <span className="section-no">07</span>
            <h2>More achievements</h2>
            <p>
              IEEE publication, detailed certification names and additional milestones
              will be added once the final details are ready.
            </p>
            <span className="coming">NEXT UPDATE</span>
          </div>
 
        </section>

        <section id="contact" className="section contact">
          <div className="contact-card">
            <span className="eyebrow">LET'S BUILD SOMETHING</span>
            <h2>Have an idea?<br /><span>Let's make it real.</span></h2>
            <a className="btn primary large" href={email}>Start a conversation <ArrowUpRight size={18}/></a>
            <div className="contact-links">
              <a href={email}>pavanvenkat39190@gmail.com</a>
              <span>Hyderabad, India</span>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()}  PAVAN </span>
        <span>Built with React · V5</span>
      </footer>
    </div>
  );
}

function Skill({ icon, title, items }) {
  return (
    <div className="skill-card">
      <div className="skill-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{items}</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);