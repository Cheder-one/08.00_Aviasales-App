import PropTypes from 'prop-types';
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { connect } from 'react-redux';
import { ProgressBar } from 'react-bootstrap';

import { Logo } from '../../components/ui';
import { ticketSelectors } from '../../store/reducers/tickets';

function TicketsPageHeader({ loadNow, loadMax, isDataLoaded }) {
  return (
    <>
      <ProgressBar
        animated
        max={loadMax}
        now={loadNow}
        hidden={isDataLoaded}
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
};

TicketsPageHeader.defaultProps = {
  loadNow: 0,
  loadMax: 0,
  isDataLoaded: false,
};

const mapState = (state) => ({
  isDataLoaded: ticketSelectors.getTicketsLoadedStatus(state),
});

const ConnectedTicketsPageHeader = connect(mapState)(TicketsPageHeader);
export default ConnectedTicketsPageHeader;
