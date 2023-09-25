import React from 'react';
import { useNavigate } from 'react-router-dom';

function ResultPage() {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Result Page</h1>
      <p>Congratulations! Form submitted successfully.</p>
      <button onClick={handleReturnHome}>Return to Homepage</button>
    </div>
  );
}

export default ResultPage;





