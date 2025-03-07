import React from 'react';
import { useLocation } from 'react-router-dom';

const DefineRelationshipsPage = () => {
  const location = useLocation();
  const { selectedTables } = location.state || [];

  return (
    <div>
      <h1>Define Relationships</h1>
      <p>Selected Tables:</p>
      <ul>
        {selectedTables.length > 0 ? (
          selectedTables.map((table, index) => (
            <li key={index}>{table}</li>
          ))
        ) : (
          <p>No tables selected</p>
        )}
      </ul>
      <button>Back</button>
      <button>Next</button>
    </div>
  );
};

export default DefineRelationshipsPage;
