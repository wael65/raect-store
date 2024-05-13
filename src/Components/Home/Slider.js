import { useState } from "react";
import Carousel from "react-bootstrap/Carousel"; // import item from "../../images/item.png";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: "de3y9ajne",
  },
});

const slider1 = cld.image("store/store-slide-1_kpzdjb");
const slider2 = cld.image("store/store-slide-2_yhexny");
const slider3 = cld.image("store/store-slide-3_korsjo");
const slider4 = cld.image("store/store-slide-4_tmyvnt");

const Silder = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="slider-background1" interval={2000}>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <div className="">
            <h3 className="slider-title">Big Sale</h3>
            <p className="slider-text">Descount Up To 50%</p>
          </div>
          <AdvancedImage
            cldImg={slider1}
            style={{ height: "20em", width: "20em" }}
          />
        </div>
      </Carousel.Item>
      <Carousel.Item className="slider-background2" interval={2000}>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <div className="">
            <h3 className="slider-title">Electronic Festival</h3>
            <p className="slider-text">All Devices You Nees</p>
          </div>
          <AdvancedImage
            cldImg={slider2}
            style={{ height: "20em", width: "20em" }}
          />
        </div>
      </Carousel.Item>

      <Carousel.Item className="slider-background3" interval={2000}>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <div className="">
            <h3 className="slider-title">Bueaty Hub</h3>
            <p className="slider-text">Hear You Are a Queen</p>
          </div>
          <AdvancedImage
            cldImg={slider3}
            style={{ height: "20em", width: "20em" }}
          />
        </div>
      </Carousel.Item>

      <Carousel.Item className="slider-background4" interval={2000}>
        <div className="d-flex justify-content-center align-items-center">
          <div className="">
            <h3 className="slider-title">Games Lover</h3>
            <p className="slider-text">Don't Stop Gaming</p>
          </div>
          <AdvancedImage
            cldImg={slider4}
            style={{ height: "20em", width: "20em" }}
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Silder;
