import { useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import PricePreview from "@/components/PricePreview/PricePreview";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import "./AddCourse.css";

const categoryOptions = ["Frontend", "Backend", "Design", "Data"];
const levelOptions = ["Beginner", "Intermediate", "Advanced", "All levels"];

const validationSchema = Yup.object({
  title: Yup.string()
    .trim()
    .min(3, "Title must be at least 3 characters")
    .required("Title is required"),
  category: Yup.string().required("Please choose a category"),
  type: Yup.string().oneOf(["course", "event"]).required("Please choose a type"),
  level: Yup.string().required("Please choose a level"),
  duration: Yup.string().trim().required("Duration is required"),
  price: Yup.number()
    .typeError("Price must be a number")
    .min(0, "Price cannot be negative")
    .required("Price is required"),
  instructor: Yup.string().trim().required("Instructor name is required"),
  description: Yup.string()
    .trim()
    .min(10, "Description must be at least 10 characters")
    .required("Description is required"),
});

function AddCourse() {
  const navigate = useNavigate();
  const titleInputRef = useRef(null);
  const [, setCustomCourses] = useLocalStorage("customCourses", []);

  useEffect(() => {
    titleInputRef.current?.focus();
  }, []);

  const formik = useFormik({
    initialValues: {
      title: "",
      category: categoryOptions[0],
      type: "course",
      level: levelOptions[0],
      duration: "",
      price: 0,
      instructor: "",
      description: "",
      image: "",
    },
    validationSchema,
    onSubmit: (values) => {
      const newCourse = {
        ...values,
        id: Date.now(),
        price: Number(values.price),
        image:
          values.image ||
          "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
      };

      setCustomCourses((previous) => [...previous, newCourse]);
      navigate("/courses");
    },
  });

  const formatPrice = useCallback((value) => {
    const numericValue = Number(value);
    if (!numericValue || numericValue <= 0) return "Free";
    return `${numericValue} GEL`;
  }, []);

  return (
    <div className="add-course container">
      <div className="add-course__head">
        <h1>Add a new course or event</h1>
        <p>Fill in the details below — it will appear in the course list.</p>
      </div>

      <form className="add-course__form" onSubmit={formik.handleSubmit} noValidate>
        <div className="add-course__field">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            ref={titleInputRef}
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.title && formik.errors.title && (
            <span className="add-course__error">{formik.errors.title}</span>
          )}
        </div>

        <div className="add-course__row">
          <div className="add-course__field">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={formik.values.category}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              {categoryOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="add-course__field">
            <label htmlFor="type">Type</label>
            <select
              id="type"
              name="type"
              value={formik.values.type}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="course">Course</option>
              <option value="event">Event</option>
            </select>
          </div>

          <div className="add-course__field">
            <label htmlFor="level">Level</label>
            <select
              id="level"
              name="level"
              value={formik.values.level}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              {levelOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="add-course__row">
          <div className="add-course__field">
            <label htmlFor="duration">Duration</label>
            <input
              id="duration"
              name="duration"
              type="text"
              placeholder="e.g. 6 weeks"
              value={formik.values.duration}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.duration && formik.errors.duration && (
              <span className="add-course__error">
                {formik.errors.duration}
              </span>
            )}
          </div>

          <div className="add-course__field">
            <label htmlFor="price">Price (GEL, 0 = free)</label>
            <input
              id="price"
              name="price"
              type="number"
              min="0"
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.price && formik.errors.price && (
              <span className="add-course__error">{formik.errors.price}</span>
            )}
          </div>
        </div>

        <div className="add-course__field">
          <label htmlFor="instructor">Instructor</label>
          <input
            id="instructor"
            name="instructor"
            type="text"
            value={formik.values.instructor}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.instructor && formik.errors.instructor && (
            <span className="add-course__error">
              {formik.errors.instructor}
            </span>
          )}
        </div>

        <div className="add-course__field">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.description && formik.errors.description && (
            <span className="add-course__error">
              {formik.errors.description}
            </span>
          )}
        </div>

        <div className="add-course__field">
          <label htmlFor="image">Image URL (optional)</label>
          <input
            id="image"
            name="image"
            type="text"
            placeholder="https://…"
            value={formik.values.image}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>

        <PricePreview price={formik.values.price} formatPrice={formatPrice} />

        <button type="submit" className="btn btn--primary add-course__submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default AddCourse;
