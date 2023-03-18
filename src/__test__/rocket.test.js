import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { useDispatch, useSelector } from 'react-redux';

import Rockets from '../pages/Rockets';
import { Rocket } from '../components/Rocket';

import { reserveRocket, cancelRocket } from '../redux/rockets/rocketsSlice';
import {renderWithProviders} from './utils/test-utils'


import configureStore from 'redux-mock-store';
const mockStore = configureStore([]);

describe('My Connected React-Redux Component', () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore({
      rocketList: [
        {
          description: "The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.",
          flickrImages: "https://imgur.com/azYafd8.jpg",
          id: "5e9d0d95eda69955f709d1eb",
          reserved: true,
          rocketName: "Falcon 1"
        },
        {
          description: "Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.",
          flickrImages: "https://farm4.staticflickr.com/3955/32915197674_eee74d81bb_b.jpg",
          id: "5e9d0d95eda69973a809d1ec",
          reserved: true,
          rocketName: "Falcon 9"
        },
        {
          description: "With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.",
          flickrImages: "https://farm5.staticflickr.com/4645/38583830575_3f0f7215e6_b.jpg",
          id: "5e9d0d95eda69974db09d1ed",
          reserved: true,
          rocketName: "Falcon Heavy"
        },
        {
          description: "Starship and Super Heavy Rocket represent a fully reusable transportation system designed to service all Earth orbit needs as well as the Moon and Mars. This two-stage vehicle — composed of the Super Heavy rocket (booster) and Starship (ship) — will eventually replace Falcon 9, Falcon Heavy and Dragon.",
          flickrImages: "https://live.staticflickr.com/65535/48953946911_e60c5bcc5c_b.jpg",
          id: "5e9d0d96eda699382d09d1ee",
          rocketName: "Starship"
        },
      ],
      status: 'idle',
    });

    store.dispatch = jest.fn();

    const description = "Starship and Super Heavy Rocket represent a fully reusable transportation system designed to service all Earth orbit needs as well as the Moon and Mars. This two-stage vehicle — composed of the Super Heavy rocket (booster) and Starship (ship) — will eventually replace Falcon 9, Falcon Heavy and Dragon.";
    const flickrImages = "https://live.staticflickr.com/65535/48953946911_e60c5bcc5c_b.jpg";
    const id = "5e9d0d96eda699382d09d1ee";
    const rocketName = "Starship";
    const reserved = true;
    const str = 'rocket4';


    component = renderer.create(
      <Provider store={store}>
        <Rocket id={id}
          rocketName={rocketName}
        />
      </Provider>
    );

  });

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should dispatch an action on button click', () => {
    renderer.act(() => {
      component.root.findByType('button').props.onClick();
    });

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(
      reserveRocket({ id: '5e9d0d96eda699382d09d1ee'})
    );
  });

});