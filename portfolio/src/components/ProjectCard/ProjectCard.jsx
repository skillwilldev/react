import './ProjectCard.css';

function ProjectCard({ project }) {
  const { name, description, tags, language, languageColor, githubUrl, liveUrl } = project;

  return (
    <article className="project-card">
      <div className="project-card__header">
        <h3 className="project-card__name">{name}</h3>
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="project-card__icon-link"
          aria-label={`Открыть репозиторий ${name} на GitHub`}
        >
          <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.074.55-.174.55-.386 0-.19-.007-.693-.01-1.36-2.226.484-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.727-.497.055-.487.055-.487.804.057 1.227.826 1.227.826.715 1.224 1.874.87 2.33.665.072-.517.28-.87.508-1.07-1.777-.202-3.644-.888-3.644-3.953 0-.873.312-1.587.823-2.147-.082-.202-.357-1.015.078-2.117 0 0 .672-.215 2.2.82a7.66 7.66 0 012.003-.27c.68.003 1.365.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.822 1.274.822 2.147 0 3.073-1.87 3.749-3.653 3.947.287.247.543.735.543 1.48 0 1.07-.01 1.933-.01 2.196 0 .214.144.464.55.385A8.001 8.001 0 0016 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
      </div>

      <p className="project-card__description">{description}</p>

      <ul className="project-card__tags">
        {tags.map((tag) => (
          <li key={tag} className="project-card__tag">
            #{tag}
          </li>
        ))}
      </ul>

      <div className="project-card__footer">
        <span className="project-card__language">
          <span className="project-card__language-dot" style={{ backgroundColor: languageColor }} />
          {language}
        </span>

        <div className="project-card__links">
          <a href={githubUrl} target="_blank" rel="noreferrer" className="project-card__link">
            Code
          </a>
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noreferrer" className="project-card__link">
              Live
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
