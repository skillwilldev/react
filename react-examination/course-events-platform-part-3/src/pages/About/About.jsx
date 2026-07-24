import "./About.css";

const stats = [
  { label: "Active courses", value: "6" },
  { label: "Events per month", value: "2+" },
  { label: "Instructors", value: "6" },
];

function About() {
  return (
    <div className="about container">
      <div className="about__head">
        <h1>About the platform</h1>
        <p>
          CourseHub is a learning platform for managing courses and events —
          meetups, workshops, and hackathons run by the local developer
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
        <h2>How this project is built</h2>
        <p>
          This is a study project built in stages: first the base layout and
          navigation, then data fetching, filtering, and Redux Toolkit state
          management, and finally forms with validation and advanced React
          hooks.
        </p>
      </div>
    </div>
  );
}

export default About;
