import React, { useEffect, useState } from 'react';

function TestComponent() {
  const [data, setData] = useState('');

  useEffect(() => {
    // Fetch the data from your Express server
    fetch('http://localhost:3001/test') // Ensure this matches your server's address and port
      .then(response => response.text()) // Convert the response to text
      .then(text => setData(text)) // Update the state with the fetched data
      .catch(error => console.error('Error fetching data:', error));
  }, []); // The empty dependency array ensures this effect only runs once on mount

  return (
    <div>
      {/* Render the fetched data */}
      <p> data: {data}</p>
      <p>yooooooo</p>
    </div>
  );
}

export default TestComponent;
