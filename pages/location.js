import React, { useEffect, useState } from 'react';

function Compass() {
  const [heading, setHeading] = useState(0);

  useEffect(() => {
    const degree_update_rate = 3;

    CompassHeading.start(degree_update_rate, ({heading, accuracy}) => {
      console.log('CompassHeading: ', heading, accuracy);
      setHeading(heading)
    });

    return () => {
      CompassHeading.stop();
    };
  }, []);

  return (
    <div>
      <h1>Compass Heading: {heading}</h1>
    </div>
  );
}

export default Compass;
