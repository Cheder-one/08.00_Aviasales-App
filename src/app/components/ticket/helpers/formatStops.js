const formatStops = (stops) => {
  if (stops === 0) return `Без пересадок`;
  if (stops === 1) return `${stops} пересадка`;
  if (stops >= 2 && stops <= 4) return `${stops} пересадки`;
  return `${stops} пересадок`;
};

export default formatStops;
