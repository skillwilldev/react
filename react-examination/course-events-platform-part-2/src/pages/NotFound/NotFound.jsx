import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
    return (
        <div className="not-found container">
            <div className="not-found__content">
                <div className="not-found__code mono">404</div>
                <h1 className="not-found__title">Page not found</h1>
                <p className="not-found__description">
                    The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.
                </p>

                <div className="not-found__actions">
                    <Link to="/" className="not-found__btn not-found__btn--primary">
                        Go to Homepage
                    </Link>
                    <Link to="/courses" className="not-found__btn not-found__btn--secondary">
                        Browse Courses
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NotFound;