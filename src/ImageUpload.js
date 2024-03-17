import React, { useState} from 'react';
import ImageDisplay from './Drop2.js';


function ImageUpload() {
    const [picture, setPicture] = useState(0);

    const handleImageChange = (e) => {
        setPicture({
            image : URL.createObjectURL(e.target.files[0]),
            file : e.target.files[0],
            verification: "not verified"
        })
    }

    const uploadPicture = () => {

        const formData = new FormData();
        formData.append('image', picture.file);

        fetch("http://localhost:5000/aigc", {
            method: 'POST',
            body: formData,
        })
            .then((res) => {
                if (res.status == 418) {    //Teapot for non-image files
                    setPicture({verification: "Please upload a valid image file format (.jpg/.png/.tiff)"})
                    return null;

                } else if (!res.ok){
                    setPicture({verification: "Error uploading file"})
                    return null;
                }

                return res.json()
            })

            .then((data) => {
                if(data != null) {
                    setPicture({verification: data.format})
                }
            })

            .catch((error) => console.log(error))
           
    };




    return (
        <div className="content landing">
          <input type="file" name="image" onChange={handleImageChange}/>
          <br></br>
          <button onClick={uploadPicture}>Upload</button>
          <p>File extension: {picture.verification}</p>
          <div style={{width:"100px"}}>         
            <ImageDisplay file = {picture.file} ></ImageDisplay>
            </div>

        </div>
      );
    


}

export default ImageUpload;