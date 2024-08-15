import create from 'zustand';

const useStore = create((set) => ({
  cells: Array(1000).fill(''),
  setCell: (index, value) => set((state) => {
    const newCells = [...state.cells];
    newCells[index] = value;
    return { cells: newCells };
  }),
  format: {
    textAlign: 'left',
    fontSize: '14px',
  },
  setFormat: (key, value) => set((state) => ({
    format: { ...state.format, [key]: value }
  })),
}));

export default useStore;
