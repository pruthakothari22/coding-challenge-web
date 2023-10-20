export type Person = {
  name: string;
  gender: Gender;
  age: number;
  pets: Pet[] | null;
};

export type Pet = {
  name: string;
  type: string;
};

export type Gender = 'Male' | 'Female';
