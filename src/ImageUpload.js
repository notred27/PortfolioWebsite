import React, { useState} from 'react';


function ImageUpload() {
    const [picture, setPicture] = useState(0);
    const [result, setResult] = useState(0);

    const handleImageChange = (e) => {
        setPicture({
            image : URL.createObjectURL(e.target.files[0]),
            file : e.target.files[0]
        })
    }

    const uploadPicture = () => {

        const formData = new FormData();
        formData.append('image', picture.file);

        fetch("http://localhost:5000/aigc", {
            method: 'POST',
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => setResult(data.format))
            .catch((error) =>setResult("Upload a valid image file (.jpg/.png/.tiff)"))
           
    };




    return (
        <div className="content landing">
          <input type="file" name="image" onChange={handleImageChange}/>
          <br></br>
          <button onClick={uploadPicture}>Upload</button>
          <p>File extension: {result}</p>

        </div>
      );
    


}

export default ImageUpload;