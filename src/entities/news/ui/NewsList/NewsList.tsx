import type { FC } from 'react';
import type React from 'react';

import { NewsCard, NewsListSkeleton, type News } from '@/entities/news';

import classes from './NewsList.module.scss';

interface NewsListProps {
  news: News[] | undefined;
  isLoading?: boolean;
  error?: unknown;
  classNeme?: string;
  renderAction?: (news: News) => React.ReactNode;
  skeletonCount?: number;
}

const NewsList: FC<NewsListProps> = (props) => {
  const { news, isLoading, error, renderAction, skeletonCount = 10 } = props;

  if (isLoading) {
    return <NewsListSkeleton count={skeletonCount} />;
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
