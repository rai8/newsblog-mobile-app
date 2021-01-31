import apiClient from './client';

//function to get all of the news
const getAll = async () => {
  try {
    const response = await apiClient.get('/news');
    if (response.data.success) {
      return response.data.news;
    }
  } catch (error) {
    console.log('Error while getting all news', error.message);
    return [];
  }
};

//method to get by category
const getByCategory = async (category, qty) => {
  const endPoint = qty ? `/news/${category}/${qty}` : `/news/${category}`;
  try {
    const response = await apiClient.get(endPoint);
    if (response.data.success) {
      return response.data.news;
    }
  } catch (error) {
    console.log('Error while getting all news by category', error.message);
    return [];
  }
};

export default {getAll, getByCategory};
