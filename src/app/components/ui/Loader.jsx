import { Flex, Spin } from 'antd';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

function Loader({ css }) {
  const StyledLoader = styled(Flex)`
    height: 100vh;
    ${css}
  `;

  return (
    <StyledLoader justify="center" align="center">
      <Spin size="large" />
    </StyledLoader>
  );
}

Loader.propTypes = {
  css: PropTypes.string,
};
Loader.defaultProps = {
  css: '',
};

export default Loader;
