import CourseCard from "../../components/CourseCard/CourseCard";
import courses from "../../data/courses";
import "./Courses.css";

function Courses() {
  return (
    <div className="courses container">
      <div className="courses__head">
        <h1>Courses and Events</h1>
        <p>
          Full list of courses and events on the platform. Search and category
          filtering will be added in the next phase.
        </p>
      </div>

      <div className="courses__grid">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default Courses;