import React from 'react';
import './NumberDisplay.scss';

interface NumberDisplayProps {
  value: number;
}

//We use and interface when passing props (value) were we specify the proptypes

const NumberDisplay: React.FC<NumberDisplayProps> = ({ value }) => {
  return (
    <div className='NumberDisplay'>{value.toString().padStart(3, '0')}</div> // Makes 0 look like 000
  );
};

export default NumberDisplay;
