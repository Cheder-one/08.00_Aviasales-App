/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function Wrapper({ isHidden, children }) {
  const style = css`
    display: ${isHidden ? 'none' : 'block'};
  `;

  return <div css={style}>{children}</div>;
}

export default Wrapper;
