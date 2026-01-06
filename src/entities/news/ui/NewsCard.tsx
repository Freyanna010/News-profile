import { type FC } from 'react';

interface NewsCardProps {
  title: string;
  body: string;
}

const NewsCard: FC<NewsCardProps> = ({ title: tile, body }) => {
  return (
    //TODO: создать ui-карточки
    <div>
      <h2>{tile}</h2>
      <div>{body}</div>
    </div>
  );
};

export default NewsCard;
