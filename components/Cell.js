import React from 'react';
import useStore from '../store/useStore';

const Cell = ({ index }) => {
  const { cells, setCell } = useStore();
  const [value, setValue] = React.useState(cells[index]);

  const handleChange = (e) => {
    setValue(e.target.value);
    setCell(index, e.target.value);
  };

  return (
    <td className="border p-2">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="w-full h-full border-none outline-none"
      />
    </td>
  );
};

export default Cell;
