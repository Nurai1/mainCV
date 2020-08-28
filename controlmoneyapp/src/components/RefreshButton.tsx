import React from 'react';

import { initialState } from '../store/reducer';

interface RefreshButtonProps {
}

const RefreshButton: React.FC<RefreshButtonProps> = () => {

  return (
    <div className="container_rightSide">
      <button className="refreshBtn"
              onClick={() => {
                localStorage.setItem('controlMoneyStore', JSON.stringify(initialState));
                document.location.reload();
              }}
      >
        Начать новый лист
      </button>
    </div>
);
}

export default RefreshButton;
