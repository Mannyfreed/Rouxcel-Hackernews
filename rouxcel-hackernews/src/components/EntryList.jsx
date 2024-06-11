import React from 'react';
import Entry from './Entry';

const EntryList = ({ entries = [], onDeleteEntry }) => {
  return (
    <div>
      {entries.map((entry) => (
        <Entry key={entry.id} entry={entry} onDeleteEntry={onDeleteEntry} />
      ))}
    </div>
  );
};

export default EntryList;
