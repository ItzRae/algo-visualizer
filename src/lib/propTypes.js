import PropTypes from 'prop-types';

export const AnimationArrayType = PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.number),
        PropTypes.bool,
      ])
    )
  );

