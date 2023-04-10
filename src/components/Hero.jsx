import {
  Box,
  HStack,
  Container,
  Stack,
  Flex,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { ArrowForwardIcon, EmailIcon } from "@chakra-ui/icons";
import React, { useEffect } from "react";
import BgVideo from "../assets/12013.mp4";
import thumbnail from "../assets/thumbnail.jpg";
import styles from "./index.module.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Box className={styles.showcase}>
        <video src={BgVideo} muted loop autoPlay poster={thumbnail}></video>
        <Box
          className={styles.text}
          maxW={{ base: "xl", md: "3xl" }}
          px={{ base: "1em" }}
          pl={{ base: "1em", sm: "3em", md: "6em" }}
          pt={{ base: "10em", md: "12em" }}
        >
          <Heading
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-easing="linear"
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
          >
            <Text
              as={"span"}
              fontWeight={800}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                zIndex: 1,
              }}
            >
              We Offer Agency,
            </Text>
            <br />
            <Text as={"span"} fontWeight={800}>
              Facility &
            </Text>
            <Text pl={2} as={"span"} fontWeight={800}>
              Shipping Services
            </Text>
          </Heading>
          <Text py={2} fontSize={{ base: 16, sm: 18 }}>
            Step into the world of seamless logistics and efficient
            transportation with our comprehensive range of maritime services. We
            provide and charter vessels for the coastal transportation of
            petroleum products, crude oil and its derivatives, ensuring timely
            and reliable delivery of your cargo.
          </Text>

          <HStack spacing={2} py={2}>
            <Button
              rightIcon={<ArrowForwardIcon />}
              colorScheme="teal"
              variant="solid"
            >
              Read More
            </Button>
            <Button
              rightIcon={<EmailIcon />}
              colorScheme="teal"
              variant="outline"
            >
              Contact Us
            </Button>
          </HStack>

          <HStack spacing={3} className={styles.social} pt={{ base: "3em" }}>
            <FaFacebook fontSize={24} />
            <FaTwitter fontSize={24} />
            <FaLinkedin fontSize={24} />
            <FaInstagram fontSize={24} />
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
