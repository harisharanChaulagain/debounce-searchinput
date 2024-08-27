import React, { useState } from 'react';
import DebounceSearchInput from 'debounce-search-input';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Handle the search logic here
  };

  return (
    <div>
      <DebounceSearchInput
        placeholder="Search..."
        value={searchQuery}
        onSearch={handleSearch}
        debounceTimeout={300} // Customize debounce timeout if needed
      />
      <p>Search Query: {searchQuery}</p>
    </div>
  );
}

export default App;
