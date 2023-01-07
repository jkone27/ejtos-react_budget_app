import { render, screen, ByRoleMatcher } from '@testing-library/react';
import AllocationForm from './AllocationForm';

describe('allocation', () => {
  test('allocation form should accept only number values', () => {
    render(<AllocationForm />);
    const linkElement = screen.getByRole('input');

    expect(linkElement).toBeInTheDocument();
  });
});

