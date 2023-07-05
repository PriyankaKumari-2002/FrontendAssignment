import React, { useState } from 'react';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');

  const handleSendOtp = (e) => {
    e.preventDefault();

    // Simulating OTP sent to email (frontend-only)
    setOtpSent(true);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();

    // TODO: Implement OTP verification logic (frontend-only)
    console.log('OTP verified successfully!');
  };

  return (
    <div>
      <h1>Forgot Password</h1>
      {!otpSent ? (
        <form onSubmit={handleSendOtp}>
          <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button type="submit">Send OTP</button>
        </form>
      ) : (
        <form onSubmit={handleVerifyOtp}>
          <p>OTP sent to your email address!</p>
          <div>
            <input type="text" maxLength={1} value={otp[0]} onChange={(e) => setOtp(e.target.value)} />
            <input type="text" maxLength={1} value={otp[1]} onChange={(e) => setOtp(e.target.value)} />
            <input type="text" maxLength={1} value={otp[2]} onChange={(e) => setOtp(e.target.value)} />
            <input type="text" maxLength={1} value={otp[3]} onChange={(e) => setOtp(e.target.value)} />
            <input type="text" maxLength={1} value={otp[4]} onChange={(e) => setOtp(e.target.value)} />
            <input type="text" maxLength={1} value={otp[5]} onChange={(e) => setOtp(e.target.value)} />
          </div>
          <button type="submit">Verify OTP</button>
        </form>
      )}
    </div>
  );
};

export default ForgotPasswordPage;

