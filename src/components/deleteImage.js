import React, { useState } from 'react';
import axios from 'axios';
import './deleteImage.css'; // Import your CSS file for styling

const DeleteImage = () => {
  const [url, setUrl] = useState('');

  const handleDelete = async () => {
    try {
      await axios.post('https://f0e3du2g15.execute-api.us-east-1.amazonaws.com/dev/delete-image', { url });
      alert('Image deleted successfully');
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  return (
    <div className="delete-image-container">
      <h2>Delete Image</h2>
      <input
        type="text"
        placeholder="Image URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="input-box"
      />
      <button onClick={handleDelete} className="delete-button">Delete Image</button>
    </div>
  );
};

export default DeleteImage;
