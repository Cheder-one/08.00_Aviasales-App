import PropTypes from 'prop-types';
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { connect } from 'react-redux';
import { ProgressBar } from 'react-bootstrap';

import { Logo } from '../../components/ui';
import { ticketSelectors } from '../../store/reducers/tickets/tickets';
import { errorSelectors } from '../../store/reducers/errors';

function TicketsPageHeader({ chunkCounter, loadMax, isDataLoaded, errors }) {
  return (
    <>
      <ProgressBar
        animated
        now={chunkCounter}
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
  chunkCounter: PropTypes.number,
  loadMax: PropTypes.number,
  isDataLoaded: PropTypes.bool,
  errors: PropTypes.arrayOf(PropTypes.shape({})),
};

TicketsPageHeader.defaultProps = {
  loadMax: 15,
  errors: null,
  chunkCounter: 0,
  isDataLoaded: false,
};

const mapState = (state) => ({
  errors: errorSelectors.getErrors(state),
  chunkCounter: ticketSelectors.getTicketsChunkCounter(state),
  isDataLoaded: ticketSelectors.getTicketsLoadedStatus(state),
});

const ConnectedTicketsPageHeader = connect(mapState)(TicketsPageHeader);
export default ConnectedTicketsPageHeader;
