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

  const fetchData = async () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    if (!apiUrl) {
      setError('API URL is not defined');
      setIsLoading(false);
      return;
    }

    try {
      const res = await axios.get(apiUrl);
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

  useEffect(() => {
    fetchData();
  }, []);

  // Filter male and female ownerData
  // Use your filterPets function to filter ownerData
  const maleOwnerPets = filterPets(ownerData, 'Male', 'Cat');
  const femaleOwnerPets = filterPets(ownerData, 'Female', 'Cat');

  return (
    <CardWrapper>
      <ErrorToast error={error} />
      {maleOwnerPets.length > 0 && (
        <Card pets={maleOwnerPets} ownersGender='Male' isLoading={isLoading} />
      )}
      {femaleOwnerPets.length > 0 && (
        <Card
          ownersGender='Female'
          pets={femaleOwnerPets}
          isLoading={isLoading}
        />
      )}
    </CardWrapper>
  );
};

export default App;
