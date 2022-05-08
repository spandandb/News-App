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
        key={newsData.url}
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
    document.title = `Pocket News - ${
      category[0].toUpperCase() + category.slice(1)
    }`;
  }, [category]);

  const categoryBusiness = () => {
    setCategory('business');
  };
  const categoryEntertainment = () => {
    setCategory('entertainment');
  };
  const categoryGeneral = () => {
    setCategory('general');
  };
  const categoryHealth = () => {
    setCategory('health');
  };
  const categoryScience = () => {
    setCategory('science');
  };
  const categorySports = () => {
    setCategory('sports');
  };
  const categoryTechnology = () => {
    setCategory('technology');
  };

  return (
    <>
      <CategorySelector
        categoryBusiness={categoryBusiness}
        categoryEntertainment={categoryEntertainment}
        categoryGeneral={categoryGeneral}
        categoryHealth={categoryHealth}
        categoryScience={categoryScience}
        categorySports={categorySports}
        categoryTechnology={categoryTechnology}
      />
      {newsData.loading && <Spinner />}
      {!newsData.loading && (
        <div className='news--container--outer'>
          <div className='news--container'>{allNewsCards}</div>
        </div>
      )}
    </>
  );
}
