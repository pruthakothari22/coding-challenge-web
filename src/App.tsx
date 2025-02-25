import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Card from './components/Card';
import { filterPets } from './utils/filterPetsByGender';
import ErrorToast from './components/ErrorToast';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    justify-content: center;
    flex-direction: row;
  }
`;

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [ownerData, setOwnerData] = useState([]);
  const [error, setError] = useState('');

  // Function to fetch data from the API
  const fetchData = async () => {
    // Get the API URL from the environment variables
    const apiUrl = process.env.REACT_APP_API_URL;

    // Check if the API URL is defined
    if (!apiUrl) {
      setError('API URL is not defined');
      setIsLoading(false);
      return;
    }

    try {
      // Fetch data from the API
      const res = await axios.get(apiUrl);
      // Check if the response has data
      if (!res.data) {
        setError('No data available');
      } else {
        setOwnerData(res.data);
      }
    } catch (error) {
      setError('An error occurred while fetching data');
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Use filterPets function to filter ownerData
  const ownersPets = filterPets(ownerData, 'Cat');

  return (
    <CardWrapper>
      {/* Display error message if there is an error */}
      <ErrorToast error={error} />
      {ownersPets?.male?.length > 0 && (
        <Card
          pets={ownersPets.male}
          ownersGender='Male'
          isLoading={isLoading}
        />
      )}
      {ownersPets?.female?.length > 0 && (
        <Card
          pets={ownersPets.female}
          ownersGender='Female'
          isLoading={isLoading}
        />
      )}
    </CardWrapper>
  );
};

export default App;
