// src/components/IconSwitch.jsx
import React from 'react';

function IconSwitch({ icon, onSwitch }) {
  return (
    <span className="material-icons" onClick={onSwitch} style={{ cursor: 'pointer', fontSize: '24px' }}>
      {icon}
    </span>
  );
}

export default IconSwitch;