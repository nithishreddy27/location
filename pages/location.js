import React, { useEffect, useState } from 'react';

function Compass() {
  const [heading, setHeading] = useState(0);

  useEffect(() => {
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleOrientation, true);
    }
    return () => {
      window.removeEventListener('deviceorientation', handleOrientation, true);
    };
  }, []);

  const handleOrientation = (event) => {
    const { webkitCompassHeading, alpha } = event;
    const newHeading = webkitCompassHeading || alpha;
    setHeading(newHeading);
  };

  return (
    <div>
      <h1>Compass Heading: {heading}</h1>
    </div>
  );
}

export default Compass;
