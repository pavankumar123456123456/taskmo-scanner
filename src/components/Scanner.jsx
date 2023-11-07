import React from 'react';
import { FileUploader } from './FileUploader';
import previewmainscan from '../assets/previewMainscan.jpg';
const Scanner = () => {
  const [file, handleFile] = React.useState('');
  const [imageData, setImageData] = React.useState(
    localStorage.getItem('uploadedImage') ?? ''
  );
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        height: '80vh',
        gap: '20px',
        padding: '2%',
      }}
    >
      <div>Meter Scanner</div>

      <div
        style={{
          width: '300px',
          height: '300px',
          border: '1px solid black',
          backgroundImage: `url(${previewmainscan})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* <img src={imageData} alt="Uploaded" height={'300px'} width={'300px'} /> */}
      </div>

      <div>
        <FileUploader handleFile={handleFile} setImageData={setImageData} />
      </div>
    </div>
  );
};

export default Scanner;
