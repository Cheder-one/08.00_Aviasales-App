import PropTypes from 'prop-types';
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { connect } from 'react-redux';
import { ProgressBar } from 'react-bootstrap';

import { Logo } from '../../components/ui';
import { ticketSelectors } from '../../store/reducers/tickets/tickets';
import { errorSelectors } from '../../store/reducers/errors';

function TicketsPageHeader({ loadNow, loadMax, isDataLoaded, errors }) {
  return (
    <>
      <ProgressBar
        animated
        now={loadNow}
        max={loadMax}
        hidden={isDataLoaded}
        variant={errors.length ? 'danger' : 'primary'}
        css={{ height: '10px', borderRadius: 0 }}
      />
      <Logo />
    </>
  );
}

TicketsPageHeader.propTypes = {
  loadNow: PropTypes.number,
  loadMax: PropTypes.number,
  isDataLoaded: PropTypes.bool,
  errors: PropTypes.arrayOf(PropTypes.shape({})),
};

TicketsPageHeader.defaultProps = {
  loadNow: 0,
  loadMax: 0,
  errors: null,
  isDataLoaded: false,
};

const mapState = (state) => ({
  errors: errorSelectors.getErrors(state),
  isDataLoaded: ticketSelectors.getTicketsLoadedStatus(state),
});

const ConnectedTicketsPageHeader = connect(mapState)(TicketsPageHeader);
export default ConnectedTicketsPageHeader;
