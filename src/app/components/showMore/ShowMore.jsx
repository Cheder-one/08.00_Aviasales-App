import { Button } from 'antd';
import PropTypes from 'prop-types';

import _ from './ShowMore.module.scss';

function ShowMore({ text, className, onShowMore }) {
  return (
    <Button
      className={`${_.more_btn} ${className}`}
      block
      type="primary"
      onClick={onShowMore}
    >
      {text}
    </Button>
  );
}

ShowMore.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  onShowMore: PropTypes.func.isRequired,
};

ShowMore.defaultProps = {
  text: 'Показать еще',
  className: '',
};

export default ShowMore;
