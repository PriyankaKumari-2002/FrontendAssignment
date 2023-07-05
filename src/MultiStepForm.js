import React, { useState } from 'react';
import Select from 'react-select';
const countryOptions = [
  { value: 'IN', label: '🇮🇳 +91' },
  { value: 'US', label: '🇺🇸 +1' },
  // Add more country options as needed
];
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

  const handleMultiFileUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    setMultiFiles(uploadedFiles);
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

  const handleSubmitForm = () => {
    // Submit form logic goes here
    // Display success message or handle form submission status
    // Reset form fields and state
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

export default MultiStepForm;
