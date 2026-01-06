import { MoonLoader } from 'react-spinners';
import { useState } from 'react';

import { useGetNewsQuery } from '@/features/news-crud/model/api/newsApi';
import { NewsCard } from '@/entities/news';
import { NEWS_CONSTANTS } from '@/shared/constans';

const NewsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: news,
    isLoading,
    error,
  } = useGetNewsQuery({
    page: currentPage,
    limit: NEWS_CONSTANTS.DEFAULT_PAGE_SIZE,
  });

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
    </div>
  );
};

export default NewsPage;
