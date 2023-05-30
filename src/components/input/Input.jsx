/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';

function Input(props) {
  const { label, name, error } = props;
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input name={name} id={name} {...props} />
      {error ? <span role="alert">{error}</span> : null}
    </>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
};

Input.defaultProps = {
  error: null,
};

export default Input;
