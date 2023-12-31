import { Button } from 'antd';
import PropTypes from 'prop-types';

import _ from './ShowMore.module.scss';

function ShowMore({ text, onShowMore }) {
  return (
    <Button
      className={_.more_btn}
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
};

ShowMore.defaultProps = {
  text: 'Показать еще',
};

export default ShowMore;
