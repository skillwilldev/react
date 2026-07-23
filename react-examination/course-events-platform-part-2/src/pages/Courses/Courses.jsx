import { useState, useEffect, useMemo } from "react";
import CourseCard from "../../components/CourseCard/CourseCard";
import { getCourses } from "../../data/courses";
import "./Courses.css";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    let isMounted = true;

    getCourses().then((data) => {
      if (isMounted) {
        setCourses(data);
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  const categories = useMemo(() => {
    const unique = new Set(courses.map((course) => course.category));
    return ["All", ...unique];
  }, [courses]);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory =
        activeCategory === "All" || course.category === activeCategory;
      const matchesSearch = course.title
        .toLowerCase()
        .includes(searchTerm.trim().toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [courses, searchTerm, activeCategory]);

  return (
    <div className="courses container">
      <div className="courses__head">
        <h1>Courses & Events</h1>
        <p>
          Browse the full list of courses and events on the platform. Search
          by title or filter by category below.
        </p>
      </div>

      <div className="courses__controls">
        <input
          type="text"
          className="courses__search"
          placeholder="Search courses…"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          aria-label="Search courses"
        />

        <div className="courses__filters">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                "courses__filter" +
                (activeCategory === category
                  ? " courses__filter--active"
                  : "")
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {isLoading ? (
        <div className="courses__status">Loading courses…</div>
      ) : filteredCourses.length === 0 ? (
        <div className="courses__status">
          No courses match your search. Try a different keyword or category.
        </div>
      ) : (
        <div className="courses__grid">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Courses;
