import React from 'react';
import NewsItem from './NewsItem';
import sampleOutputData from '../sampleOutputData.json';

export default function NewsComponent() {
  const allNewsCards = sampleOutputData.articles.map((newsData) => {
    return (
      <NewsItem
        title={newsData.title}
        imgUrl={newsData.urlToImage}
        readMoreLink={newsData.url}
        description={newsData.description}
        author={newsData.author}
      />
    );
  });
  return (
    <div className='news--container--outer'>
      <div className='news--container'>{allNewsCards}</div>
    </div>
  );
}
