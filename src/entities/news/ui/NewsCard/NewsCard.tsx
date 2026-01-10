import { type FC } from 'react';

import Card from '@/shared/ui/Card/Card';

import classes from './NewsCard.module.scss';

interface NewsCardProps {
  title: string;
  body: string;
}

const NewsCard: FC<NewsCardProps> = ({ title, body }) => {
  return (
    //TODO: создать слоты
    <Card className={classes.newsCard} withHoverFocus={true}>
      <h2 className={classes.title}>{title}</h2>
      <p className={classes.body}>{body}</p>
    </Card>
  );
};

export default NewsCard;
