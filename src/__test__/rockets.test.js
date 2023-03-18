import { screen } from '@testing-library/react';
import { Rocket } from '../components/Rocket';
import { renderWithProviders } from './utils/test-utils.tsx';

test('renders learn react link', () => {
  const id = '5e9d0d96eda699382d09d1ee';
  const rocketName = 'Rocket Falcon 1';

  renderWithProviders(<Rocket
    id={id}
    rocketName={rocketName}
  />);
  const td = screen.getByTestId('rocketName');
  expect(td).toHaveTextContent('Rocket Falcon 1');
});
