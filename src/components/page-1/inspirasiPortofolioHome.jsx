import Grid from '@material-ui/core/Grid';
import CardComponent from './cardComponent';

const InspirasiPortofolioHome = () => {
  const images1 = [
    { src: 'https://th.bing.com/th/id/OIP.G5K5Gaho70dmBfvNxpH0zwHaEK?rs=1&pid=ImgDetMain', title: 'contoh1' },
  ];
  
  const images2 = [
    { src: 'https://th.bing.com/th/id/OIP.gIXM6X9FNhNIZo6ZiexFwgHaEo?rs=1&pid=ImgDetMain', title: 'contoh2' },
  ];
  
  const images3 = [
    { src: 'https://th.bing.com/th/id/OIP.HLQAQtgssfvGGWqxl6mJcwHaEK?rs=1&pid=ImgDetMain', title: 'contoh3' },
  ];
  
  const cardData = [
    { title: 'Card 1', description: 'Card 1 description', images: images1 },
    { title: 'Card 2', description: 'Card 2 description', images: images2 },
    { title: 'Card 3', description: 'Card 3 description', images: images3 },
  ];


  
  return (
    <Grid container spacing={3}>
      {cardData.map((data, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <CardComponent title={data.title} description={data.description} images={data.images} />
        </Grid>
      ))}
    </Grid>
 );
};

export default InspirasiPortofolioHome;