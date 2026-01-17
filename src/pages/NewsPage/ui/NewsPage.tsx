import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

import { NewsList, useGetNewsQuery } from '@/entities/news';
import { NEWS_CONSTANTS, PAGE_SIZE_OPTIONS } from '@/shared/constans';
import { usePageFromSearchParams } from '@/shared/libs';
import { Pagination } from '@/shared/ui/Pagination';
import { Select } from '@/shared/ui/Select';
import Card from '@/shared/ui/Card/Card';

import classes from './NewsPage.module.scss';

const NewsPage = () => {
  // TODO: типизировать <NewsSearchParams>  type NewsSearchParams = {page?: string;}; или export type NewsPageParams = {page?: string; limit?: string;category?: string; // если будут категории sort?: string; // если будет сортировка};
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

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };
  const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLimit(Number(e.target.value));
    setSearchParams({ page: String(NEWS_CONSTANTS.DEFAULT_PAGE) });
  };

  return (
    <Card withHoverFocus={false}>
      <div className={classes.pageContainer}>
        <NewsList news={news} isLoading={isLoading} error={error} />

        <div className={classes.paginationContainer}>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            className={classes.pagination}
          />

          <div className={classes.pageSizeSelector}>
            <Select
              label="Показывать:"
              options={PAGE_SIZE_OPTIONS}
              value={limit.toString()}
              onChange={handleLimitChange}
              size="small"
              type="filled"
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default NewsPage;
