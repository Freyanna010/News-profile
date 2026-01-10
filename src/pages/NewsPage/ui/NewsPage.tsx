import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

import { useGetNewsQuery } from '@/features/news-crud/model/api/newsApi';
import { NewsList } from '@/entities/news';
import { NEWS_CONSTANTS } from '@/shared/constans';
import { usePageFromSearchParams } from '@/shared/libs';
import { Pagination } from '@/shared/ui/Pagination';

import classes from './NewsPage.module.scss';

const NewsPage = () => {
  const [_, setSearchParams] = useSearchParams();
  const [limit, setLimit] = useState<number>(NEWS_CONSTANTS.DEFAULT_LIMIT);

  const currentPage = usePageFromSearchParams(
    'page',
    NEWS_CONSTANTS.DEFAULT_PAGE
  );

  const totalPages = Math.ceil(NEWS_CONSTANTS.TOTAL_ITEMS / limit);

  const {
    data: news,
    isLoading,
    error,
  } = useGetNewsQuery({
    page: currentPage,
    limit,
  });

  const handlePageChange = (newPage: number) => {
    const isPageValid = newPage >= 1 && newPage <= totalPages;
    if (!isPageValid) return;

    setSearchParams({ page: String(newPage) });

    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  };
  const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLimit(Number(e.target.value));
    setSearchParams({ page: String(NEWS_CONSTANTS.DEFAULT_PAGE) });
  };

  return (
    <div className={classes.pageContainer}>
      <NewsList news={news} isLoading={isLoading} error={error} />

      <div className={classes.paginationContainer}>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          className={classes.pagination}
        />

        {/* TODO: создать ui */}
        <div className={classes.pageSizeSelector}>
          <label htmlFor="pageSize">Показывать:</label>

          <select id="pageSize" value={limit} onChange={handleLimitChange}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value={NEWS_CONSTANTS.TOTAL_ITEMS}>все</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
