import React from "react";

const Pagination = ({ pageNo, nextPage, prevPage, totalPages }) => {
  return (
    <main className="flex justify-between items-center container">
      {pageNo <= 1 ? (
        <div></div>
      ) : (
        <button
          onClick={prevPage}
          className="text-lg flex font-medium items-center text-white"
        >
          <i class="bx bx-chevron-left text-2xl"></i>
          Previous
        </button>
      )}
      {totalPages === pageNo ? (
        <div></div>
      ) : (
        <button
          onClick={nextPage}
          className="text-lg flex font-medium items-center text-white"
        >
          Next
          <i class="bx bx-chevron-right text-2xl"></i>
        </button>
      )}
    </main>
  );
};

export default Pagination;
