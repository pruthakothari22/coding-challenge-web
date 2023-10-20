import { Gender, Person } from './types';

/**
 * Filters and extracts pet names based on gender and pet type from the given data.
 *
 * @param data - An array of owners.
 * @param gender - The gender to filter by ('Male' or 'Female').
 * @param petType - The type of pet to filter by (e.g., 'Cat', 'Dog').
 * @returns An array of pet names that match the given gender and pet type, sorted alphabetically.
 */

export function filterPets(
  data: Person[],
  gender: Gender,
  petType: string
): string[] {
  // Filter and map pets based on gender and type
  const filteredPets = data
    .filter((person) => person.gender.toLowerCase() === gender.toLowerCase())
    .flatMap((person) =>
      person.pets
        ? person.pets.filter(
            (pet) => pet.type.toLowerCase() === petType.toLocaleLowerCase()
          )
        : []
    );

  // Extract and sort pet names alphabetically
  const petNames = filteredPets.map((pet) => pet.name).sort();

  return petNames;
}
