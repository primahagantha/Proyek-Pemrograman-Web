import {useState} from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
} from '@mui/material';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 350,
    marginTop: '10px',
    margin: '1rem',
    cursor: 'pointer',
    position: 'relative',
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
      transform: 'scale3d(1.05, 1.05, 1)',
    },
  },
  image: {
    height: 200,
    objectFit: 'cover',
  },
  content: {
    padding: '1rem',
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  description: {
    fontSize: '0.9rem',
    color: '#888',
  },
});

const CardComponent = ({ title, description, images }) => {
  const classes = useStyles();
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseEnter = (imageIndex) => {
    setHoveredImage(imageIndex);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  return (
    <Card className={`${classes.root} card-root`}>
      {images.map((image, index) => (
        <CardMedia
          key={index}
          className={classes.image}
          image={image.src}
          title={image.title}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        />
      ))}

      <CardContent className={classes.content}>
        <Typography className={classes.title}>{title}</Typography>
        <Typography className={classes.description}>{description}</Typography>
      </CardContent>
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
