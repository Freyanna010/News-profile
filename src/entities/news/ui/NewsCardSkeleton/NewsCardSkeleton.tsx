import React from 'react';
import ContentLoader from 'react-content-loader';

import classes from './NewsCardSkeleton.module.scss';

const NewsCardSkeleton: React.FC = () => {
  const TOTAL_HEIGHT = 150;

  return (
    <div className={classes.skeletonCard}>
      <ContentLoader
        speed={2}
        width="100%"
        height={TOTAL_HEIGHT}
        viewBox={`0 0 400 ${TOTAL_HEIGHT}`}
        backgroundColor="#f0f0f0"
        foregroundColor="#e0e0e0"
        className={classes.contentLoader}
      >
        <circle cx="360" cy="20" r="12" />
        <circle cx="330" cy="20" r="12" />

        <rect x="16" y="45" rx="3" ry="3" width="250" height="16" />

        <rect x="16" y="70" rx="3" ry="3" width="350" height="10" />
        <rect x="16" y="85" rx="3" ry="3" width="300" height="10" />
        <rect x="16" y="100" rx="3" ry="3" width="280" height="10" />
      </ContentLoader>
    </div>
  );
};

export default NewsCardSkeleton;
