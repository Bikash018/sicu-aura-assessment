import React, { useRef, useState } from "react";

import { Link } from "react-router-dom";
import Webcam from 'react-webcam';
import background from "../src/assets/sicu-aura image.png";
import doctor from "../src/assets/doctor.png";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: 'user',
};

function Logincpy() {


  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const webcamRef = useRef(null);

  const capturePhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedPhoto(imageSrc);
  };

  const retakePhoto = () => {
    setCapturedPhoto(null);
  };



  return (
    <div className="login-container">
      <div className="image-container">
        <img src={background} alt="Background" />
      </div>
      <div className="form-container">
        <div className="img-container loginnav">
          <img src={doctor} alt="Logo" width="98" height="98" />
          <h1>
            <Link to="/signup">Sign Up</Link> / Login
          </h1>
        </div>
        <div className="card-container">
          <div className="webcam-container">
            {capturedPhoto ? (
            <img
              src={capturedPhoto}
              alt="Captured"
              style={{ width: '100%', marginBottom: '100px' }}
            />
            ) : (
              <Webcam
                audio={false}
                height={300}
                screenshotFormat="image/jpeg"
                width={300}
                videoConstraints={videoConstraints}
                ref={webcamRef}
              />
            )}

            <div className="capture-buttons">
                {capturedPhoto ? (
                <div style={{ display: 'flex', flexDirection: 'row', width : '100%', gap: '10px', justifyContent:'center' }}>
                  <button onClick={retakePhoto}>Retake</button>
                  <Link to="/home">
                    <button>Continue</button>
                    </Link>
                </div>
                 ) : (
                <div style={{ display: 'flex', flexDirection: 'row', width : '100%', justifyContent:'center' }} >
                    <button onClick={capturePhoto}>Capture</button>
                </div>
                )}
              

            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logincpy;
