import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "@/store/slices/favoritesSlice";
import "./CourseCard.css";

function CourseCard({ course }) {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state) =>
    state.favorites.items.some((item) => item.id === course.id)
  );

  const {
    id,
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

  const isEvent = type === "event";

  const handleFavoriteClick = (event) => {
    event.preventDefault();
    dispatch(toggleFavorite(course));
  };

  return (
    <article className="course-card">
      <Link to={`/courses/${id}`} className="course-card__image-wrap">
        <img
          className="course-card__image"
          src={image}
          alt={title}
          loading="lazy"
        />
        <span
          className={
            "course-card__badge" +
            (isEvent ? " course-card__badge--event" : "")
          }
        >
          {isEvent ? "Event" : "Course"}
        </span>

        <button
          type="button"
          className={
            "course-card__favorite" +
            (isFavorite ? " course-card__favorite--active" : "")
          }
          onClick={handleFavoriteClick}
          aria-label={
            isFavorite ? "Remove from favorites" : "Add to favorites"
          }
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 14.25l-.345.666-.002-.001-.006-.003-.018-.01a7.643 7.643 0 01-.31-.17 22.08 22.08 0 01-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.075 22.075 0 01-3.744 2.584l-.018.01-.006.003h-.002z" />
          </svg>
        </button>
      </Link>

      <div className="course-card__body">
        <div className="course-card__meta">
          <span className="course-card__category">{category}</span>
          <span className="course-card__dot">·</span>
          <span className="course-card__level">{level}</span>
        </div>

        <h3 className="course-card__title">
          <Link to={`/courses/${id}`}>{title}</Link>
        </h3>
        <p className="course-card__description">{description}</p>

        <div className="course-card__footer">
          <span className="course-card__duration">⏱ {duration}</span>
          <span className="course-card__price">
            {price === 0 ? "Free" : `${price} GEL`}
          </span>
        </div>

        <p className="course-card__instructor">Led by {instructor}</p>
      </div>
    </article>
  );
}

export default CourseCard;
