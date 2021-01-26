import React from "react";
import styles from './Pagination.module.css'
import left from '../../image/left.svg'
import right from '../../image/right.svg'
import rightChev from '../../image/right-chevron.svg'
import leftChev from '../../image/left-chevron.svg'
import disabledLeft from '../../image/backspace.svg'
import disableRight from '../../image/forward.svg'

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
              <div className={styles.paginButton}  onClick={handleFirstPageClick}><img  src={currentPage-1===0?disabledLeft:leftChev} alt=""/></div>
              <div className={styles.paginButton}  onClick={handlePrevClick}><img  src={currentPage-1===0?disabledLeft:left} alt=""/></div>
              <div className={styles.page}>{currentPage} of {totalPage}</div>
              <div className={styles.paginButton}  onClick={handleNextClick}><img  src={currentPage+1>totalPage?disableRight:right} alt=""/></div>
              <div className={styles.paginButton}  onClick={handleLastPageClick}><img  src={currentPage+1>totalPage?disableRight:rightChev} alt=""/></div>

      </div>

      </div>
  )
}
