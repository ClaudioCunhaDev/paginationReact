import React from "react";
import styles from "./Paginate.module.css";

const Paginate = ({
  postsPerPage,
  totalPosts,
  setCurrentPage,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {pageNumbers.map((page, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setCurrentPage(page)}
            className={page == currentPage ? styles.btn : ""}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Paginate;
