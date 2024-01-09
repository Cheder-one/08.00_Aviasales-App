import { Flex, Spin } from 'antd';
import styled from '@emotion/styled';

function Loader({ css }) {
  const StyledLoader = styled(Flex)`
    height: 100%;
    ${css}
  `;

  return (
    <StyledLoader justify="center" align="center">
      <Spin size="large" />
    </StyledLoader>
  );
}

export default Loader;
