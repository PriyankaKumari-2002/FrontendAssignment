import React, { useState } from 'react';
import axios from 'axios';
import { Link, BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Select from 'react-select';
const countryOptions = [
  { value: 'IN', label: '🇮🇳 +91' },
  { value: 'US', label: '🇺🇸 +1' },
  { value: 'Japan', label: 'Japan +81' },
  // Add more country options here..
];
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    

    try {
      const response = await axios.post('https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs/auth/login', {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        setMessage('Login successful!');
        navigate('/multi-step-form'); // Redirect to the MultiStepForm page
      } else {
        setMessage('Login failed. Please try again.');
      }
    } catch (error) {
      setMessage('Login failed. Please try again.');
    }
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  return (
    <div className="container mx-auto px-4">
      <card>
      <h1 className="text-2xl font-bold mb-4">Login Page</h1>
      <form onSubmit={handleLogin} className="mb-4">
        <div className="mb-4">
          <label className="block">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
        
          <label className="block">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Login
        </button>
      </form>
      <button onClick={handleForgotPassword} className="text-blue-500">
        Forgot Password
      </button>
      </card>
      <p>{message}</p>
      <div className="bubble"></div>
  <div className="leaf"></div>
    </div>
    
  );
};

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const handleSendOtp = (e) => {
    e.preventDefault();
    alert('OTP sent successfully!');
    // Simulating OTP sent to email 
    setOtpSent(true);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
  console.log('OTP verified successfully!');
  alert('OTP verified successfully!');
  };

  return (
    <div>
      <h1>Forgot Password</h1>
      {!otpSent ? (
        <form onSubmit={handleSendOtp}>
          <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button type="submit"onClick={handleSendOtp}>Send OTP</button>
        </form>
      ) : (
        <form onSubmit={handleVerifyOtp}>
          <p>OTP sent to your email address!</p>
          <div>
            <input type="number" maxLength={1} value={otp[0]} onChange={(e) => setOtp(e.target.value)} />
            <input type="number" maxLength={1} value={otp[1]} onChange={(e) => setOtp(e.target.value)} />
            <input type="number" maxLength={1} value={otp[2]} onChange={(e) => setOtp(e.target.value)} />
            <input type="number" maxLength={1} value={otp[3]} onChange={(e) => setOtp(e.target.value)} />
            <input type="number" maxLength={1} value={otp[4]} onChange={(e) => setOtp(e.target.value)} />
            <input type="number" maxLength={1} value={otp[5]} onChange={(e) => setOtp(e.target.value)} />
          </div>
          <button type="submit" onClick={handleVerifyOtp}> Verify OTP</button>

          
        </form>
      )}
    </div>
  );
};


