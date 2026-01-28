import type { FC } from 'react';
import clsx from 'clsx';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

import { getPagesNumbers } from './getPagesNumbers';
import classes from './Pagination.module.scss';
import { Button } from '../Button';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}
const Pagination: FC<PaginationProps> = (props) => {
  const { currentPage, totalPages, onPageChange, className = '' } = props;

  if (totalPages <= 1) {
    return null;
  }

  const pagesNumbers = getPagesNumbers(currentPage, totalPages);

  return (
    <div className={clsx(classes.pagination, className)}>
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        size="small"
        variant="outlined"
        shape="circle"
        icon={<SlArrowLeft />}
        aria-label="Предыдущая страница"
      />

      {pagesNumbers.map((item, index) => {
        if (item === '...') {
          return (
            <span key={`dots-${index}`} className={classes.dots}>
              ...
            </span>
          );
        }

        const pageNumber = item as number;
        const isActive = pageNumber === currentPage;

        return (
          <button
            key={`page-${pageNumber}`}
            onClick={() => onPageChange(pageNumber)}
            className={clsx(classes.paginationButton, {
              [classes.activeButton]: isActive,
              [classes.inactiveButton]: !isActive,
            })}
            disabled={isActive}
          >
            {pageNumber}
          </button>
        );
      })}

      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        size="small"
        variant="outlined"
        shape="circle"
        icon={<SlArrowRight />}
        aria-label="Следующая страница"
      />
    </div>
  );
};

export default Pagination;
