import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import './ProgressBar.scss';
import { ticketSelectors } from '../../store/reducers/tickets';

function ProgressBar({ isLoaded }) {
  const [stopAnimation, setStopAnimation] = useState('isLoaded');

  useEffect(() => {
    const progressBar = document.querySelector('.progress-bar');
    progressBar.classList.toggle('animate');
  }, [stopAnimation]);

  return (
    <div>
      <div className="progress-bar" />
    </div>
  );
}

const mapState = (state) => ({
  isLoaded: ticketSelectors.getTicketsLoadedStatus(state),
});

const ConnectedProgressBar = connect(mapState)(ProgressBar);
export default ConnectedProgressBar;
