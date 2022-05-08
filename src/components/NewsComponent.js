import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
// import sampleOutputData from '../sampleOutputData.json';
import Spinner from './Spinner';
import CategorySelector from './CategorySelector';
import CategoryChangedAlert from './CategoryChangedAlert';

export default function NewsComponent() {
  const [newsData, setNewsData] = useState({
    articles: [],
    loading: false
  });
  const [category, setCategory] = useState('general');
  const [alert, setAlert] = useState(false);

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

  const showAlert = () => {
    setAlert(true);
  };

  const categoryBusiness = () => {
    setCategory('business');
    showAlert();
  };
  const categoryEntertainment = () => {
    setCategory('entertainment');
    showAlert();
  };
  const categoryGeneral = () => {
    setCategory('general');
    showAlert();
  };
  const categoryHealth = () => {
    setCategory('health');
    showAlert();
  };
  const categoryScience = () => {
    setCategory('science');
    showAlert();
  };
  const categorySports = () => {
    setCategory('sports');
    showAlert();
  };
  const categoryTechnology = () => {
    setCategory('technology');
    showAlert();
  };

  return (
    <>
      {alert && <CategoryChangedAlert currentCategory={category} />}
      <h1>Breaking Today</h1>
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
