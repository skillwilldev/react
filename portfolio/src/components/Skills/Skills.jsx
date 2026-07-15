import { skillGroups } from '@/data/skills';
import './Skills.css';

function LevelSquares({ level }) {
  return (
    <div className="skills__squares" aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className="skills__square"
          data-active={i < level}
        />
      ))}
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills__inner">
        <h2 className="section-title">
          <span className="section-title__hash">#</span> tech-stack
        </h2>

        <div className="skills__groups">
          {skillGroups.map((group) => (
            <div key={group.id} className="skills__group">
              <p className="skills__group-label">{group.label}</p>
              <ul className="skills__list">
                {group.skills.map((skill) => (
                  <li key={skill.id} className="skills__item">
                    <span className="skills__name">{skill.name}</span>
                    <LevelSquares level={skill.level} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
