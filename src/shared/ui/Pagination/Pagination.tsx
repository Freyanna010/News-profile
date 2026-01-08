import type { FC } from 'react';

import { getPagesNumbers } from './getPagesNumbers';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
const Pagination: FC<PaginationProps> = (props) => {
  const { currentPage, totalPages, onPageChange } = props;

  if (totalPages <= 1) {
    return null;
  }

  const pagesNumbers = getPagesNumbers(currentPage, totalPages);

  return (
    <div>
      {/* TODO: вынести в ui/IconButton */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        style={{
          cursor: currentPage <= 1 ? 'not-allowed' : 'pointer',
        }}
      >
        Назад
      </button>

      {pagesNumbers.map((item, index) => {
        if (item === '...') {
          return (
            <span key={`dots-${index}`} style={{ padding: '0 4px' }}>
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
            style={{
              padding: '4px 8px',
              margin: '0 2px',
              background: isActive ? '#7700ffff' : 'white',
              color: isActive ? 'white' : 'black',
              cursor: 'pointer',
              borderRadius: '4px',
              minWidth: '32px',
            }}
            disabled={isActive}
          >
            {pageNumber}
          </button>
        );
      })}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        style={{
          cursor: currentPage >= totalPages ? 'not-allowed' : 'pointer',
        }}
      >
        Вперед
      </button>
    </div>
  );
};

export default Pagination;
