import React from 'react';
import resume from '../assets/resumeSS.png';

function Resume() {
  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <img src={resume} alt='Resume' style={{ width: '100%', height: 'auto' }} />
    </div>
  );
}

export default Resume;
