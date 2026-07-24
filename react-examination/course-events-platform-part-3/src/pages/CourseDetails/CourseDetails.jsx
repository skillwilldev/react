import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "@/store/slices/favoritesSlice";
import courses from "@/data/courses";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import "./CourseDetails.css";

function CourseDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [customCourses] = useLocalStorage("customCourses", []);

  const allCourses = [...courses, ...customCourses];
  const course = allCourses.find((item) => item.id === Number(id));

  const isFavorite = useSelector((state) =>
    course
      ? state.favorites.items.some((item) => item.id === course.id)
      : false
  );

  if (!course) {
    return (
      <div className="course-details container">
        <p className="course-details__not-found">
          This course could not be found.
        </p>
        <Link to="/courses" className="btn btn--secondary">
          ← Back to all courses
        </Link>
      </div>
    );
  }

  const {
    title,
    category,
    type,
    level,
    duration,
    price,
    instructor,
    image,
    description,
  } = course;

  return (
    <div className="course-details container">
      <Link to="/courses" className="course-details__back">
        ← Back to all courses
      </Link>

      <div className="course-details__layout">
        <div className="course-details__image-wrap">
          <img src={image} alt={title} className="course-details__image" />
          <span
            className={
              "course-details__badge" +
              (type === "event" ? " course-details__badge--event" : "")
            }
          >
            {type === "event" ? "Event" : "Course"}
          </span>
        </div>

        <div className="course-details__info">
          <div className="course-details__meta">
            <span>{category}</span>
            <span className="course-details__dot">·</span>
            <span>{level}</span>
          </div>

          <h1 className="course-details__title">{title}</h1>
          <p className="course-details__description">{description}</p>

          <dl className="course-details__facts">
            <div className="course-details__fact">
              <dt>Duration</dt>
              <dd>{duration}</dd>
            </div>
            <div className="course-details__fact">
              <dt>Price</dt>
              <dd>{price === 0 ? "Free" : `${price} GEL`}</dd>
            </div>
            <div className="course-details__fact">
              <dt>Instructor</dt>
              <dd>{instructor}</dd>
            </div>
          </dl>

          <button
            type="button"
            className={
              "btn" +
              (isFavorite ? " btn--danger" : " btn--primary")
            }
            onClick={() => dispatch(toggleFavorite(course))}
          >
            {isFavorite ? "★ Remove from favorites" : "☆ Add to favorites"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
