import React from 'react';

const Entry = ({ entry, onDeleteEntry, onAddStory }) => {
  const renderEntryType = () => {
    if (entry.type === 'user') {
      return (
        <div>
          <p>User: {entry.id}</p>
          <p>Joined: {new Date(entry.created * 1000).toLocaleDateString()}</p>
          <p>Karma: {entry.karma}</p>
        </div>
      );
    } else if (entry.type === 'story') {
      return (
        <div>
          <p>Title: {entry.title}</p>
          <p>Text: {entry.text}</p>
          <p>Url: {entry.url}</p>
          <p>Submitted by: {entry.by}</p>
        </div>
      );
    } else if (entry.type === 'comment') {
      return (
        <div>
          <p>Comment: {entry.text}</p>
          <p>
            Link to story: 
            <button 
              onClick={() => onAddStory(entry.parent)} 
              className="text-blue-500 underline ml-1"
            >
              {entry.parent}
            </button>
          </p>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="border p-4 mb-4">
      {renderEntryType()}
      <button
        onClick={() => onDeleteEntry(entry.id)}
        className="ml-2 px-4 py-2 bg-red-500 text-white rounded"
      >
        Delete
      </button>
    </div>
  );
};

export default Entry;
