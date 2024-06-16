import React, { useState } from 'react';
import './upload.css';

const UploadImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      setMessage('Please select an image file first.');
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);

    reader.onloadend = async () => {
      const base64Data = reader.result.split(',')[1]; // Extract base64 data from Data URL

      try {
        const response = await fetch('https://cgwr9t06d8.execute-api.us-east-1.amazonaws.com/dev/upload', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fileContent: base64Data,
            fileName: selectedFile.name,
          }),
        });

        const result = await response.json();
        setMessage(result.body || 'Image Uploaded');
      } catch (error) {
        console.error('Error uploading image:', error);
        setMessage('Image Uploaded.');
      }
    };
  };

  return (
    <div className="upload-container">
      <h2>Upload Image</h2>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={handleFileChange} accept="image/*" className="file-input" />
        <button type="submit" className="upload-button">Upload</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UploadImage;
