import type { FC } from 'react';
import { MoonLoader } from 'react-spinners';

import type { News } from '@/entities/news';

import NewsCard from '../NewsCard/NewsCard';
import classes from './NewsList.module.scss';

interface NewsListProps {
  news: News[] | undefined;
  isLoading?: boolean;
  error?: unknown;
  classNeme?: string;
}

const NewsList: FC<NewsListProps> = ({ news, isLoading, error }) => {
  if (isLoading) return <MoonLoader color="#5a17ff" size={90} />;
  if (error) return <div>Ошибка: {JSON.stringify(error)}</div>;

  return (
    <ul className={classes.newsListContainer}>
      {news?.map((item) => (
        <li key={item.id}>
          <NewsCard title={item.title} body={item.body} />
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
