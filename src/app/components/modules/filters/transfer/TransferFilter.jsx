import PropTypes from 'prop-types';
import { Checkbox, Card } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators as bindActions } from 'redux';

import {
  transferActions,
  transferSelectors,
} from '@/reducers/filters/transfers';

import { CheckboxMod } from '../../../ui';
import usePrev from '../../../../hooks/usePrev';

import _ from './TransferFilter.module.scss';
import { checkboxMap } from './helpers/checkboxMap';
import handleCheckboxChange from './helpers/processCheckboxChange';

function TransferFilter({ transfers, checkboxUpdated }) {
  const prevTransfers = usePrev(transfers);

  const onCheckboxChange = (ids) => {
    handleCheckboxChange(ids, prevTransfers, checkboxUpdated);
  };

  return (
    <Card className={_.transfer_filter}>
      <h3 className={_.title}>Количество пересадок</h3>

      <Checkbox.Group
        value={transfers}
        className={_.checkbox_group}
        onChange={onCheckboxChange}
      >
        {checkboxMap.map((item) => (
          <CheckboxMod key={item.id} value={item.id} className={_.checkbox}>
            {item.value}
          </CheckboxMod>
        ))}
      </Checkbox.Group>
    </Card>
  );
}

TransferFilter.propTypes = {
  transfers: PropTypes.arrayOf(PropTypes.string, PropTypes.string).isRequired,
  checkboxUpdated: PropTypes.func.isRequired,
};

const mapState = (state) => ({
  transfers: transferSelectors.getTransfers(state),
});

const mapDispatch = (dispatch) => {
  const transfers = bindActions(transferActions, dispatch);
  return { ...transfers };
};

const ConnectedTransferFilter = connect(mapState, mapDispatch)(TransferFilter);
export default ConnectedTransferFilter;
