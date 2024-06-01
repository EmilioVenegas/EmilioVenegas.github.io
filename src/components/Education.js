// src/components/Education.js
import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Education = () => {
  return (
    <Box
      borderRadius="1rem"
      boxShadow="0 0.3px 2.2px rgba(0, 0, 0, 0.02),
    0 0.8px 5.3px rgba(0, 0, 0, 0.028), 0 1.5px 10px rgba(0, 0, 0, 0.035),
    0 2.7px 17.9px rgba(0, 0, 0, 0.042), 0 5px 33.4px rgba(0, 0, 0, 0.05),
    0 12px 80px rgba(0, 0, 0, 0.07)"
      width="100%"
      p={5}
    >
      <Heading as="h2" size="xl" mb={4}>
        Education
      </Heading>
      <VStack align="start" spacing={4}>
        <Box>
          <Text fontWeight="bold">
            Technologic degree in Pharmaceutical Chemistry
          </Text>
          <Text>
            Centro de Enseñanza Técnica Industrial, Guadalajara, Jalisco, México
          </Text>
          <Text>08/2018 – 06/2022</Text>
        </Box>
        <Box>
          <Text fontWeight="bold">B.A. in Biosciences</Text>
          <Text>
            Instituto Tecnológico y de Estudios Superiores de Monterrey,
            Zapopan, Jalisco, México
          </Text>
          <Text>08/2022 – 06/2026</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Education;
