/* eslint-disable no-restricted-globals */

import { padStart } from 'lodash';

const pad = (string) => {
  return padStart(string, 2, '0');
};

const calcStartEndTrip = (dateString, durationMin) => {
  const date = new Date(dateString);
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    return '--:-- - --:--';
  }

  const startTripTime = `${pad(date.getHours())}:${pad(date.getMinutes())}`;

  const timestamp = date.getTime();
  const durationMs = durationMin * 60 * 1000;

  const endTime = new Date(timestamp + durationMs);
  const endTripTime = `${pad(endTime.getHours())}:${pad(endTime.getMinutes())}`;

  return `${startTripTime} - ${endTripTime}`;
};

export default calcStartEndTrip;
