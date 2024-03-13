import React, { useState } from 'react';

const ImageDisplay = ({ file }) => {
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileRead = (e) => {
    const content = e.target.result;
    setImageUrl(content);
  };

  const handleFileLoad = () => {
    const reader = new FileReader();
    reader.onloadend = handleFileRead;
    reader.readAsDataURL(file);
  };

  if (file) {
    handleFileLoad();
  }

  return (
    <div>
      {imageUrl && (
        <img src={imageUrl} alt="Uploaded" style={{ width: '100%', height: '100%' }} />
      )}
    </div>
  );
};

export default ImageDisplay;
