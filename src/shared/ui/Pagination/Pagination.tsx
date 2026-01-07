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

  return (
    <div
      style={{
        display: 'flex',
        gap: '8px',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20px',
      }}
    >
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

      <span style={{ padding: '0 8px' }}>
        Страница {currentPage} из {totalPages}
      </span>

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
