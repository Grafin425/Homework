import React from "react";
import styles from './Pagination.module.css'
export const PaginationWrapper=({children,currentPage,totalPage,onPrevClick,onNextClick,handleLastPage,handleFirstPage})=>{
  const handleNextClick=()=>{
      if(currentPage+1<=totalPage){
          onNextClick && onNextClick(currentPage+1)
      }
  }
    const handlePrevClick=()=>{
        if(currentPage-1>0){
            onPrevClick && onPrevClick(currentPage-1)
        }
    }
    const handleLastPageClick=()=>{
      handleLastPage && handleLastPage (totalPage)

    }
    const handleFirstPageClick=()=>{
      handleFirstPage && handleFirstPage(1)
    }
    return(
      <div >
          {children}

          <div className={styles.pagination}>
          <button className={styles.btn} disabled={currentPage-1===0}  onClick={handleFirstPageClick}>first</button>
          <button className={styles.btn} disabled={currentPage-1===0} onClick={handlePrevClick}> &lt; </button>
          <button className={styles.btnCout}>{currentPage} of {totalPage}</button>
          <button className={styles.btn} disabled={currentPage+1>totalPage} onClick={handleNextClick}>></button>
          <button className={styles.btn} disabled={currentPage+1>totalPage} onClick={handleLastPageClick}>last</button>
      </div>
      </div>
  )
}
