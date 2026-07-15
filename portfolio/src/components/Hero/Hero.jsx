import Button from '../Button/Button';
import './Hero.css';

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__inner">
        <div className="hero__text">
          <p className="hero__eyebrow">front-end developer</p>
          <h1 className="hero__title">
            Hi, I'm <span className="hero__name">Melik</span>.
            <br />
            I build interfaces with React.
          </h1>
          <p className="hero__subtitle">
            I am learning to build thoughtful interfaces, focusing on everything 
            from component architecture to animations and accessibility. Below 
            is a showcase of my work.
          </p>
          <div className="hero__cta">
            <Button href="#projects" variant="primary">
              View Projects
            </Button>
            <Button href="#contact" variant="secondary">
              Get in Touch
            </Button>
          </div>
        </div>

        <div className="hero__terminal" aria-hidden="true">
          <div className="hero__terminal-bar">
            <span className="hero__dot hero__dot--red" />
            <span className="hero__dot hero__dot--yellow" />
            <span className="hero__dot hero__dot--green" />
            <span className="hero__terminal-title">about-me.js</span>
          </div>
          <pre className="hero__terminal-body">
            <code>
              <span className="tok-kw">const</span> <span className="tok-var">developer</span> = {'{'}
              {'\n'}  name: <span className="tok-str">'Melik'</span>,
              {'\n'}  role: <span className="tok-str">'Frontend Developer'</span>,
              {'\n'}  stack: [<span className="tok-str">'React'</span>, <span className="tok-str">'TypeScript'</span>, <span className="tok-str">'Vite'</span>],
              {'\n'}  location: <span className="tok-str">'Georgia'</span>,
              {'\n'}  learning: <span className="tok-kw">true</span>,
              {'\n'}
              {'}'}
              <span className="hero__cursor">▌</span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}

export default Hero;