import { Link } from "react-router-dom";
import CourseCard from "@/components/CourseCard/CourseCard";
import courses from "@/data/courses";
import "./Home.css";

function Home() {
  const featured = courses.slice(0, 3);

  return (
    <div className="home">
      <section className="home__hero">
        <div className="container home__hero-inner">
          <span className="home__eyebrow">CourseHub · Georgia</span>
          <h1 className="home__title">
            Learn and join events, all in one place
          </h1>
          <p className="home__subtitle">
            Courses in frontend, backend, design, and data — plus meetups and
            hackathons from the local developer community.
          </p>
          <div className="home__actions">
            <Link to="/courses" className="btn btn--primary">
              Browse all courses
            </Link>
            <Link to="/about" className="btn btn--secondary">
              About the platform
            </Link>
          </div>
        </div>
      </section>

      <section className="home__section container">
        <div className="home__section-head">
          <h2>Trending now</h2>
          <Link to="/courses" className="home__section-link">
            All courses →
          </Link>
        </div>
        <div className="home__grid">
          {featured.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
