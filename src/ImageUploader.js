import FileUpload from './FileUpload.js';
import React, { useState} from 'react';



export default function ImageUploader(){
    const [images, setImages] = useState([])



    const handelSetImages = (newImages) => {
        for(let i = 0; i < newImages.length; i++) {
            if(images.length < 15) { // TODO fix this (it doesnt seem to be triggering)
                setImages((prevImages) => [
                    ...prevImages,
                    {
                        image : URL.createObjectURL(newImages[i]),
                        file : newImages[i],
                        verification: "not verified"
                    }
                ]);
            } else {
                console.log("Too many images (max: 15)");

            }
        }
        
    }

    const verifyImages = () => {


        for (let i = 0; i < images.length; i++) {

            const formData = new FormData();
            formData.append('image', images[i].file);

            fetch("http://localhost:5000/aigc", {
                method: 'POST',
                body: formData,
            })
                .then((res) => res.json())

                .then((data) => {
                    if(data != null) {
                        // setPicture({verification: data.format})

                        setImages((prevImages) => [
                            ...prevImages.slice(1), //FIXME this seems a little hackish, try to find a better way
                            {
                                image : images[i].image,
                                file : images[i].file,
                                verification: data.format
                            }
                        ]);
                        
                    }
                })

                .catch((error) => console.log(error))

        }
        console.log("Images verified")
    };

    //Have the verified green/red overlay as a class name, so this map can just set the class?
    const a = images.map((img, i) => {
        return img.verification == "not verified" ?
        
            <div key = {`aigc_${i}`} style={{maxWidth:"calc(20% - 20px)", margin:"10px",width:"10%",height:"90px", position:"relative"}}>
                <img src = {img.image}  style={{maxWidth:"100%", maxHeight:"100%", borderRadius:"10px"}}></img>
                
            </div>

            :
            
            img.verification == "PNG" ?
                <div key = {`aigc_${i}`} style={{maxWidth:"calc(20% - 20px)", margin:"10px",width:"10%",height:"90px", position:"relative"}}>
                    <img src = {img.image}  style={{maxWidth:"100%", maxHeight:"100%"}}></img>
                    <div className="Real"><p>Real</p></div>
                    
                </div>
                :
                <div key = {`aigc_${i}`} style={{maxWidth:"calc(20% - 20px)", margin:"10px",width:"10%",height:"90px", position:"relative"}}>
                    <img src = {img.image}  style={{maxWidth:"100%", maxHeight:"100%"}}></img>
                    <div className="Fake"><p>Fake</p></div>
                    
                </div>
            
            
    })


    return (
        <div>
            <div style={{display:"flex", flexDirection:"row", width:"100%", margin:"2%"}}>
                <div style={{width:"20vw", height:"20vw", justifyContent:"center"}}>
                <FileUpload onUpload={handelSetImages} count={1} formats={[".jpg", ".png", ".tiff"]}>
                    <div style={{display:"flex", width:"calc(100% - 10px)", height:"calc(100% - 10px)", border:"dashed gray 5px", borderRadius:"50px", alignItems:"center",justifyContent:"center"}}>
                        <span >Drop Image Files Here!</span>
                    </div>
                </FileUpload>
                </div>
            

                <div style={{display:"flex", flexWrap:"wrap", width:"75vw"}}>{a}</div>
            </div>
            <button onClick={verifyImages}>Verify Images</button>
        </div>


    )
}