import "./About.css";

const stats = [
  { label: "Active Courses", value: "6" },
  { label: "Events per Month", value: "2+" },
  { label: "Instructors", value: "6" },
];

function About() {
  return (
    <div className="about container">
      <div className="about__head">
        <h1>About the Platform</h1>
        <p>
          CourseHub is an educational platform for managing courses and events:
          meetups, workshops, and hackathons for the local developer
          community in Georgia.
        </p>
      </div>

      <div className="about__stats">
        {stats.map((stat) => (
          <div className="about__stat" key={stat.label}>
            <span className="about__stat-value">{stat.value}</span>
            <span className="about__stat-label">{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="about__body">
        <h2>How the Project Is Built</h2>
        <p>
          This is an educational project built in stages: starting with the foundation
          and navigation, followed by data fetching, filtering, and state management
          via Redux Toolkit, and concluding with validated forms and advanced React hooks.
        </p>
      </div>
    </div>
  );
}

export default About;