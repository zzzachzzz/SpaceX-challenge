import React from 'react';

export default function LaunchDetails({imageSrc}) {
  return (
    <div style={{position: 'absolute', top: 0, left: '20%', width: '35%', height: '50%'}}>
      <img src={imageSrc} style={{objectFit: 'contain', maxWidth: '100%', maxHeight: '100%', position: 'absolute', left: 0}} />
    </div>
  );
}

