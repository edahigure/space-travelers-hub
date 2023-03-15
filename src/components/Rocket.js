import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Rocket = (props) => {
  const {
    id,
    rocketName,
    description,
    flickrImages,
  } = props;
  return (
    <div className="rocketCard">
      <img src={flickrImages} className="rocketImg"/>

      <div className="rocketInfo"  >
        <div>{rocketName}</div>
        <div className="description">
          {description}
        </div>
        <Button variant="primary">Go somewhere</Button>
      </div>
    </div>
  )
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

export default Rocket;
