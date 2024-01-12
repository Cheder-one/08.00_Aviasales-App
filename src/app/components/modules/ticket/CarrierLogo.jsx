function CarrierLogo({ carrier, onLoad }) {
  return (
    <img
      alt="carrierLogo"
      src={`https://pics.avs.io/99/36/${carrier}.png`}
      onLoad={onLoad}
    />
  );
}

export default CarrierLogo;
