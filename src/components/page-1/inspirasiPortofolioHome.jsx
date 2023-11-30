import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
    <Row xs={1} md={2} lg={3} className="g-4">
      {cardData.map((data, index) => (
        <Col key={index}>
          <CardComponent title={data.title} description={data.description} images={data.images} />
        </Col>
      ))}
    </Row>
  );
};

export default InspirasiPortofolioHome;