import { useState } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';


const CardComponent = ({ title, description, images }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card
      style={{
        minWidth: '275px',
        maxWidth: '350px',
        marginTop: '10px',
        margin: '1rem',
        cursor: 'pointer',
        position: 'relative',
        transition: 'transform 0.3s, box-shadow 0.3s',
        transform: isHovered ? 'translateY(-5px)' : 'none',
        boxShadow: isHovered ? '0 10px 20px rgba(0,0,0,0.2)' : '0 3px 5px rgba(0,0,0,0.1)',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-root">
        {images.map((image, index) => (
          <Card.Img
            key={index}
            src={image.src}
            title={image.title}
            className="card-image"
          />
        ))}

        <Card.Body>
          <Card.Title style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{title}</Card.Title>
          <Card.Text style={{ fontSize: '0.9rem', color: '#888' }}>{description}</Card.Text>
        </Card.Body>
      </div>
    </Card>
  );
};

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default CardComponent;