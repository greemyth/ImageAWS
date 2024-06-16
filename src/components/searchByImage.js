import React, { useState } from 'react';
import axios from 'axios';
import './searchByImage.css'; // Import your CSS file for styling

const SearchByImage = () => {
  const [url, setUrl] = useState('');
  const [tags, setTags] = useState('');
  const [links, setLinks] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.post('https://f0e3du2g15.execute-api.us-east-1.amazonaws.com/dev/search-by-image', {
        url,
        tags: tags.split(',').map(tag => tag.trim())
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setLinks(response.data.links);
    } catch (error) {
      console.error('Error searching for images:', error);
    }
  };

  return (
    <div className="search-container">
      <h2>Search Images by URL and Tags</h2>
      <input 
        type="text" 
        placeholder="Image URL" 
        value={url} 
        onChange={(e) => setUrl(e.target.value)} 
        className="input-box"
      />
      <input 
        type="text" 
        placeholder="Tags (comma-separated)" 
        value={tags} 
        onChange={(e) => setTags(e.target.value)} 
        className="input-box"
      />
      <button onClick={handleSearch} className="search-button">Search</button>
      <div className="links-container">
        {links.map((link, index) => (
          <a key={index} href={link} target="_blank" rel="noopener noreferrer" className="link-item">{link}</a>
        ))}
      </div>
    </div>
  );
};

export default SearchByImage;
