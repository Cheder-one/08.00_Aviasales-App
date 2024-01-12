import { Empty } from 'antd';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const EmptyMod = styled(Empty)`
  .ant-empty-description {
    font-family: Open Sans;
  }
`;

function NoMatching({ description }) {
  return <EmptyMod description={description} />;
}

NoMatching.propTypes = {
  description: PropTypes.string,
};

NoMatching.defaultProps = {
  description: 'Рейсов, подходящих под заданные фильтры, не найдено',
};

export default NoMatching;
