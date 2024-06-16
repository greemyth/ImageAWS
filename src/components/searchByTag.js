import React, { useState } from 'react';
import axios from 'axios';
import './searchByTags.css';

const SearchByTags = () => {
  const [tags, setTags] = useState('');
  const [links, setLinks] = useState([]);
  const [message, setMessage] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.post('https://f0e3du2g15.execute-api.us-east-1.amazonaws.com/dev/search', {
        tags: tags.split(',').map(tag => tag.trim())
      });
      setLinks(response.data.links);
      setMessage(response.data.message || '');
    } catch (error) {
      console.error('Error searching images:', error);
      setMessage('Search failed.');
    }
  };

  return (
    <div className="search-container">
      <h2>Search Images by Tags</h2>
      <input
        type="text"
        placeholder="Enter tags separated by commas"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        className="input-box"
      />
      <button onClick={handleSearch} className="search-button">Search</button>
      {message && <p className="message">{message}</p>}
      <div className="links-container">
        {links.map((link, index) => (
          <a key={index} href={link} target="_blank" rel="noopener noreferrer" className="link-item">{link}</a>
        ))}
      </div>
    </div>
  );
};

export default SearchByTags;
