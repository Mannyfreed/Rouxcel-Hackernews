import axios from 'axios';

const hackerNewsApi = axios.create({
  baseURL: 'https://hacker-news.firebaseio.com/v0',
});

export const fetchUser = async (userId) => {
  try {
    const response = await hackerNewsApi.get(`/user/${userId}.json`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

export const fetchItem = async (itemId) => {
  try {
    const response = await hackerNewsApi.get(`/item/${itemId}.json`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching item:', error);
    throw error;
  }
};
