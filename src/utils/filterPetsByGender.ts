import { Person } from './types';

/**
 * Filters and extracts pet names based on pet type from the given data.
 *
 * @param data - An array of owners.
 * @param petType - The type of pet to filter by (e.g., 'Cat', 'Dog').
 * @returns An object with 'male' and 'female' properties, each containing an array of pet names of the given type, sorted alphabetically.
 */
export function filterPets(
  data: Person[],
  petType: string
): { male: string[]; female: string[] } {
  // Initialize objects to store pet names for both genders
  const result: {
    male: string[];
    female: string[];
  } = { male: [], female: [] };

  // Loop through the data and map pets based on type
  data.forEach((person) => {
    const gender = person.gender.toLowerCase();
    if (person.pets) {
      const filteredPets = person.pets.filter(
        (pet) => pet.type.toLowerCase() === petType.toLowerCase()
      );

      // Add pet names to the corresponding gender
      if (filteredPets.length > 0) {
        const petNames = filteredPets.map((pet) => pet.name);
        result[gender as 'male' | 'female'].push(...petNames);
      }
    }
  });

  // Sort the pet names alphabetically for each gender
  result.male.sort();
  result.female.sort();

  return result;
}
