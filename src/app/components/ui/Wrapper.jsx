/** @jsxImportSource @emotion/react */
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

function Wrapper({ isHidden, children }) {
  const style = css`
    display: ${isHidden ? 'none' : 'block'};
  `;

  return <div css={style}>{children}</div>;
}

Wrapper.propTypes = {
  isHidden: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Wrapper.defaultProps = {
  isHidden: false,
};

export default Wrapper;
