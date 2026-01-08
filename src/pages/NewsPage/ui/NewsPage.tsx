import { MoonLoader } from 'react-spinners';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

import { useGetNewsQuery } from '@/features/news-crud/model/api/newsApi';
import { NewsCard } from '@/entities/news';
import { NEWS_CONSTANTS } from '@/shared/constans';
import { usePageFromSearchParams } from '@/shared/libs';
import { Pagination } from '@/shared/ui/Pagination';

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

  if (isLoading) return <MoonLoader color="#5a17ff" size={90} />;
  if (error) return <div>Ошибка: {JSON.stringify(error)}</div>;
  return (
    <div>
      <h1>Новости</h1>
      <ul>
        {news?.map((item) => (
          <li key={item.id}>
            <NewsCard title={item.title} body={item.body} />
          </li>
        ))}
      </ul>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      <div>
        <label htmlFor="pageSize">Показывать:</label>

        <select id="pageSize" value={limit} onChange={handleLimitChange}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value={NEWS_CONSTANTS.TOTAL_ITEMS}>все</option>
        </select>
      </div>
    </div>
  );
};

export default NewsPage;
