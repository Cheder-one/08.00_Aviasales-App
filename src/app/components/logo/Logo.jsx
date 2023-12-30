import logoSrc from '../../assets/logo.png';

import c from './Logo.module.scss';

function Logo() {
  return (
    <div className={c.logo_container}>
      <img src={logoSrc} alt="logo" width={60} height={60} />
    </div>
  );
}

export default Logo;
