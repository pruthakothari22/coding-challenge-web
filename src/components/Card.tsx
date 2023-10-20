import React from 'react';
import styled from 'styled-components';

import { Gender } from '../utils/types';

type CardProps = {
  ownersGender: Gender;
  pets: string[];
  isLoading: boolean;
};

// Styled component for the Card
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 250px;
  width: 100%;
  text-align: center;
  margin: 16px auto;
  @media (min-width: 768px) {
    max-width: 300px;
    margin: 16px;
  }
`;

const Header = styled.div`
  display: flex;
  background: #e63f3f;
  color: white;
  border-radius: 10px 10px 0 0;
  padding: 8px;
  height: 40px;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 24px;
`;

const ListItem = styled.li`
  list-style: none;
  align-items: center;
  padding: 0;
  margin: 8px;
`;

const ListItemUl = styled.ul`
  padding: 0;
`;

const SkeletonHeader = styled.div`
  background: #f0f0f0; /* Background color for the skeleton header */
  margin: 0;
  border-radius: 10px 10px 0 0;
  padding: 8px;
  height: 40px;
  margin-bottom: 24px;
`;

const SkeletonLoader = styled.div`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  position: relative;

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }

  height: 8px;
  border-radius: 0 0 4px 4px;
  text-align: center;
  margin: 8px auto;
  width: 150px;
`;

const Card: React.FC<CardProps> = ({ isLoading, ownersGender, pets }) => {
  // Display skeleton loader while loading
  if (isLoading) {
    return (
      <CardContainer>
        <SkeletonHeader />
        {Array.from({ length: 3 }, (_, index) => (
          <SkeletonLoader key={index} />
        ))}
      </CardContainer>
    );
  }

  return (
    <CardContainer>
      <Header>{ownersGender}</Header>
      <PetsList pets={pets ?? []} />
    </CardContainer>
  );
};

const PetsList = ({ pets }: { pets: string[] }) => {
  if (!pets) {
    return null;
  }

  return (
    <ListItemUl>
      {pets.map((pet, index) => (
        <ListItem key={index}>{pet}</ListItem>
      ))}
    </ListItemUl>
  );
};

export default Card;
