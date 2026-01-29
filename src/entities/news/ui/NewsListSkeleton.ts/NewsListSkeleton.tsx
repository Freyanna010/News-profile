import { CardSkeleton } from '@/shared/ui/CardSkeleton';

interface NewsListSkeletonProps {
  count?: number;
}

const NewsListSkeleton: React.FC<NewsListSkeletonProps> = ({ count = 10 }) => {
  const skeletonItems = Array.from({ length: count }, (_, index) => ({
    //TODO: здесь можно оставит инлекс?
    id: `skeleton-${index}`,
  }));

  return (
    <ul>
      {skeletonItems.map((item) => (
        <li key={item.id}>
          <CardSkeleton />
        </li>
      ))}
    </ul>
  );
};

export default NewsListSkeleton;
