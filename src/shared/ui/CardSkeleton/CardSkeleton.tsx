import React from 'react';
import ContentLoader from 'react-content-loader';

const CardSkeleton: React.FC = () => (
  <div>
    <ContentLoader
      speed={2}
      width="100%"
      height={180}
      viewBox="0 0 400 180"
      //TODO: ПОПРАВИТЬ
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="10" rx="4" ry="4" width="70%" height="24" />
      <rect x="0" y="45" rx="3" ry="3" width="100%" height="12" />
      <rect x="0" y="65" rx="3" ry="3" width="100%" height="12" />
      <rect x="0" y="85" rx="3" ry="3" width="80%" height="12" />
      <rect x="0" y="110" rx="3" ry="3" width="60%" height="12" />
      <rect x="0" y="140" rx="8" ry="8" width="120" height="32" />
    </ContentLoader>
  </div>
);

export default CardSkeleton;
