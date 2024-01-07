import { Alert } from 'antd';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import { useOnlineStatus } from '../hooks';

const ConnectionAlert = styled(Alert)`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 100;
`;

function ConnectionStatus() {
  const isOnline = useOnlineStatus();
  const [isLost, setIsLost] = useState(false);
  const [isRestored, setIsRestored] = useState(false);

  useEffect(() => {
    if (!isOnline) {
      setIsLost(true);
      setTimeout(() => setIsRestored(false), 5000);
    }
  }, [isOnline]);

  return (
    (isLost && (
      <ConnectionAlert
        className="fade-out"
        message="Соединение потеряно"
        type="error"
        showIcon
      />
    )) ||
    (isRestored && (
      <ConnectionAlert
        className="fade-out"
        message="Соединение восстановлено"
        type="success"
        showIcon
      />
    ))
  );
}

export default ConnectionStatus;
