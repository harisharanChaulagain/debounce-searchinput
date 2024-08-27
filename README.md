# debounce-search-input

A React component for a search input field with debounce functionality.

## Installation

To install the package, use npm or yarn:

```bash
npm install debounce-search-input
```

## Usage

```bash
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
```
