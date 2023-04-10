import { Box } from "@chakra-ui/react";
import React from "react";
import ImageSlider, { Slide } from "react-auto-image-slider";
import Img1 from "../assets/1541.jpg";
import Img2 from "../assets/1542.jpg";
import Img3 from "../assets/1543.jpg";
import Img4 from "../assets/1544.jpg";

const Slideshow = () => {
  return (
    <div>
      <Box height={"1.8em"} width={"2.8em"}>
        <ImageSlider effectDelay={500} autoPlayDelay={2000}>
          <Slide>
            <img objectfit="contain" alt="shipping vessel" src={Img1} />
          </Slide>
          <Slide>
            <img objectfit="contain" alt="shipping vessel" src={Img2} />
          </Slide>
          <Slide>
            <img objectfit="contain" alt="shipping vessel" src={Img3} />
          </Slide>
          <Slide>
            <img objectfit="contain" alt="shipping vessel" src={Img4} />
          </Slide>
        </ImageSlider>
      </Box>
    </div>
  );
};

export default Slideshow;
