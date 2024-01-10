import { padStart } from 'lodash';

function formatDuration(duration) {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  return `${padStart(hours, 2, '0')}ч ${padStart(minutes, 2, '0')}м`;
}

export default formatDuration;
