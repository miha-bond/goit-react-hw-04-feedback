import PropTypes from 'prop-types';
const Notification = ({ message }) => {
  return (
    <p style={{ marginLeft: '15px', textShadow: '#fc0 1px 0 10px' }}>
      {message}
    </p>
  );
};
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
