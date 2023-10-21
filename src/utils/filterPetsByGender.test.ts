import { filterPets } from './filterPetsByGender';
import { Person } from './types';

describe('filterPets function', () => {
  // Mock data used for testing
  const testData: Person[] = [
    {
      name: 'John',
      age: 23,
      gender: 'Male',
      pets: [
        { name: 'Fluffy', type: 'Cat' },
        { name: 'Buddy', type: 'Dog' },
      ],
    },
    {
      name: 'Jane',
      gender: 'Female',
      age: 25,
      pets: [
        { name: 'Whiskers', type: 'Cat' },
        { name: 'Fido', type: 'Dog' },
      ],
    },
  ];
  //Mock data used to test empty pets
  const emptyPetsTestData: Person[] = [
    {
      name: 'Janet',
      gender: 'Female',
      age: 26,
      pets: null,
    },
  ];

  it('should correctly filter and sort Cat pets for male and female owners', () => {
    const result = filterPets(testData, 'Cat');
    expect(result).toEqual({
      male: ['Fluffy'],
      female: ['Whiskers'],
    });
  });

  it('should correctly filter and sort Dog pets for male and female owners', () => {
    const result = filterPets(testData, 'Dog');
    expect(result).toEqual({
      male: ['Buddy'],
      female: ['Fido'],
    });
  });

  it('should return empty list when no pets are found', () => {
    const result = filterPets(emptyPetsTestData, 'Dog');
    expect(result).toEqual({
      male: [],
      female: [],
    });
  });
});
