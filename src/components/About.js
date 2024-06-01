import React from "react";
import { Box, Heading, Text, Link, VStack, Flex } from "@chakra-ui/react";
import backgroundImage from "../assets/background_plate.jpg"; // Import your background image
import { FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <Box width="100%">
      <Flex
        borderRadius="1rem"
        bgImage={`url(${backgroundImage})`}
        bgSize="cover"
        bgPosition="center"
        width="100%"
        minH="80vh"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Flex
          direction="column"
          p={8}
          borderRadius="1rem"
          maxW={["90%", "lg"]}
          backdropFilter="blur(100px)"
          //   rowGap={5}
        >
          <Heading as="h1" size="2xl" mb={4}>
            Emilio Alonso Venegas Hernández
          </Heading>
          <Text fontSize="lg" color="gray.800" mb={4}>
            Biosciences Student @ Tec de Monterrey
          </Text>
          <VStack align="start" spacing={2}>
            <Text fontSize="md">
              <strong>Email:</strong>{" "}
              <Link href="mailto:emiliovenegas10@gmail.com" color="teal.800">
                emiliovenegas10@gmail.com
              </Link>
            </Text>
            <Text fontSize="md">
              <strong>Location:</strong> Zapopan, Jalisco, México
            </Text>

            <Flex justifyContent="center" width="100%" columnGap={10} mt={5}>
              <Link
                href="https://www.linkedin.com/in/emilio-venegas-5550431b5"
                isExternal
                color="teal.900"
                size="md"
              >
                <FaLinkedin fontSize={40} />
              </Link>
              <Link
                href="https://github.com/EmilioVenegas"
                isExternal
                color="teal.900"
              >
                <FaGithub fontSize={40} />
              </Link>
            </Flex>

            <Text fontSize="md"></Text>
          </VStack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default About;
