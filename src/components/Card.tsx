import React from 'react';
import styled from 'styled-components';

import { Gender } from '../utils/types';
import SkeletonCard from './SkeletonCard';

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

// Header for the Card
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

// List item style
const ListItem = styled.li`
  list-style: none;
  align-items: center;
  padding: 0;
  margin: 8px;
`;

// Unordered list style
const ListItemUl = styled.ul`
  padding: 0;
`;

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

const Card: React.FC<CardProps> = ({ isLoading, ownersGender, pets }) => {
  return (
    <CardContainer>
      {isLoading ? (
        // Display skeleton loader while loading
        <SkeletonCard />
      ) : (
        <>
          <Header>{ownersGender}</Header>
          <PetsList pets={pets ?? []} />
        </>
      )}
    </CardContainer>
  );
};

export default Card;
