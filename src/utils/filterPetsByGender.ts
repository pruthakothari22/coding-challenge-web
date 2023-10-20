import { Gender, Person } from './types';

export function filterPets(
  data: Person[],
  gender: Gender,
  petType: string
): string[] {
  // Filter and map pets based on gender and type
  const filteredPets = data
    .filter((person) => person.gender.toLowerCase() === gender.toLowerCase())
    .flatMap((person) =>
      person.pets ? person.pets.filter((pet) => pet.type === petType) : []
    );

  // Extract and sort pet names alphabetically
  const petNames = filteredPets.map((pet) => pet.name).sort();

  return petNames;
}
