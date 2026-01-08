import type { FC } from 'react';

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
  //TODO: вынести
  const getPagesNumbers = (): number[] => {
    const pages = [];

    if (totalPages < 7) {
      for (let page = 1; page <= totalPages; page++) {
        pages.push(page);
      }
    } else {
      for (let page = 1; page <= 5; page++) {
        pages.push(page);
      }
    }
    return pages;
  };

  const pagesNumbers: number[] = getPagesNumbers();

  return (
    <div>
      {/* TODO: вынести в ui/Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        style={{
          background: currentPage <= 1 ? '#f0f0f0' : 'white',
          cursor: currentPage <= 1 ? 'not-allowed' : 'pointer',
        }}
      >
        Назад
      </button>

      {/* TODO: вынести в ui/Button */}
      {pagesNumbers.map((pageNumber) => (
        <button
          onClick={() => onPageChange(pageNumber)}
          style={{ padding: '0 4px' }}
        >
          {pageNumber}
        </button>
      ))}

      {totalPages > 5 && <span style={{ padding: '0 4px' }}>...</span>}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        style={{
          background: currentPage >= totalPages ? '#f0f0f0' : 'white',
          cursor: currentPage >= totalPages ? 'not-allowed' : 'pointer',
        }}
      >
        Вперед
      </button>
    </div>
  );
};

export default Pagination;
