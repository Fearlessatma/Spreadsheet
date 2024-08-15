import React from 'react';
import Cell from './Cell';

const Grid = () => {
  const rows = 10;  
  const columns = 20; 

  return (
    <table className="border-collapse">
      <tbody>
        {[...Array(rows)].map((_, rowIndex) => (
          <tr key={rowIndex}>
            {[...Array(columns)].map((_, colIndex) => (
              <Cell key={colIndex} index={rowIndex * columns + colIndex} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Grid;
