import React from 'react';
import { FileUploader } from './FileUploader';

const Scanner = () => {
  const [file, handleFile] = React.useState('');

  console.log(file, 'testingfile');
  return (
    <div>
      <div>scanner</div>
      <FileUploader handleFile={handleFile} />
    </div>
  );
};

export default Scanner;
