import { MoonLoader } from 'react-spinners';

import { useGetNewsQuery } from '@/features/news-crud/model/api/newsApi';

const NewsPage = () => {
  const { data: news, isLoading, error } = useGetNewsQuery();

  if (isLoading) return <MoonLoader color="#5a17ff" size={90} />;
  if (error) return <div>Ошибка: {JSON.stringify(error)}</div>;

  return (
    <div>
      <h1>Новости</h1>
      {news?.map((item) => (
        <div key={item.id} style={{ marginBottom: '20px' }}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsPage;
