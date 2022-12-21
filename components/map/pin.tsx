import * as React from 'react';

const ICON = `M12.21,41.06c1.5-.7,3-1.4,4.4-2.2a19.52,19.52,0,0,0,2.3-1.7,1.29,1.29,0,0,0,.3-1.8c-.8-1.5-1.2-3.1-2.3-4.4a6.11,6.11,0,0,1-.7-1.4,1.67,1.67,0,0,1,.3-1.8,2.1,2.1,0,0,0,.4-1.1,10.82,10.82,0,0,0,0-1.8,4.76,4.76,0,0,1,4.1-4.8,8.74,8.74,0,0,1,3.6.1,4.76,4.76,0,0,1,3.7,4.8v1.1a2.42,2.42,0,0,0,.6,2,1.91,1.91,0,0,1,.2,1.3,3,3,0,0,1-.7,1.5c-1.1,1.3-1.5,2.9-2.3,4.4a1.45,1.45,0,0,0,.4,2,15.1,15.1,0,0,0,2.6,1.8c1.4.8,2.9,1.5,4.4,2.3.3.2.9.6,1,.7h10.7L22.71.26.21,42h10.7A4,4,0,0,1,12.21,41.06Z`;

const pinStyle = {
  cursor: 'pointer',
  fill: '#fd0',
  stroke: '#000',
  strokeMiterLimit: '10',
  stokeWidth: '0.25px',
};

function Pin({size = 20}) {
  return (
    <svg height={size} viewBox="0 0 45 42.19" style={pinStyle} stroke>
      <path d={ICON} />
    </svg>
  );
}

export default React.memo(Pin);