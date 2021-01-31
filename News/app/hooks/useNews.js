import {useState, useEffect} from 'react';
import newsApi from '../api/newsApi';

const useNews = () => {
  const [featuredNews, setFeaturedNews] = useState({});
  const [breakingNews, setBreakingNews] = useState([]);
  const [politicalNews, setPoliticalNews] = useState([]);
  const [techNews, setTechNews] = useState([]);
  const [entertainmentNews, setEntertainmentNews] = useState([]);
  const qty = 5;

  const filterFeatured = (data) => {
    return [...data].filter((item) => item.featured === 'on').reverse()[0];
  };

  const filterByCategory = (data, category) => {
    return [...data]
      .filter((item) => item.category === category)
      .reverse()
      .splice(0, qty);
  };

  const filterMultipleNews = async () => {
    const allNews = await newsApi.getAll();
    try {
      setFeaturedNews(filterFeatured(allNews));
      setBreakingNews(filterByCategory(allNews, 'breaking-news'));
      setTechNews(filterByCategory(allNews, 'tech'));
      setEntertainmentNews(filterByCategory(allNews, 'entertainment'));
      setPoliticalNews(filterByCategory(allNews, 'political'));
    } catch (error) {
      console.log(error.message);
    }
  };
  //call data from the backend
  useEffect(() => {
    filterMultipleNews();
  }, []);
  return [
    featuredNews,
    techNews,
    breakingNews,
    politicalNews,
    entertainmentNews,
  ];
};

export default useNews;
