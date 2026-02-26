import { NewsCardSkeleton } from '@/entities/news/ui/NewsCardSkeleton';

import classes from './NewsListSkeleton.module.scss';

interface NewsListSkeletonProps {
  count?: number;
}

const NewsListSkeleton: React.FC<NewsListSkeletonProps> = ({ count = 10 }) => {
  const skeletonItems = Array.from({ length: count }, (_, index) => ({
    id: `skeleton-${index}`,
  }));

  return (
    <ul className={classes.newsListContainer}>
      {skeletonItems.map((item) => (
        <li key={item.id} className={classes.loader}>
          <NewsCardSkeleton />
        </li>
      ))}
    </ul>
  );
};

export default NewsListSkeleton;
