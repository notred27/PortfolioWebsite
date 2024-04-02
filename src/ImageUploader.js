import FileUpload from './FileUpload.js';
import React, { useState} from 'react';
import b2 from './images/b2.png';


export default function ImageUploader({maxImgs}){
    let localIdx = 0
    const [numImages, setNumImages] = useState(0);
    const [images, setImages] = useState([]);
    const [displayedIdx, setDisplayedIdx] = useState(-1);

    

    const handelSetImages = (newImages) => {
        for(let i = 0; i < newImages.length; i++) {
            if(localIdx < maxImgs) {
                console.log("uploading image" + localIdx);
                verifyImage(newImages[i]);
                
                setNumImages(num => num + 1)
                localIdx = localIdx + 1
                setDisplayedIdx(localIdx - 1)
          
            } else {
                console.log("Too many images (max: 15)");
            }
        }
    }

 
    const verifyImage = (image) => {
        const formData = new FormData();
        formData.append('image', image);

        fetch("http://localhost:5000/aigc", {
            method: 'POST',
            body: formData,
        })
            .then((res) => res.json())

            .then((data) => {
                if(data != null) {
                    setImages((prevImages) => [
                        ...prevImages, 
                        {
                            image : URL.createObjectURL(image),
                            file : image,
                            verification: data.format
                        }
                    ]);
                    
                }
            })

            .catch((error) => console.log(error))
    };

    const nextImage = () => {
        if(numImages == 0) {
            console.log("Add images first!")
            return
        }
  
        setDisplayedIdx(idx => (idx + 1) % numImages)
    }

    const prevImage = () => {
        if(numImages == 0) {
            console.log("Add images first!")
            return
        }
  
        setDisplayedIdx(idx => (idx - 1 + numImages)  % numImages)
    }


    const ImagePreviews = images.map((img, i) => {
        return img.verification == "PNG" 
                ?<div key = {`aigc_${i}`} style={{maxWidth:"calc(20% - 20px)", margin:"10px",width:"10%",height:"90px", position:"relative"}}>
                    <img src = {img.image}  style={{maxWidth:"100%", maxHeight:"100%"}}></img>
                    <div className="Real"><p>Real</p></div>
                </div>

                :<div key = {`aigc_${i}`} style={{maxWidth:"calc(20% - 20px)", margin:"10px",width:"10%",height:"90px", position:"relative"}}>
                    <img src = {img.image}  style={{maxWidth:"100%", maxHeight:"100%"}}></img>
                    <div className="Fake"><p>Fake</p></div>
                </div>
    })


    return (
        <div>
            <div style={{display:"flex", flexDirection:"row", width:"100%", margin:"2%"}}>
                <div style={{width:"20vw", height:"20vw", justifyContent:"center"}}>
                <FileUpload onUpload={handelSetImages} count={1} formats={[".jpg", ".png", ".tiff"]}>
                    <div style={{display:"flex", width:"calc(20vw - 10px)", height:"calc(20vw - 10px)", border:"dashed gray 5px", borderRadius:"50px", alignItems:"center",justifyContent:"center"}}>
                        <span >Drop Image Files Here!</span>
                    </div>
                </FileUpload>
                </div>
            

                <div style={{display:"flex", flexWrap:"wrap", width:"75vw"}}>{ImagePreviews}</div>
            </div>

            
            <div>
                <p>{displayedIdx}</p>
                <button onClick={nextImage}>Next Img</button>
                <button onClick={prevImage}>Last Img</button>

            </div>
        </div>


    ) 
    
}