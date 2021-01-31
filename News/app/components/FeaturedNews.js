import React from 'react';

import BlockCard from './BlockCard';

const FeaturedNews = ({item}) => {
  return <BlockCard item={item} style={{marginVertical: 15}} />;
};

export default FeaturedNews;
