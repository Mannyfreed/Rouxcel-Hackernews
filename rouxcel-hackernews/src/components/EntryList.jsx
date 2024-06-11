import React from 'react';
import Entry from './Entry';

const EntryList = ({ entries = [], onDeleteEntry, onAddStory }) => {
  return (
    <div>
      {entries.map((entry, index) => (
        <React.Fragment key={entry.id}>
          <Entry entry={entry} onDeleteEntry={onDeleteEntry} onAddStory={onAddStory} />
          {index < entries.length - 1 && <hr className="my-4 border-t-2 border-gray-300" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default EntryList;
