// src/components/Skills.js
import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Badge,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { FaDna, FaLaptopCode, FaChartBar, FaFlask } from "react-icons/fa";

const skills = {
  "Molecular Biology": [
    "DNA/RNA purification/quantification",
    "PCR/qPCR RT- PCR Gel electrophoresis",
    "Flow cytometry",
    "Spectroscopy",
    "Cell culture",
    "Cell viability assays",
    "Microbial isolation/characterization",
    "Aseptic techniques",
  ],
  "Data Analysis": [
    "Experimental design",
    "Minitab",
    "Graphpad",
    "R",
    "Statistical analysis",
  ],
  Programming: ["Python", "R", "Javascript", "LaTex", "HTML/CSS"],
  "Lab Techniques": [
    "Organic synthesis",
    "Image analysis for cellular assays",
    "Aseptic techniques",
  ],
};

const categoryIcons = {
  "Molecular Biology": FaDna,
  "Data Analysis": FaChartBar,
  Programming: FaLaptopCode,
  "Lab Techniques": FaFlask,
};

const Skills = () => {
  return (
    <Box
      borderRadius="1rem"
      p={5}
      bg="white"
      width="100%"
      boxShadow="0 0.3px 2.2px rgba(0, 0, 0, 0.02),
    0 0.8px 5.3px rgba(0, 0, 0, 0.028), 0 1.5px 10px rgba(0, 0, 0, 0.035),
    0 2.7px 17.9px rgba(0, 0, 0, 0.042), 0 5px 33.4px rgba(0, 0, 0, 0.05),
    0 12px 80px rgba(0, 0, 0, 0.07)"
    >
      <Heading as="h2" size="xl" mb={4}>
        Skills
      </Heading>
      {Object.entries(skills).map(([category, skillsList]) => (
        <Box key={category} mb={5}>
          <HStack spacing={3} mb={2}>
            <Icon as={categoryIcons[category]} w={6} h={6} color="teal.500" />
            <Heading as="h3" size="md">
              {category}
            </Heading>
          </HStack>
          <SimpleGrid columns={[1, 2, 3]} spacing={3}>
            {skillsList.map((skill, index) => (
              <Badge
                key={index}
                color="black"
                borderColor="teal.600"
                borderWidth="2px"
                p={2}
                borderRadius="md"
              >
                {skill}
              </Badge>
            ))}
          </SimpleGrid>
        </Box>
      ))}
    </Box>
  );
};

export default Skills;
