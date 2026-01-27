import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { usePageFromSearchParams } from '../usePageFromSearchParams';

type UsePaginationOptions = {
  totalItems: number;
  defaultLimit: number;
  defaultPage: number;
  pageParam?: string;
};
//TODO: changeLimit и changePage - должны быть в одном хуке?
export const usePagination = ({
  totalItems,
  defaultLimit,
  defaultPage,
  pageParam = 'page',
}: UsePaginationOptions) => {
  const [_, setSearchParams] = useSearchParams();
  const [limit, setLimit] = useState<number>(defaultLimit);

  const currentPage = usePageFromSearchParams(pageParam, defaultPage);

  const totalPages = Math.ceil(totalItems / limit);

  const changePage = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setSearchParams({ [pageParam]: String(newPage) });
  };

  const changeLimit = (newLimit: number) => {
    setLimit(newLimit);
    setSearchParams({ [pageParam]: String(defaultPage) });
  };

  return {
    limit,
    currentPage,
    totalPages,
    changePage,
    changeLimit,
  };
};
