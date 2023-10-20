import React from 'react';
import styled from 'styled-components';

interface ErrorToastProps {
  error: string;
}

const ErrorContainer = styled.div`
  background: #e63f3f; /* Red background color */
  color: white;
  padding: 10px;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999; /* Ensure it's displayed above other content */
`;

const ErrorToast: React.FC<ErrorToastProps> = ({ error }) => {
  if (!error) {
    return null; // Don't render anything if there's no error
  }

  return <ErrorContainer>{error}</ErrorContainer>;
};

export default ErrorToast;
