import React, { useState } from 'react';
import './App.css';

function App() {
  const [websiteLink, setWebsiteLink] = useState('');
  const [acknowledgment, setAcknowledgment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const backendUrl = 'http://127.0.0.1:5000/scrape';

    try {
      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ websiteLink }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Get the filename from the Content-Disposition header
      const contentDisposition = response.headers.get('Content-Disposition');
      const filename = contentDisposition ? contentDisposition.split('filename=')[1] : 'scraped_data.csv';

      // Create a Blob from the response content
      const blob = await response.blob();

      // Create a link element and trigger a click to download the file
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = filename;
      link.click();
      window.URL.revokeObjectURL(link.href);

      setAcknowledgment('Download complete!');
    } catch (error) {
      console.error('Error:', error.message);
      setAcknowledgment('Error occurred during processing.');
    }
  };

  return (
    <div className="App">
      <h1>Web Scraping Frontend</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="websiteLink">Enter URL:</label>
        <input
          type="text"
          id="websiteLink"
          value={websiteLink}
          onChange={(e) => setWebsiteLink(e.target.value)}
          required
        />
        <button type="submit">Download</button>
      </form>
      <div id="acknowledgment">{acknowledgment}</div>
    </div>
  );
}

export default App;
