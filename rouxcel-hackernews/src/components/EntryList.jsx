import React from 'react';
import Entry from './Entry';

const EntryList = ({ entries = [], onDeleteEntry, onAddStory }) => {
  return (
    <div>
      {entries.map((entry) => (
        <Entry key={entry.id} entry={entry} onDeleteEntry={onDeleteEntry} onAddStory={onAddStory} />
      ))}
    </div>
  );
};

export default EntryList;
