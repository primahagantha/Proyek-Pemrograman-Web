import { useState } from "react";
import { Tooltip, Tab, Tabs } from "@mui/material";

const Product = () => {
  const card1Images = ["13.png", "14.png", "15.png", "16.png", "17.png"];
  const card2Images = [
    "4.png",
    "5.png",
    "6.png",
    "7.png",
    "8.png",
    "9.png",
    "10.png",
    "11.png",
  ];
  const card3Images = [
    "18.png",
    "19.png",
    "20.png",
    "21.png",
    "22.png",
    "23.png",
  ];

  const [card1Index, setCard1Index] = useState(0);
  const [card2Index, setCard2Index] = useState(0);
  const [card3Index, setCard3Index] = useState(0);

  const handleNext = (index, setIndex, arrayLength) => {
    setIndex((index + 1) % arrayLength);
  };

  const handlePrev = (index, setIndex, arrayLength) => {
    setIndex((index - 1 + arrayLength) % arrayLength);
  };

  const handleChange = () => {
    setCard1Index(0); // Reset indexes when changing tabs
    setCard2Index(0);
    setCard3Index(0);
  };

  return (
    <div className="container mt-2" id="product">
      <h2 className="text-center mb-5 mt-5">Produk Kami</h2>
      <Tabs value={false} onChange={handleChange} centered>
        <Tab label="Produk 1" href="#produk1" />
        <Tab label="Produk 2" href="#produk2" />
        <Tab label="Produk 3" href="#produk3" />
      </Tabs>

      <div id="produk1">
        <h2 className="text-center mb-3 mt-5">Produk 1</h2>
        <div className="carousel">
          <div className="carousel-inner">
            {card1Images.map((image, index) => (
              <Tooltip title={`Image ${index + 1}`} key={index} sx={{ fontSize: 18 }}>
                <div
                  className={`carousel-item ${index === card1Index ? 'active' : ''}`}
                  key={index}
                >
                  <img
                    src={`./img/web portofio1/${image}`}
                    className="d-block w-100"
                    alt={`Slide ${index}`}
                  />
                </div>
              </Tooltip>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            onClick={() => handlePrev(card1Index, setCard1Index, card1Images.length)}
          >
            Previous
          </button>
          <button
            className="carousel-control-next"
            onClick={() => handleNext(card1Index, setCard1Index, card1Images.length)}
          >
            Next
          </button>
        </div>
      </div>

      <div id="produk2">
        <h2 className="text-center mb-3 mt-5">Produk 2</h2>
        <div className="carousel">
          <div className="carousel-inner">
            {card2Images.map((image, index) => (
              <Tooltip title={`Image ${index + 1}`} key={index} sx={{ fontSize: 18 }}>
                <div
                  className={`carousel-item ${index === card2Index ? 'active' : ''}`}
                  key={index}
                >
                  <img
                    src={`./img/web portofio2/${image}`}
                    className="d-block w-100"
                    alt={`Slide ${index}`}
                  />
                </div>
              </Tooltip>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            onClick={() => handlePrev(card2Index, setCard2Index, card2Images.length)}
          >
            Previous
          </button>
          <button
            className="carousel-control-next"
            onClick={() => handleNext(card2Index, setCard2Index, card2Images.length)}
          >
            Next
          </button>
        </div>
      </div>

      <div id="produk3">
        <h2 className="text-center mb-3 mt-5">Produk 3</h2>
        <div className="carousel">
          <div className="carousel-inner">
            {card3Images.map((image, index) => (
              <Tooltip title={`Image ${index + 1}`} key={index} sx={{ fontSize: 18 }}>
                <div
                  className={`carousel-item ${index === card3Index ? 'active' : ''}`}
                  key={index}
                >
                  <img
                    src={`./img/web portofio3/${image}`}
                    className="d-block w-100"
                    alt={`Slide ${index}`}
                  />
                </div>
              </Tooltip>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            onClick={() => handlePrev(card3Index, setCard3Index, card3Images.length)}
          >
            Previous
          </button>
          <button
            className="carousel-control-next"
            onClick={() => handleNext(card3Index, setCard3Index, card3Images.length)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
