// src/components/Education.js
import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

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
        About me
      </Heading>

      <Box>
        <Text>
          I am a Biociences student with outstanding academic and practical
          training in Molecular Biology, Pharmaceutical Chemistry, and advanced
          scientific research techniques. My focus is on applying rigorous
          experimental methods to address complex biological and chemical
          problems, particularly in the fields of oncology and endocrinology. I
          have developed a strong ability to design and execute research
          projects, analyze complex data, and effectively communicate results.
          My academic background and research experience are complemented by
          technical skills in the use of software and programming, allowing me
          to tackle scientific challenges from a multidisciplinary perspective.
        </Text>
      </Box>
    </Box>
  );
};

export default Education;
