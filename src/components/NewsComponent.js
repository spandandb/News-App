import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
// import sampleOutputData from '../sampleOutputData.json';
import Spinner from './Spinner';
import CategorySelector from './CategorySelector';

export default function NewsComponent() {
  const [newsData, setNewsData] = useState({
    articles: [],
    loading: false
  });
  const [category, setCategory] = useState('general');

  const allNewsCards = newsData.articles.map((newsData) => {
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
  useEffect(() => {
    setNewsData((prevState) => {
      return { ...prevState, loading: true };
    });
    const apiKey = `cc330dcb2b5f48749802617176b91c4d`;
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setNewsData({ articles: data.articles, loading: false });
      });
  }, [category]);
  return (
    <>
      <CategorySelector />
      {newsData.loading && <Spinner />}
      {!newsData.loading && (
        <div className='news--container--outer'>
          <div className='news--container'>{allNewsCards}</div>
        </div>
      )}
    </>
  );
}
