/* eslint-disable no-restricted-globals */

const calcStartEndTrip = (dateString, durationMin) => {
  const date = new Date(dateString);
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    return '--:-- - --:--';
  }

  const startTripTime = `${date.getHours()}:${date.getMinutes()}`;

  const timestamp = date.getTime();
  const durationMs = durationMin * 60 * 1000;

  const endTime = new Date(timestamp + durationMs);
  const endTripTime = `${endTime.getHours()}:${endTime.getMinutes()}`;

  return `${startTripTime} - ${endTripTime}`;
};

export default calcStartEndTrip;
