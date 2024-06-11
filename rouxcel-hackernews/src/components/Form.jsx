import React, { useState } from 'react';
import { fetchUser, fetchItem } from '../api';

const Form = ({ onCreateEntry }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const isUser = url.includes('user');
      let item;
      if (isUser) {
        const userId = extractUserId(url);
        item = await fetchUser(userId);
        item.type = 'user';
      } else {
        const itemId = extractItemId(url);
        item = await fetchItem(itemId);
        item.type = item.type || 'story'; // Assuming stories if no type is specified
      }
      //TODO check if item exists
      onCreateEntry(item);
      setUrl('');
    } catch (error) {
      console.error('Error creating entry:', error);
    }
  };

  const extractItemId = (url) => {
    const urlParts = url.split('/');
    return urlParts[urlParts.length - 1];
  };

  const extractUserId = (url) => {
    const urlParts = url.split('/');
    return urlParts[urlParts.length - 1];
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter HackerNews URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="p-2 border rounded"
      />
      <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
        Create
      </button>
    </form>
  );
};

export default Form;
