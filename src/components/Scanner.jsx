import React from 'react';
import { FileUploader } from './FileUploader';

const Scanner = () => {
  const [file, handleFile] = React.useState('');
  const [imageData, setImageData] = React.useState(
    localStorage.getItem('uploadedImage') ?? ''
  );
  console.log(file, 'testingfile');
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        gap: '20px',
        padding: '2%',
      }}
    >
      <div>Meter Scanner</div>

      <div>
        <img src={imageData} alt="Uploaded" height={'300px'} width={'300px'} />
      </div>

      <div>
        <FileUploader handleFile={handleFile} setImageData={setImageData} />
      </div>
      <div>
        {imageData && (
          <img
            src={imageData}
            alt="Uploaded"
            height={'100px'}
            width={'100px'}
          />
        )}
      </div>
    </div>
  );
};

export default Scanner;
