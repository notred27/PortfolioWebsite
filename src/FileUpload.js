import React from 'react';


export default function FileUpload({onUpload, children, formats}) {
    
      const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
      };

    
    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
      
        // this is required to convert FileList object to array
        const files = [...e.dataTransfer.files];

      
        // check if some uploaded file is not in one of the allowed formats
        if (formats && files.some((file) => !formats.some((format) => file.name.toLowerCase().endsWith(format.toLowerCase())))) {
          console.log(`Only following file formats are acceptable: ${formats.join(', ')}`);
          return;
        }
      
        if (files && files.length) {
          onUpload(files);
        }
      };

      
      const drop = React.useRef(null);

      React.useEffect(() => {
        drop.current.addEventListener('dragover', handleDragOver);
        drop.current.addEventListener('drop', handleDrop);
      
        return () => {
          drop.current.removeEventListener('dragover', handleDragOver);
          drop.current.removeEventListener('drop', handleDrop);
        };
      }, []);
   


      return (
        <div ref={drop} style={{width:"100%", height:"100%"}}>
          {children}
        </div>
      );
}



