import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelRocket } from '../redux/rockets/rocketsSlice';

function Rocket(props) {
  const {
    id,
    rocketName,
    description,
    flickrImages,
    reserved,
  } = props;
  const dispatch = useDispatch();
  return (
    <div className="rocketCard">
      <img src={flickrImages} className="rocketImg" alt="rocket" />

      {!reserved && (

        <div className="rocketInfo">
          <div data-testid="rocketName">{rocketName}</div>
          <div className="description">
            {description}
          </div>
          <Button
            variant="primary"
            className="reserveRocket"
            onClick={() => {
              dispatch(reserveRocket({ id }));
            }}
          >
            Reserve rocket
          </Button>
        </div>
      )}

      {reserved && (
        <div className="rocketInfo">
          <div data-testid="rocketName">{rocketName}</div>
          <div className="description">
            <div className="reserved">Reserved</div>
            {' '}
            {description}
          </div>
          <Button
            variant="primary"
            className="cancelRocket"
            onClick={() => {
              dispatch(cancelRocket({ id }));
            }}
          >
            Cancel Reservation
          </Button>
        </div>
      )}
    </div>
  );
}

Rocket.propTypes = {
  id: PropTypes.string,
};

Rocket.defaultProps = {
  id: 'none',
};

Rocket.propTypes = {
  rocketName: PropTypes.string,
};

Rocket.defaultProps = {
  rocketName: 'none',
};

Rocket.propTypes = {
  description: PropTypes.string,
};

Rocket.defaultProps = {
  description: '',
};

Rocket.propTypes = {
  flickrImages: PropTypes.string,
};

Rocket.defaultProps = {
  flickrImages: '',
};

Rocket.propTypes = {
  reserved: PropTypes.bool,
};

Rocket.defaultProps = {
  reserved: false,
};

function sum(a, b) {
  return a + b;
}

export { Rocket, sum };
