import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

import { NewsList, useGetNewsQuery, type News } from '@/entities/news';
import { NEWS_CONSTANTS, PAGE_SIZE_OPTIONS } from '@/shared/constans';
import { usePageFromSearchParams, usePagination } from '@/shared/libs';
import { Pagination } from '@/shared/ui/Pagination';
import { Select } from '@/shared/ui/Select';
import { DeleteNewsButton } from '@/entities/news/ui/DeleteNewsButton';
import { Card } from '@/shared/ui/Card';

import classes from './NewsPage.module.scss';

const NewsPage = () => {
  const { limit, currentPage, totalPages, changePage, changeLimit } =
    usePagination({
      totalItems: NEWS_CONSTANTS.TOTAL_ITEMS,
      defaultLimit: NEWS_CONSTANTS.DEFAULT_LIMIT,
      defaultPage: NEWS_CONSTANTS.DEFAULT_PAGE,
    });

  const {
    data: news,
    isLoading,
    error,
  } = useGetNewsQuery({
    page: currentPage,
    limit,
  });

  const handleChangePage = (newPage: number) => {
    changePage(newPage);

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };
  const handleChangeLimit = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeLimit(Number(e.target.value));
  };

  const renderActionButton = (news: News) => {
    return (
      <div>
        <DeleteNewsButton newsId={news.id} />
        {/* еще кнопки */}
      </div>
    );
  };

  return (
    <Card withHoverFocus={false}>
      <div className={classes.pageContainer}>
        <NewsList
          news={news}
          isLoading={isLoading}
          error={error}
          renderAction={renderActionButton}
        />

        <div className={classes.paginationContainer}>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handleChangePage}
            className={classes.pagination}
          />

          <div className={classes.pageSizeSelector}>
            <Select
              label="Показывать:"
              options={PAGE_SIZE_OPTIONS}
              value={limit.toString()}
              onChange={handleChangeLimit}
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
