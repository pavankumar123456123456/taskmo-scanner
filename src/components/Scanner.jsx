import React from 'react';
import { FileUploader } from './FileUploader';

const Scanner = () => {
  const [file, handleFile] = React.useState('');
  const [imageData, setImageData] = React.useState(
    localStorage.getItem('uploadedImage') ?? ''
  );
  console.log(file, 'testingfile');
  return (
    <div>
      <div>scanner</div>
      <FileUploader handleFile={handleFile} setImageData={setImageData} />
      {imageData && (
        <img src={imageData} alt="Uploaded" height={'100px'} width={'100px'} />
      )}
    </div>
  );
};

export default Scanner;
