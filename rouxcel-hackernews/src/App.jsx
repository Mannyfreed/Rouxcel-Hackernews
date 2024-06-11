import React, { useState } from 'react';
import Form from './components/Form';
import EntryList from './components/EntryList';
import './App.css'; // if using custom styling
import { fetchItem } from './api';

const App = () => {
  const [entries, setEntries] = useState([]);

  const handleCreateEntry = (item) => {
    const entryExists = entries.some(entry => entry.id === item.id);
    if (!entryExists) {
      setEntries([...entries, item]);
    }
  };

  const handleDeleteEntry = (entryId) => {
    const updatedEntries = entries.filter((entry) => entry.id !== entryId);
    setEntries(updatedEntries);
  };

  const handleAddStory = async (storyId) => {
    try {
      const story = await fetchItem(storyId);
      handleCreateEntry(story);
    } catch (error) {
      console.error('Error fetching story:', error);
    }
  };

  return (
    <div className="container mx-auto mt-4">
      <Form onCreateEntry={handleCreateEntry} />
      <EntryList entries={entries} onDeleteEntry={handleDeleteEntry} onAddStory={handleAddStory} />
    </div>
  );
};

export default App;
