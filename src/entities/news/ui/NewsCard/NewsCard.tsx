import { type FC } from 'react';

import { Card } from '@/shared/ui/Card';

import classes from './NewsCard.module.scss';

interface NewsCardProps {
  title: string;
  body: string;
  actionButton?: React.ReactNode;
}

const NewsCard: FC<NewsCardProps> = ({ title, body, actionButton }) => {
  return (
    //TODO: править стили
    <Card className={classes.newsCard} withHoverFocus={true}>
      {actionButton && (
        <div className={classes.actionButton}>{actionButton}</div>
      )}
      <h2 className={classes.title}>{title}</h2>
      <p className={classes.body}>{body}</p>
    </Card>
  );
};

export default NewsCard;
