import './About.css';

const STATS = [
  { id: 'projects', value: '10+', label: 'projects' },
  { id: 'stack', value: '4', label: 'core technologies' },
  { id: 'langs', value: '3', label: 'languages used' },
];

function About() {
  return (
    <section id="about" className="about">
      <div className="about__inner">
        <h2 className="section-title">
          <span className="section-title__hash">#</span> about-me
        </h2>

        <div className="about__grid">
          <p className="about__text">
            I am training to be a frontend developer, taking structured courses
            on JavaScript, React, and TypeScript. I love breaking interfaces 
            down into their core parts—components, state, and data flows—and 
            putting them back together in a way that keeps the code maintainable 
            and scalable.
            <br />
            <br />
            Alongside my coursework, I build pet projects ranging from 
            Canvas-based games to full-stack applications with their own 
            backends. Every project is an opportunity to dive into something 
            new, whether it's WebAssembly, Socket.io, or GSAP animations.
          </p>

          <div className="about__stats">
            {STATS.map((stat) => (
              <div key={stat.id} className="about__stat-card">
                <span className="about__stat-value">{stat.value}</span>
                <span className="about__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;