const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [country, setCountry] = useState('');
  const [file, setFile] = useState(null);
  const [multiFiles, setMultiFiles] = useState([]);
  const [geolocationStatus, setGeolocationStatus] = useState('');

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
  };
  const [selectedFiles, setSelectedFiles] = useState([]);
  const handleMultiFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = files.filter((file) => {
      const fileType = file.type;
      return fileType === 'image/png' || fileType === 'application/pdf';
    });

    // Limiting the number of files to 5
    const limitedFiles = validFiles.slice(0, 5);
 
    setSelectedFiles(limitedFiles);
  };

  const handleGeolocationCapture = () => {
    if (navigator.geolocation) {
      // Display geolocation capture process
      setGeolocationStatus('Capturing geolocation...');
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // Update the status and store the geolocation coordinates
          setGeolocationStatus(`Geolocation captured: ${latitude}, ${longitude}`);
        },
        (error) => {
          // Handle geolocation capture error
          setGeolocationStatus('Geolocation capture failed.');
        }
      );
    } else {
      setGeolocationStatus('Geolocation is not supported by this browser.');
    }
  };
 
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleSubmitForm = () => {
    // Display success message or handle form submission status
    // And Reset form fields and state
    alert('Form submitted successfully!');
    setCurrentStep(1);
    setUserName('');
    setUserEmail('');
    setUserPhone('');
    setAddressLine1('');
    setAddressLine2('');
    setCity('');
    setState('');
    setPincode('');
    setCountry('');
    setFile(null);
    setMultiFiles([]);
    setGeolocationStatus('');
    setFormSubmitted(true);
  };

  const renderForm = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold mb-4">Step 1: Basic Details</h2>
            <div className="mb-4">
              <label className="block">User Name:</label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block">Email:</label>
              <input
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
      <label className="block">Phone Number:</label>
      <div className="flex">
        <div className="w-32">
          <Select
            options={countryOptions}
            defaultValue={countryOptions[0]}
            onChange={(selectedOption) => {
              // Handle country code change
            }}
            classNamePrefix="country-select"
          />
        </div>
        <input
          type="tel"
          value={userPhone}
          onChange={(e) => setUserPhone(e.target.value)}
          required
          className="flex-grow px-4 py-2 border border-gray-300 rounded"
        />
      </div>
    </div>
            <button onClick={handleNextStep} className="bg-blue-500 text-white px-4 py-2 rounded">
              Next
            </button>
          </div>
        );
      case 2:
        return (
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold mb-4">Step 2: Address</h2>
            <div className="mb-4">
              <label className="block">Address Line 1:</label>
              <input
                type="text"
                value={addressLine1}
                onChange={(e) => setAddressLine1(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block">Address Line 2:</label>
              <input
                type="text"
                value={addressLine2}
                onChange={(e) => setAddressLine2(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block">City:</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block">State:</label>
              <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block">Pincode:</label>
              <input
                type="text"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block">Country:</label>
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
            </div>
            <button onClick={handleNextStep} className="bg-blue-500 text-white px-4 py-2 rounded">
              Next
            </button>
            <button onClick={handlePrevStep} className="border border-blue-500 text-blue-500 px-4 py-2 rounded">
              Previous
            </button>
          </div>
        );
      case 3:
        return (
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold mb-4">Step 3: File Upload</h2>
            <div className="mb-4">
              <label className="block">File Upload:</label>
              <input
                type="file"
                accept=".png, .pdf"
                onChange={handleFileUpload}
                required
                className="w-full"
              />
            </div>
            <button onClick={handleNextStep} className="bg-blue-500 text-white px-4 py-2 rounded">
              Next
            </button>
            <button onClick={handlePrevStep} className="border border-blue-500 text-blue-500 px-4 py-2 rounded">
              Previous
            </button>
          </div>
        );
      case 4:
        return (
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold mb-4">Step 4: Multi File Upload</h2>
            <div className="mb-4">
              <label className="block">Multi File Upload:</label>
              <input
                type="file"
                accept=".png, .pdf"
                multiple
                onChange={handleMultiFileUpload}
                required
                className="w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block">Geolocation Status:</label>
              <span>{geolocationStatus}</span>
              <button onClick={handleGeolocationCapture} className="bg-blue-500 text-white px-4 py-2 rounded">
                Capture Geolocation
              </button>
            </div>
            <button onClick={handleNextStep} className="bg-blue-500 text-white px-4 py-2 rounded">
              Next
            </button>
            <button onClick={handlePrevStep} className="border border-blue-500 text-blue-500 px-4 py-2 rounded">
              Previous
            </button>
          </div>
        );
      case 5:
        return (
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold mb-4 mr-4 ">Step 5: Confirmation</h2>
            <p>User Name: {userName}</p>
            <p>Email: {userEmail}</p>
            <p>Phone Number: {userPhone}</p>
            <p>Address Line 1: {addressLine1}</p>
            <p>Address Line 2: {addressLine2}</p>
            <p>City: {city}</p>
            <p>State: {state}</p>
            <p>Pincode: {pincode}</p>
            <p>Country: {country}</p>
            {file && <p>File: {file.name}</p>}
            {multiFiles.length > 0 && (
              <div>
                <p>Multi Files:</p>
                <ul>
                  {multiFiles.map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              </div>
            )}
            <p>Geolocation Status: {geolocationStatus}</p>
            <button onClick={handleSubmitForm} className="bg-blue-500 text-white px-4 py-2 rounded">
              Submit
            </button>
            <button onClick={handlePrevStep} className="border border-blue-500 text-blue-500 px-4 py-2 rounded">
              Previous
            </button>
            {formSubmitted && <p>Form submitted successfully!</p>}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Multi-Step Form</h1>
      {renderForm()}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/multi-step-form" element={<MultiStepForm />} />
      </Routes>
    </Router>
  );
};

export default App;








