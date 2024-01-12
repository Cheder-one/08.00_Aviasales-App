import logoSrc from '../../../assets/logo.png';

import _ from './Logo.module.scss';

function Logo() {
  return (
    <div className={_.logo_container}>
      <img src={logoSrc} alt="logo" width={60} height={60} />
    </div>
  );
}

export default Logo;
