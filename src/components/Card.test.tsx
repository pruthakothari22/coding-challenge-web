import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card Component', () => {
  it('renders the component with loading skeleton', () => {
    render(<Card ownersGender='Male' pets={[]} isLoading={true} />);

    // Owner's gender should not be displayed
    const genderElement = screen.queryByText('Male');
    expect(genderElement).toBeNull();
  });

  it('renders the component with data', () => {
    const petNames = ['Garfield', 'Fido'];
    render(<Card ownersGender='Male' pets={petNames} isLoading={false} />);

    // Expect the owner's gender to be displayed
    const genderElement = screen.getByText('Male');
    expect(genderElement).toBeInTheDocument();

    // Expect each pet's name to be displayed
    for (const petName of petNames) {
      const petNameElement = screen.getByText(petName);
      expect(petNameElement).toBeInTheDocument();
    }
  });
});
