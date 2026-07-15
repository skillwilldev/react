import { useMemo, useState } from 'react';
import { projects } from '@/data/projects';
import ProjectCard from '../ProjectCard/ProjectCard';
import './ProjectsSection.css';

const ALL_FILTER = 'all';

function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState(ALL_FILTER);

  const filters = useMemo(() => {
    const unique = new Set(projects.map((p) => p.language));
    return [ALL_FILTER, ...unique];
  }, []);

  const visibleProjects = useMemo(() => {
    const filtered =
      activeFilter === ALL_FILTER ?
        projects :
        projects.filter((p) => p.language === activeFilter);

    return [...filtered].sort((a, b) => {
      return a.priority - b.priority;
    })
    // if (activeFilter === ALL_FILTER) return projects;
    // return projects.filter((p) => p.language === activeFilter).sort((a, b) => {
    //   return a.featured - b.featured
    // });
  }, [activeFilter]);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-section__inner">
        <h2 className="section-title">
          <span className="section-title__hash">#</span> projects
        </h2>

        <div className="projects-section__filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`projects-section__filter ${activeFilter === filter ? 'is-active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter === ALL_FILTER ? 'all' : filter}
            </button>
          ))}
        </div>

        <div className="projects-section__grid">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
