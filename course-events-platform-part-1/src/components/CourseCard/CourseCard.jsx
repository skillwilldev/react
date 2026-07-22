import "./CourseCard.css";

function CourseCard({ course }) {
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

  const isEvent = type === "event";

  return (
    <article className="course-card">
      <div className="course-card__image-wrap">
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
      </div>

      <div className="course-card__body">
        <div className="course-card__meta">
          <span className="course-card__category">{category}</span>
          <span className="course-card__dot">·</span>
          <span className="course-card__level">{level}</span>
        </div>

        <h3 className="course-card__title">{title}</h3>
        <p className="course-card__description">{description}</p>

        <div className="course-card__footer">
          <span className="course-card__duration">⏱ {duration}</span>
          <span className="course-card__price">
            {price === 0 ? "Free" : `${price} ₾`}
          </span>
        </div>

        <p className="course-card__instructor">Instructor: {instructor}</p>
      </div>
    </article>
  );
}

export default CourseCard;