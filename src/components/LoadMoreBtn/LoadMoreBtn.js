import PropTypes from "prop-types";
import css from "./LoadMoreBtn.module.css";

const Button = ({ onLoadMore }) => {
  return (
    <button type="button" className={css.button} onClick={onLoadMore}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

export default Button;
