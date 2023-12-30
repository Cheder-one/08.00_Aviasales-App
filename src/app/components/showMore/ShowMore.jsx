import { Button } from 'antd';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import _ from './ShowMore.module.scss';

const ButtonMod = styled(Button)`
  color: white !important;
`;

function ShowMore({ text }) {
  return (
    <ButtonMod className={_.more_btn} block>
      {text}
    </ButtonMod>
  );
}

ShowMore.propTypes = {
  text: PropTypes.string,
};

ShowMore.defaultProps = {
  text: 'Показать еще',
};

export default ShowMore;
