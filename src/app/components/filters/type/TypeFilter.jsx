import { bindActionCreators as combine } from 'redux';
import { Radio } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import _ from './TypeFilter.module.scss';

// eslint-disable-next-line
import { typeActions, typeSelectors } from '@/reducers/filters/type';

const { getType } = typeSelectors;

function TypeFilter() {
  const type = useSelector(getType());
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
      defaultValue="cheap"
      onChange={handleTypeChange}
    >
      <Radio.Button className={_.btn_label} value="cheap">
        Самый дешевый
      </Radio.Button>
      <Radio.Button className={_.btn_label} value="fast">
        Самый быстрый
      </Radio.Button>
      <Radio.Button className={_.btn_label} value="optimal">
        Оптимальный
      </Radio.Button>
    </Radio.Group>
  );
}

export default TypeFilter;
