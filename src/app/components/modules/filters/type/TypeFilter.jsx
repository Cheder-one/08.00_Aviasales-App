import { Radio } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators as bindActions } from 'redux';

import { typeActions, typeSelectors } from '@/reducers/filters/type';

import _ from './TypeFilter.module.scss';

function TypeFilter({ type, typeUpdated }) {
  const handleTypeChange = ({ target }) => {
    const { value } = target;
    typeUpdated(value);
  };

  return (
    <Radio.Group
      className={_.type_filter}
      value={type}
      buttonStyle="solid"
      onChange={handleTypeChange}
    >
      <Radio.Button className={_.btn_label} value="price">
        Самый дешевый
      </Radio.Button>
      <Radio.Button className={_.btn_label} value="duration">
        Самый быстрый
      </Radio.Button>
      <Radio.Button className={_.btn_label} value="optimal">
        Оптимальный
      </Radio.Button>
    </Radio.Group>
  );
}

TypeFilter.propTypes = {
  type: PropTypes.string.isRequired,
  typeUpdated: PropTypes.func.isRequired,
};

const mapState = (state) => ({
  type: typeSelectors.getType(state),
});

const mapDispatch = (dispatch) => {
  const type = bindActions(typeActions, dispatch);

  return { ...type };
};

const ConnectedTypeFilter = connect(mapState, mapDispatch)(TypeFilter);
export default ConnectedTypeFilter;
