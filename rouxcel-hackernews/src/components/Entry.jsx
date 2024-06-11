import React from 'react';

const Entry = ({ entry }) => {
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
          <p>Story: {entry.title}</p>
          <p>Submitted by: {entry.by}</p>
        </div>
      );
    } else if (entry.type === 'comment') {
      return (
        <div>
          <p>Comment: {entry.text}</p>
          <p>Link to story: {entry.parent}</p>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="border p-4 mb-4">
      {renderEntryType()}
      <button className="ml-2 px-4 py-2 bg-red-500 text-white rounded">
        Delete
      </button>
    </div>
  );
};

export default Entry;
