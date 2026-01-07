import { MoonLoader } from 'react-spinners';
import { useSearchParams } from 'react-router-dom';

import { useGetNewsQuery } from '@/features/news-crud/model/api/newsApi';
import { NewsCard } from '@/entities/news';
import { NEWS_CONSTANTS } from '@/shared/constans';
import { usePageFromSearchParams } from '@/shared/libs';

const NewsPage = () => {
  const [_, setSearchParams] = useSearchParams();

  const currentPage = usePageFromSearchParams(
    'page',
    NEWS_CONSTANTS.DEFAULT_PAGE
  );

  //TODO: добавить изменение лимита
  const totalPages = Math.ceil(
    NEWS_CONSTANTS.TOTAL_ITEMS / NEWS_CONSTANTS.DEFAULT_LIMIT
  );

  const {
    data: news,
    isLoading,
    error,
  } = useGetNewsQuery({
    page: currentPage,
    limit: NEWS_CONSTANTS.DEFAULT_LIMIT,
  });

  const handlePageChange = (newPage: number) => {
    const isPageValid = newPage >= 1 && newPage <= totalPages;
    if (!isPageValid) return;

    setSearchParams({ page: String(newPage) });

    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
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

      {/* TODO: Pagination в ui */}
      <div style={{ marginTop: '20px' }}>
        <button
          disabled={currentPage <= 1}
          onClick={() => handlePageChange(currentPage - 1)}
          style={{ marginRight: '10px' }}
        >
          Назад
        </button>

        <span style={{ margin: '0 10px' }}>
          Страница {currentPage} из {totalPages}
        </span>

        <button
          disabled={currentPage >= totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Вперед
        </button>
      </div>
    </div>
  );
};

export default NewsPage;
