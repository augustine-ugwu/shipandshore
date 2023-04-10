import {
  Box,
  SimpleGrid,
  Text,
  CardFooter,
  CardHeader,
  Button,
  Heading,
  CardBody,
  Card,
  chakra,
  Stack,
  Flex,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";
import agency from "../assets/agency.svg";
import facility from "../assets/facility.svg";
import shipping from "../assets/shipping.svg";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

const Feature = ({ title, text, src, buttontext }) => {
  return (
    <>
      <Container py={2}>
        <Card height={"24em"} boxShadow={"lg"}>
          <CardBody>
            <Stack p={4}>
              <Flex
                w={14}
                h={14}
                align={"center"}
                justify={"center"}
                color={"white"}
                rounded={"full"}
                mb={1}
              >
                {src}
              </Flex>
              <Flex>
                <Text display={"flex"} fontWeight={700}>
                  {title}
                </Text>
              </Flex>

              <Text>{text}</Text>
            </Stack>
            <CardFooter>
              <Button position={"absolute"} bottom={10} right={10}>
                {buttontext}
              </Button>
            </CardFooter>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box
      data-aos="fade-up"
      data-aos-duration="2000"
      bg={useColorModeValue("white", "gray.800")}
      p={{ base: 4, md: 10, lg: 24 }}
    >
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          src={<img src={shipping} alt={"Shipping Services"} w={10} h={10} />}
          title={"Shipping Services"}
          text={
            "Coastal vessels to the Nigerian National Petroleum Corporation (NNPC) for the movement of refined petroleum products from the refineries to designated ports in Lagos, Warri, Portharcourt and Calabar."
          }
          buttontext={"Learn More"}
        />
        <Feature
          src={<img src={agency} alt={"Agency Services"} w={10} h={10} />}
          title={"Agency Services"}
          text={
            "We provide crew manning and management services to shipping companies and also for our vessels and tugboats on charter to the Pipelines & Products Marketing Company Limited (PPMC)."
          }
          buttontext={"Learn More"}
        />
        <Feature
          src={
            <img
              src={facility}
              alt={"Facility Services"}
              color="white"
              w={10}
              h={10}
            />
          }
          title={"Facility Services"}
          text={
            "We maintain a very efficient and effective operational relationship with our foreign shipping and brokerage partners."
          }
          buttontext={"Learn More"}
        />
      </SimpleGrid>
    </Box>
  );
}
