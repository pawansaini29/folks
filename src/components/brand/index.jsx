import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Brand = ({ data }) => {
    return (
        <div className="brand-logo-item">
            <a
                href={process.env.PUBLIC_URL + data.url}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src={process.env.PUBLIC_URL + data.image}
                    alt="Brand-Logo"
                />
            </a>
        </div>
    );
};

Brand.propTypes = {
    data: PropTypes.object,
};

export default Brand;
