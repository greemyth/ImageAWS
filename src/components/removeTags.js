import React, { useState } from 'react';
import axios from 'axios';
import './removeTags.css'; // Import your CSS file for styling

const RemoveTags = () => {
  const [url, setUrl] = useState('');
  const [tags, setTags] = useState('');

  const handleRemove = async () => {
    try {
      await axios.post('https://f0e3du2g15.execute-api.us-east-1.amazonaws.com/dev/remove-tag', {
        url: url,
        tags: tags.split(',').map(tag => tag.trim())
      });
      alert('Tags removed successfully');
    } catch (error) {
      console.error('Error removing tags:', error);
    }
  };

  return (
    <div className="remove-tags-container">
      <h2>Remove Tags from Image</h2>
      <input
        type="text"
        placeholder="Image URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter tags to remove separated by commas"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <button onClick={handleRemove}>Remove Tags</button>
    </div>
  );
};

export default RemoveTags;
