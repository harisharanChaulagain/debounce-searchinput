import React, { useState, useEffect } from 'react';

function DebounceSearchInput({ debounceTimeout = 300, onSearch }) {
  const [value, setValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, debounceTimeout);

    return () => {
      clearTimeout(handler);
    };
  }, [value, debounceTimeout]);

  useEffect(() => {
    onSearch(debouncedValue);
  }, [debouncedValue, onSearch]);

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Search..."
    />
  );
}

export default DebounceSearchInput;
