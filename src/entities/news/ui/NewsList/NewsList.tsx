import type { FC } from 'react';
import { MoonLoader } from 'react-spinners';
import type React from 'react';

import type { News } from '@/entities/news';

import NewsCard from '../NewsCard/NewsCard';
import classes from './NewsList.module.scss';

interface NewsListProps {
  news: News[] | undefined;
  isLoading?: boolean;
  error?: unknown;
  classNeme?: string;
  renderAction?: (news: News) => React.ReactNode;
}

const NewsList: FC<NewsListProps> = (props) => {
  const { news, isLoading, error, renderAction } = props;

  //TODO: не центрируется(  можно вынести в ui-компонет
  if (isLoading) {
    return (
      <div className={classes.loaderWrapper}>
        <MoonLoader color="#5a17ff" size={90} />
      </div>
    );
  }
  if (error) return <div>Ошибка: {JSON.stringify(error)}</div>;

  return (
    <ul className={classes.newsListContainer}>
      {news?.map((item) => (
        <li key={item.id}>
          <NewsCard
            title={item.title}
            body={item.body}
            actionButton={renderAction ? renderAction(item) : null}
          />
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
