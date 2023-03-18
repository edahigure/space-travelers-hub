import { screen } from "@testing-library/react";
import Rockets from '../../src/pages/Rockets';
import { Rocket } from '../components/Rocket';
import { renderWithProviders } from "../__test__/utils/test-utils";

test("renders learn react link", () => {
  const id = "5e9d0d96eda699382d09d1ee";
  const rocketName = "Rocket Falcon 1";

  const component=renderWithProviders(<Rocket id={id}
    rocketName={rocketName}
  />);
  const td = screen.getByTestId('rocketName');
  expect(td).toHaveTextContent('Rocket Falcon 1');

});