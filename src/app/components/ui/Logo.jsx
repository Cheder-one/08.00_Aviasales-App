import styled from '@emotion/styled';

import logoSrc from '../../assets/logo.png';

const CompanyLogo = styled.div`
  padding: 50px 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

function Logo() {
  return (
    <CompanyLogo>
      <img src={logoSrc} alt="logo" width={60} height={60} />
    </CompanyLogo>
  );
}

export default Logo;
