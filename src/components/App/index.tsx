import React, { useState } from 'react';

import NumberDisplay from '../NumberDisplay';
import Button from '../Button';
import { generateCells } from '../../utils';

import './App.scss';

const App: React.FC = () => {
  const [cells, setCells] = useState(generateCells());
  console.log('Cells', cells);

  const renderCells = (): React.ReactNode => {
    return cells.map((row, rowIndex) =>
      row.map((cell, colIndex) => (
        <Button
          row={rowIndex}
          col={colIndex}
          state={cell.state}
          value={cell.value}
          key={`${rowIndex}-${colIndex}`}
        />
      ))
    );
  };

  return (
    <div className='App'>
      <div className='Header'>
        <NumberDisplay value={0} />
        <div className='Face'>
          {/* Span, role, aria-label needed to complie with warning in console */}
          <span role='img' aria-label='Face'>
            😎
          </span>
        </div>
        <NumberDisplay value={23} />
      </div>
      <div className='Body'>{renderCells()}</div>
    </div>
  );
};

export default App;
