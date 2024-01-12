import PropTypes from 'prop-types';

function CarrierLogo({ carrier, onLoad }) {
  return (
    <img
      alt="carrierLogo"
      src={`https://pics.avs.io/99/36/${carrier}.png`}
      onLoad={onLoad}
    />
  );
}

CarrierLogo.propTypes = {
  carrier: PropTypes.string.isRequired,
  onLoad: PropTypes.func.isRequired,
};

export default CarrierLogo;
