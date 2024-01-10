import { Radio } from 'antd';
import { bindActionCreators as combine } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import { typeActions, typeSelectors } from '@/reducers/filters/type';

import _ from './TypeFilter.module.scss';

const { getType } = typeSelectors;

function TypeFilter() {
  const type = useSelector(getType);
  const dispatch = useDispatch();

  const { typeUpdated } = combine(typeActions, dispatch);

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

export default TypeFilter;
