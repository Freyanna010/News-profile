import { type FC } from 'react';

import classes from './NewsCard.module.scss';

interface NewsCardProps {
  title: string;
  body: string;
}

const NewsCard: FC<NewsCardProps> = ({ title: tile, body }) => {
  return (
    //TODO: создать ui-карточки
    //TODO: создать слоты
    <div className={classes.cardContainer}>
      <h2 className={classes.title}>{tile}</h2>
      <div>{body}</div>
    </div>
  );
};

export default NewsCard;
