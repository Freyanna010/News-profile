import { MoonLoader } from 'react-spinners';

import { useGetNewsQuery } from '@/features/news-crud/model/api/newsApi';
import { NewsCard } from '@/entities/news';

const NewsPage = () => {
  const { data: news, isLoading, error } = useGetNewsQuery();

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
