import React, { useState } from 'react';
import Form from './components/Form';
import EntryList from './components/EntryList';
import './App.css'; // if using custom styling

const App = () => {
  const [entries, setEntries] = useState([]);

  const handleCreateEntry = (item) => {
    setEntries([...entries, item]);
  };

  const handleDeleteEntry = (entryId) => {
    const updatedEntries = entries.filter((entry) => entry.id !== entryId);
    setEntries(updatedEntries);
  };

  return (
    <div className="container mx-auto mt-4">
      <Form onCreateEntry={handleCreateEntry} />
      <EntryList entries={entries} onDeleteEntry={handleDeleteEntry} />
    </div>
  );
};

export default App;
