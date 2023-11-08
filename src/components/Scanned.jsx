import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import meterReadingPrev from '../assets/images-power.jpeg';
const Scanned = () => {
  const navigate = useNavigate();
  function randomInteger(min, max) {
    return (Math.random() * (max - min + 1)).toFixed(1) + min;
  }
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
        height: '100vh',
        gap: '20px',
        padding: '2%',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div>Scanned Image Preview</div>
        <div>
          <img
            src={imageData}
            alt="Uploaded"
            height={'300px'}
            width={'300px'}
          />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '10px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div>Detected Meter Reading</div>
        <div>
          <img
            src={meterReadingPrev}
            alt="Uploaded"
            height={'50px'}
            width={'100px'}
          />
        </div>
      </div>
      <div style={{ display: 'flex', gap: '2px' }}>
        <div>Detected value : </div>
        <div>
          <span>
            {/* {randomInteger(100, 1000)} */}
            0.062
          </span>
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div>Detected Units :</div>
        <div>&nbsp;kwh</div>
      </div>
      <div>
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            localStorage.removeItem('uploadedImage');
            navigate('/scanner');
          }}
        >
          Rescan
        </Button>
      </div>
    </div>
  );
};

export default Scanned;
