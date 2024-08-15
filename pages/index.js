import React from 'react';
import Grid from '../components/Grid';
import Search from '../components/Search';
import Pagination from '../components/Pagination';

const Home = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = 10; // Adjust based on the actual number of pages

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Search />
      <Grid />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Home;
